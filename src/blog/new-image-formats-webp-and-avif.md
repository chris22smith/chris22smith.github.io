---
layout: "layouts/blog.njk"
title: "New Image Formats - WebP and AVIF"
date: 2021-01-27 17:30:00
description: ""
tags: ["blog", "tech"]
eleventyNavigation:
  key: "New Image Formats - WebP and AVIF"
---

Performance tools like Lighthouse now suggest using newer formats for images in place of the traditional JPG, PNG and GIF. Smaller file sizes mean faster load times for users and less storage space on servers.

### Image Compression

Lossy compression means that as the image is reduced in size info is thrown away giving big savings on file size. If we take a 400x400 image and save it as 100x100, then resizing back up leads to pixilation.

Lossless compression is the opposite, it retains the original info so we can resize back up.

## WebP

This format was created by Google when they acquired a company specialising in this technology. WebP supports an alpha channel (transparency).

### File Size Comparison

On average, Google estimates that WebP lossy compression results in files that are between 25% and 34% smaller than JPGs of the same quality.

On average, Google estimates that WebP lossless compression results in files that are roughly 26% smaller than PNGs of the same quality.

Google estimates the average reduction to be about 64% of the original size of a GIF when using lossy compression and 19% when using lossless.

| | WebP (lossless) | WebP (lossy) |
| JPG | - | 25-34% smaller |
| PNG | 26% smaller | - |
| GIF | 19% smaller | 64% smaller |

### Browser Support

Support is good, pretty much all but IE. Safari is limited to macOS 11 Big Sur and later.

[https://caniuse.com/?search=webp](https://caniuse.com/?search=webp)

We could offer users WebP with a JPG fallback using the `<picture>` element but this means hosting 2 file formats.

### Conversion

There are lots of options to convert JPG to WebP. We can do it server side with a NuGet package or client side in Node or using gulp or webpack. It can also be done via command line or an image editor. The [Squoosh app(https://squoosh.app/)] is excellent for any image conversion.

## AVIF

This format is based on the .avi video format. It supports an alpha channel (transparency).

### File Size Comparison

| | AVIF |
| JPG | 76% smaller* |
| PNG | 47% smaller* |
| WebP | 58% smaller\* |

- These figures are arrived at by manually editing images, finding acceptable quality and manually reducing palette sizes. As a bulk automated process there would be less of a saving, probably much closer to using WebP.

### Browser Support

This is pretty much just Chrome for now but coming to Firefox and Edge soon. Something to monitor.

[https://caniuse.com/?search=avif](https://caniuse.com/?search=avif)

We could offer users AVIF with WebP and JPG as fallback options using the `<picture>` element but this means hosting multiple file formats.

### Conversion

As with WebP there are tools to convert server side or client side.

Encoding a JPG to AVIF is still quite slow compared with other image format conversions, taking a few seconds, so it's preferable to do as a background task rather than asking a user to wait for a response.

## User Experience

The way the various image formats render differs. JPG appears quickly and renders in multiple passes. WebP renders from top to bottom. AVIF is all or nothing.

[https://jakearchibald.com/2020/avif-has-landed/#progressive-rendering](https://jakearchibald.com/2020/avif-has-landed/#progressive-rendering)

SVG can have smaller file size but if it is made up of a lot of elements can use a lot more CPU to render.

## Conclusion

Our largest use of images is in checks (QC) and inspections (GM) which use JPG photos. Once IE11 is out of support (17th August 2021) the WebP format will have full browser support and could offer us consistent file size reductions of around 30%. AVIF does not yet have the support but has potential to push this further in the future.

WebP is probably a good option for our online Marketing content (e.g. website) where images are selected and optimised manually.

## Articles

[https://www.smashingmagazine.com/2019/10/speed-up-your-website-webp/](https://www.smashingmagazine.com/2019/10/speed-up-your-website-webp/)

[https://www.smashingmagazine.com/2018/07/converting-images-to-webp/](https://www.smashingmagazine.com/2018/07/converting-images-to-webp/)

[https://jakearchibald.com/2020/avif-has-landed/](https://jakearchibald.com/2020/avif-has-landed/)

## Tools

[https://squoosh.app/](https://squoosh.app/)
