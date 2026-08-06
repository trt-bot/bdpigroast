# Taranowski's Epic Pig Roast — bdpigroast.com

Static site for the annual homestead pig roast in Black Diamond, WA.

## Live

- **GitHub Pages:** https://trt-bot.github.io/bdpigroast/
- **Custom domain (after DNS):** https://bdpigroast.com

## Custom domain (Namecheap → GitHub Pages)

In Namecheap DNS for `bdpigroast.com`:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `trt-bot.github.io` |

Then in repo **Settings → Pages → Custom domain**, set `bdpigroast.com` and enable **Enforce HTTPS** after DNS propagates.

## Notes

- Gallery images are Unsplash placeholders; swap with photos from the real [Flickr album](https://www.flickr.com/photos/heathashli/albums/72157634185358075/).
- RSVP form uses `mailto:hello@bdpigroast.com` (private event).
