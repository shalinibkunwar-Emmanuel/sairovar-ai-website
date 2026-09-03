# Images: Figma → GitHub → Netlify

## What went wrong before

Images were committed as **base64 text inside `.png` files** instead of as binary
image data. A `home-hero.png` looked like a real file in GitHub and deployed
without any error, but its contents were a long string of characters like:

```
/9j/2wBDAA4KCw0LCQ4NDA0QDw4RFiQXFhQUFiwgIRokNC43NjMuMjI6...
```

The browser asked for an image, received text, and rendered nothing. Nothing in
the build or the deploy log failed, which is why it was hard to diagnose.

Several of those base64 strings were also **truncated** mid-stream (their length
was not a multiple of 4), so even after decoding, part of the picture data was
gone for good.

The two images that did work — `team-gurpreet.png` and `Website Banner.png` —
were the ones added through GitHub's drag-and-drop **"Add file → Upload files"**,
which uploads binary correctly.

## How to add images so they work

### Option A — GitHub web upload (easiest, no tools)

1. In Figma: select the frame → **Export** → PNG (use **2x** for hero banners)
   → **Export**.
2. Rename the exported file to exactly the filename the site expects
   (see the table below). Names are case-sensitive.
3. On GitHub, open `public/assets/images/`.
4. **Add file → Upload files**, drag the exported PNGs in, then **Commit changes**.

> Use *Upload files*. Do **not** use *Create new file* and paste image contents
> into the text box — that is what produced the base64 text files.

### Option B — Git on your machine

```bash
# Copy the Figma exports into the images folder, then:
git add public/assets/images/
npm run check:images      # verifies the files are real images before you push
git commit -m "Add home page artwork from Figma"
git push origin main
```

Netlify rebuilds automatically on push to `main`.

## Verify before you push

```bash
npm run check:images
```

This fails, with the filename, if any image is base64 text, is empty, or is
referenced by the site but missing. Run it any time images look wrong.

To check a single file by hand — real PNGs start with `PNG`, real JPEGs with
`JFIF`; base64 text files start with letters and slashes:

```bash
file public/assets/images/home-hero.png
# want: PNG image data, 1920 x 1080, 8-bit/color RGB
# bad:  ASCII text, with very long lines
```

## Where each image appears

Drop a file in `public/assets/images/` under one of these names and it replaces
the current placeholder automatically — no code change needed.

### Home page (`src/pages/Home.jsx`)

| Filename | Used as | Recommended export |
| --- | --- | --- |
| `home-hero.png` | Top hero background | 1920 × 1080, PNG or JPG |
| `home-mandate.png` | "Our Mandate" section image | 1200 × 900 |
| `home-urgent.png` | "The Urgent Need" hero background | 1920 × 1080 |
| `home-core-idea.jpeg` | "Our Core Idea" section image | 1200 × 900 (note `.jpeg`) |
| `home-cta-bg.png` | Closing call-to-action background | 1920 × 1080 |

### Page hero backgrounds

`about-hero.png`, `connect-hero.png`, `create-hero.png`, `eco-hero.png`,
`involved-hero.png`, `learning-hero.png`, `mentor-hero.png`, `pai-hero.png`,
`resources-hero.png`, `stories-hero.png`, `student-hero.png`,
`teachers-hero.png`, `involved-cta.png` — all 1920 × 1080.

Hero images sit under a dark teal gradient overlay, so choose images that still
read well when darkened, and keep important detail away from the centre where
the headline sits.

### Section and card images

| Filenames | Used on | Recommended export |
| --- | --- | --- |
| `eco-collab.png` | Ecosystem | 1200 × 900 |
| `pai-approach.png` | Punjab AI Excellence | 1200 × 900 |
| `mentor-classroom.png`, `mentor-question.png` | Mentor Portal | 1200 × 900 |
| `init-1.png` … `init-6.png` | Initiatives cards | 800 × 600 |
| `story-1.png` … `story-4.png` | Stories cards | 800 × 600 |
| `project-1.png` … `project-3.png` | Student Portal cards | 800 × 600 |

### Team portraits

`team-gurpreet.png`, `team-onkar.png`, `team-sandeep.png`, `team-manpriya.png`,
`team-shalini.png`, `team-sandeep-anand.png` — square, 600 × 600, face centred
(they are cropped to a circle).

These are **optional**. When a portrait is missing, `TeamGrid` shows the member's
initials in a styled circle instead, so the page never shows a broken image.
Add the file and the photo appears on the next deploy.

## Placeholder artwork

Slots without a real export currently show generated on-brand artwork so the site
reads as finished. It is produced by:

```bash
npm run placeholders           # fill only empty slots
npm run placeholders -- --force # regenerate everything
```

This script needs `sharp`, which is not a project dependency because the
generated files are committed and the build does not need it. Install it only if
you want to regenerate: `npm install --no-save sharp`.

Placeholder art is always *replaced*, never referenced by name — dropping a real
export over the same filename is all it takes.

## Two images worth revisiting

- `home-cta-bg.png` and `initiatives-hero.png` are genuine artwork recovered from
  the damaged uploads, but only 400 px wide. They will look soft stretched across
  a full-width section — re-export both at 1920 px.
- `Website Banner.png` (2.4 MB, 1774 × 887) is not referenced anywhere. Either
  wire it up or delete it; at that size it is worth compressing first.
