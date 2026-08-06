# BD Pig Roast — bdpigroast.com

Static site for Taranowski's Epic Pig Roast (Black Diamond, WA).

## Edit wording

**All user-facing text lives in [`content.js`](content.js).**

1. Open `content.js`
2. Change any string under `window.SITE_COPY`
3. Commit & push — GitHub Pages will redeploy

HTML elements use `data-copy="path.to.key"` (text) or `data-copy-html="…"` (HTML).  
RSVP mailto address, subject, and body templates are also in `content.js` → `rsvp`.

## Stack

- `index.html` — structure
- `content.js` — all copy
- `styles.css` — design
- `script.js` — interactions + applies copy on load
- `CNAME` — bdpigroast.com

Hosted on GitHub Pages (`trt-bot/bdpigroast`).
