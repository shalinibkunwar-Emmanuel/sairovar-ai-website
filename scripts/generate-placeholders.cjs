#!/usr/bin/env node
/**
 * Generates brand-consistent placeholder artwork for image slots that do not yet
 * have a real export from Figma.
 *
 * These are deliberate, on-brand stand-ins — not "missing image" boxes — so the
 * site reads as finished while artwork is still being produced. To replace one,
 * drop the real export in `public/assets/images/` under the same filename.
 *
 *   node scripts/generate-placeholders.cjs           # only fills in what is absent
 *   node scripts/generate-placeholders.cjs --force    # regenerate every slot
 *
 * See docs/IMAGES.md for the full workflow.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = path.join(__dirname, '..', 'public', 'assets', 'images');
const FORCE = process.argv.includes('--force');

// Brand palette — mirrors the custom properties in src/styles/global.css.
const C = {
  deep: '#04211F', primaryDark: '#0D5C56', primary: '#0F766E',
  accent: '#10B981', cta: '#F59E0B', portal: '#06B6D4',
  tint: '#F0FDFA', mint: '#CCFBF1',
};

// Deterministic PRNG so a given slot name always yields the same composition.
const seed = s => { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const rng = s => { let a = seed(s); return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };

/** Node-and-link mesh: the visual motif for a connected learning network. */
function mesh(name, w, h, count, stroke, dot, opacity, reach) {
  const r = rng(name + ':mesh');
  const pts = Array.from({ length: count }, () => ({ x: r() * w, y: r() * h, s: 2 + r() * 4 }));
  let links = '';
  const max = Math.min(w, h) * reach;
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < max) links += `<line x1="${pts[i].x.toFixed(1)}" y1="${pts[i].y.toFixed(1)}" x2="${pts[j].x.toFixed(1)}" y2="${pts[j].y.toFixed(1)}" stroke="${stroke}" stroke-width="1.25" opacity="${(opacity * (1 - d / max)).toFixed(3)}"/>`;
    }
  const dots = pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${p.s.toFixed(1)}" fill="${dot}" opacity="${(opacity + 0.25).toFixed(2)}"/>`).join('');
  return links + dots;
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Full-bleed hero background. Sits beneath a dark CSS gradient, so it stays
 * textural and text-free.
 *
 * The base gradient is deliberately vertical: PNG's row filters compress a
 * top-to-bottom ramp almost for free, and unlike a radial gradient it cannot
 * develop visible concentric banding.
 */
function hero(name, w = 1920, h = 1080) {
  const r = rng(name + ':hero');
  const cx = (0.2 + r() * 0.6) * w, cy = (0.25 + r() * 0.5) * h;
  const rings = Array.from({ length: 5 }, (_, i) =>
    `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${(Math.min(w, h) * (0.18 + i * 0.13)).toFixed(0)}" fill="none" stroke="${C.mint}" stroke-opacity="${(0.1 - i * 0.014).toFixed(3)}" stroke-width="${(2.5 - i * 0.3).toFixed(1)}"/>`).join('');
  const bandY = (0.55 + r() * 0.2) * h;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.deep}"/><stop offset="0.5" stop-color="${C.primaryDark}"/><stop offset="1" stop-color="${C.primary}"/>
    </linearGradient>
    <linearGradient id="band" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.accent}" stop-opacity="0"/><stop offset="0.5" stop-color="${C.accent}" stop-opacity="0.16"/><stop offset="1" stop-color="${C.portal}" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="96" height="96" patternUnits="userSpaceOnUse">
      <path d="M96 0H0V96" fill="none" stroke="${C.mint}" stroke-opacity="0.055" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <path d="M0 ${bandY.toFixed(0)} L${w} ${(bandY - h * 0.18).toFixed(0)} L${w} ${(bandY + h * 0.1).toFixed(0)} L0 ${(bandY + h * 0.28).toFixed(0)} Z" fill="url(#band)"/>
  ${rings}
  ${mesh(name, w, h, 30, C.mint, C.accent, 0.3, 0.28)}
  <rect width="${w}" height="${h}" fill="${C.deep}" opacity="0.12"/>
</svg>`;
}

/** Light editorial image for side-by-side content sections. Carries a discreet slot label. */
function content(name, label, w = 1200, h = 900) {
  const r = rng(name + ':content');
  const shapes = Array.from({ length: 5 }, (_, i) => {
    const fill = [C.primary, C.accent, C.cta, C.portal, C.primaryDark][i];
    const cx = (0.15 + r() * 0.7) * w, cy = (0.15 + r() * 0.7) * h, rad = (0.1 + r() * 0.18) * Math.min(w, h);
    return r() > 0.45
      ? `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${rad.toFixed(0)}" fill="${fill}" opacity="0.13"/>`
      : `<rect x="${(cx - rad).toFixed(0)}" y="${(cy - rad).toFixed(0)}" width="${(rad * 2).toFixed(0)}" height="${(rad * 2).toFixed(0)}" rx="${(rad * 0.3).toFixed(0)}" fill="${fill}" opacity="0.12" transform="rotate(${(r() * 40 - 20).toFixed(1)} ${cx.toFixed(0)} ${cy.toFixed(0)})"/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0" stop-color="${C.tint}"/><stop offset="1" stop-color="${C.mint}"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="${C.primary}" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  ${shapes}
  ${mesh(name, w, h, 22, C.primary, C.primary, 0.3, 0.3)}
  <rect x="0" y="${h - 96}" width="${w}" height="96" fill="${C.primary}" opacity="0.9"/>
  <rect x="0" y="${h - 96}" width="6" height="96" fill="${C.cta}"/>
  <text x="34" y="${h - 38}" font-family="DejaVu Sans, sans-serif" font-size="27" font-weight="700" fill="${C.tint}" letter-spacing="1.5">${esc(label.toUpperCase())}</text>
</svg>`;
}

