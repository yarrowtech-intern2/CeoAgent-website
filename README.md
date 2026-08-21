# ceoAgent Download Site

Static-exported Next.js promotional website for ceoAgent with a bundled download file.

## Render Static Site

- Build command: `npm install && npm run build`
- Publish directory: `out`

## Updating The Download

Place the real installer in `public/downloads/` and update `DOWNLOAD_FILE` in `src/app/page.tsx` if the file name changes.

## Hero Video

The hero background uses the Cloudinary video URL configured as `HERO_VIDEO` in `src/app/page.tsx`.
