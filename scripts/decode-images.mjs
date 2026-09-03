/**
 * Build-time image decoder
 * Converts base64 text files (.b64) from public/assets/images-b64/
 * into proper binary image files in public/assets/images/
 *
 * Why: GitHub MCP push_files only supports text content.
 * Base64-encoded image data pushed as .png gets stored as literal text,
 * not binary. This script bridges that gap at build time.
 *
 * Run: node scripts/decode-images.mjs
 * Or automatically via: npm run prebuild
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';

const b64Dir = 'public/assets/images-b64';
const outDir = 'public/assets/images';

if (!existsSync(b64Dir)) {
  console.log('No images-b64 directory found, skipping decode step.');
  process.exit(0);
}

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const files = readdirSync(b64Dir).filter(f => f.endsWith('.b64'));

if (files.length === 0) {
  console.log('No .b64 files found, skipping decode step.');
  process.exit(0);
}

console.log(`Decoding ${files.length} image(s)...`);

for (const file of files) {
  const b64 = readFileSync(join(b64Dir, file), 'utf-8').trim();
  const outName = file.replace('.b64', '');
  const outPath = join(outDir, outName);
  writeFileSync(outPath, Buffer.from(b64, 'base64'));
  const sizeKB = (Buffer.from(b64, 'base64').length / 1024).toFixed(1);
  console.log(`  ✓ ${file} → ${outName} (${sizeKB} KB)`);
}

console.log(`Done! Decoded ${files.length} image(s) to ${outDir}/`);