/** Compact 4:3 card thumbnail with a large index numeral. */
function thumb(name, label, index, w = 800, h = 600) {
  const r = rng(name + ':thumb');
  const tones = [[C.primary, C.primaryDark], [C.primaryDark, C.deep], [C.primary, C.accent], [C.portal, C.primaryDark]];
  const [a, b] = tones[Math.floor(r() * tones.length)];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M50 0H0V50" fill="none" stroke="${C.mint}" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <circle cx="${(w * 0.82).toFixed(0)}" cy="${(h * 0.2).toFixed(0)}" r="${(h * 0.3).toFixed(0)}" fill="${C.accent}" opacity="0.16"/>
  ${mesh(name, w, h, 18, C.mint, C.accent, 0.28, 0.32)}
  <text x="40" y="${h - 118}" font-family="DejaVu Sans, sans-serif" font-size="150" font-weight="700" fill="${C.mint}" opacity="0.2">${esc(index)}</text>
  <rect x="40" y="${h - 92}" width="52" height="5" rx="2.5" fill="${C.cta}"/>
  <text x="40" y="${h - 48}" font-family="DejaVu Sans, sans-serif" font-size="30" font-weight="700" fill="${C.tint}" letter-spacing="1.2">${esc(label.toUpperCase())}</text>
</svg>`;
}

// Every slot referenced from src/. Team portraits are intentionally excluded:
// TeamGrid falls back to initials, which beats a synthetic portrait.
const SLOTS = [
  ...['about-hero', 'connect-hero', 'create-hero', 'eco-hero', 'founders-hero', 'home-hero',
      'home-urgent', 'involved-cta', 'involved-hero', 'learning-hero', 'mentor-hero', 'pai-hero',
      'resources-hero', 'stories-hero', 'student-hero', 'teachers-hero']
    .map(n => ({ file: `${n}.png`, svg: () => hero(n) })),

  ...[['home-mandate.png', 'Our Mandate'], ['home-core-idea.jpeg', 'Our Core Idea'],
      ['eco-collab.png', 'Ecosystem Collaboration'], ['pai-approach.png', 'PAI Excel Approach'],
      ['mentor-classroom.png', 'In the Classroom'], ['mentor-question.png', 'Ask a Mentor']]
    .map(([file, label]) => ({ file, svg: () => content(file, label) })),

  ...Array.from({ length: 6 }, (_, i) => ({ file: `init-${i + 1}.png`, svg: () => thumb(`init-${i + 1}`, 'Initiative', `0${i + 1}`) })),
  ...Array.from({ length: 4 }, (_, i) => ({ file: `story-${i + 1}.png`, svg: () => thumb(`story-${i + 1}`, 'Case Study', `0${i + 1}`) })),
  ...Array.from({ length: 3 }, (_, i) => ({ file: `project-${i + 1}.png`, svg: () => thumb(`project-${i + 1}`, 'Student Project', `0${i + 1}`) })),
];

/** A file counts as real artwork only if it starts with a PNG or JPEG magic number. */
function isRealImage(p) {
  if (!fs.existsSync(p)) return false;
  const fd = fs.openSync(p, 'r'); const b = Buffer.alloc(2);
  try { fs.readSync(fd, b, 0, 2, 0); } finally { fs.closeSync(fd); }
  return (b[0] === 0x89 && b[1] === 0x50) || (b[0] === 0xFF && b[1] === 0xD8);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  let made = 0, kept = 0;
  for (const slot of SLOTS) {
    const dest = path.join(OUT, slot.file);
    if (!FORCE && isRealImage(dest)) { kept++; continue; }
    const buf = Buffer.from(slot.svg());
    // density 72 matches librsvg's baseline, so the SVG rasterises at exactly the
    // pixel dimensions it declares. At the default 96 everything comes out 1.33x
    // larger than the sizes documented in docs/IMAGES.md.
    const img = sharp(buf, { density: 72 });
    // Full-colour PNG on purpose. Palette quantisation visibly bands these smooth
    // gradients, and dithering to hide the banding costs more bytes than it saves.
    // effort:10 is what makes full colour affordable (~120KB rather than ~275KB).
    const out = slot.file.endsWith('.jpeg') || slot.file.endsWith('.jpg')
      ? await img.jpeg({ quality: 86, progressive: true, mozjpeg: true }).toBuffer()
      : await img.png({ compressionLevel: 9, effort: 10 }).toBuffer();
    fs.writeFileSync(dest, out);
    made++;
    console.log(`  generated  ${slot.file.padEnd(24)} ${(out.length / 1024).toFixed(0)} KB`);
  }
  console.log(`\n${made} generated, ${kept} left untouched (real artwork already present).`);
})().catch(e => { console.error(e); process.exit(1); });
