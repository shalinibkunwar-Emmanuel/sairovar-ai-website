#!/usr/bin/env node
/**
 * Verifies every image under public/ is real binary image data, and that every
 * image referenced from src/ actually exists.
 *
 * This exists because of a specific failure: images were once committed as
 * base64 *text* inside .png files. Git and the build accepted them happily and
 * the breakage only showed up as blank images in the browser. This catches it
 * before a deploy does.
 *
 *   npm run check:images
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'assets', 'images');
const SRC_DIR = path.join(ROOT, 'src');
const IMG_RE = /\.(png|jpe?g|gif|webp|avif|ico)$/i;

// Leading bytes that identify each format we accept.
const MAGIC = [
  { name: 'PNG', bytes: [0x89, 0x50, 0x4e, 0x47] },
  { name: 'JPEG', bytes: [0xff, 0xd8, 0xff] },
  { name: 'GIF', bytes: [0x47, 0x49, 0x46, 0x38] },
  { name: 'WEBP', bytes: [0x52, 0x49, 0x46, 0x46] },
  { name: 'ICO', bytes: [0x00, 0x00, 0x01, 0x00] },
];

function detect(file) {
  const fd = fs.openSync(file, 'r');
  const head = Buffer.alloc(12);
  let read = 0;
  try { read = fs.readSync(fd, head, 0, 12, 0); } finally { fs.closeSync(fd); }
  if (read === 0) return null;
  return MAGIC.find(m => m.bytes.every((b, i) => head[i] === b))?.name ?? null;
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    e.isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
}

const problems = [];

// 1. Every image file on disk must be real binary image data.
for (const file of walk(IMG_DIR).filter(f => IMG_RE.test(f))) {
  const rel = path.relative(ROOT, file);
  const size = fs.statSync(file).size;
  if (size === 0) { problems.push(`${rel} is empty (0 bytes)`); continue; }
  if (!detect(file)) {
    const head = fs.readFileSync(file).subarray(0, 64).toString('latin1');
    const looksBase64 = /^[A-Za-z0-9+/=\s]+$/.test(head);
    problems.push(`${rel} is not binary image data${looksBase64 ? ' — it looks like base64 text. Decode it before committing (see docs/IMAGES.md).' : '.'}`);
  }
}

// References that are allowed to be absent because the UI has a real fallback.
// Team portraits are optional: TeamGrid renders the member's initials when the
// file is missing, so a portrait can be dropped in later with no code change.
const OPTIONAL = [/^\/assets\/images\/team-[a-z-]+\.png$/];

// 2. Every image referenced from src/ must exist in public/.
const referenced = new Map();
for (const file of walk(SRC_DIR).filter(f => /\.(jsx?|tsx?|css)$/.test(f))) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/\/assets\/images\/[A-Za-z0-9 _.%-]+?\.(?:png|jpe?g|gif|webp|avif|svg)/g)) {
    if (!referenced.has(m[0])) referenced.set(m[0], path.relative(ROOT, file));
  }
}
const pending = [];
for (const [ref, from] of referenced) {
  if (fs.existsSync(path.join(ROOT, 'public', decodeURIComponent(ref)))) continue;
  if (OPTIONAL.some(re => re.test(ref))) pending.push(ref);
  else problems.push(`${ref} is referenced by ${from} but no such file exists in public/`);
}

const total = walk(IMG_DIR).filter(f => IMG_RE.test(f)).length;
if (problems.length) {
  console.error(`\nimage check FAILED — ${problems.length} problem(s):\n`);
  problems.forEach(p => console.error(`  • ${p}`));
  console.error(`\nChecked ${total} file(s) and ${referenced.size} reference(s).\n`);
  process.exit(1);
}
console.log(`image check passed — ${total} image file(s) valid, ${referenced.size - pending.length}/${referenced.size} reference(s) resolved.`);
if (pending.length) {
  console.log(`\n${pending.length} optional image(s) not yet supplied (a styled fallback renders instead):`);
  pending.forEach(p => console.log(`  · ${p}`));
}
