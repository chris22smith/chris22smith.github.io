---
layout: "layouts/blog.njk"
title: "Rebranding Tips - Part 1 - Logos"
date: 2024-01-08 16:30:00
description: "At the face of it, switching out an old logo for a new one seems pretty straightforward and it kind of is, but rather than just switch can we take the opportunity to improve the implementation?"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Rebranding Tips - Logos"
---

I've been through a number of website or apps rebranding exercises, ranging from just a logo update to full blown name, domain and colour scheme and typographical changes. I thought I'd share some of the oddities that cropped up for me and some tips.

---

## Logos

At the face of it, switching out an old logo for a new one seems pretty straightforward and it kind of is, but rather than just switch can we take the opportunity to improve the implementation?

## Performance and optimisation

When we add the new logo, we probably have the opportunity to use a newer image format, SVG, WebP or AVIF. SVG's vector format will improve sharpness and the others will reduce file size. For the non vector formats I'd suggest serving an image that is 2 to 2.5 times the size displayed on screen so the pixel density is high and it looks crisp on high quality displays. So, if it shows at 200px wide by 100px high, use a 500x250 original.

## Accessibility

It's also worth ensuring that it's accessible. If it's an image tag put text in the alt attribute to describe it. If it's an SVG tag, add an accessible title.

Consider dark mode. Does the image contain dark colours that would not show up on a darker background. It may be worth serving an alternative version, maybe an all white version.

## Branding

One oddity that I've come across is moving to a set of branding guidelines that were very strict about the usage of a logo, that it must not be used below a certain size, that it must have a certain margin around it, etc. This can be tricky if it does not fit the page layout. You may be forced to redesign it slightly. Just something worth bearing in mind when planning the work.

## Come out, logos, wherever you are

You might assume that it's easy to find the logos - just a quick code search, and if the site is not too complex or too old it might be that simple. For me, working with an old complex codebase that has been worked on by a lot of people over a lot of years it was much harder.

Doing the search was a good starting point and found most of the pages or templates where logos were used but there were others hiding. Some were hiding away in base64 strings.

Some were in CSS, being used a background images, which was probably a bad idea anyway so better not to just replace that. A logo should be considered content and appear in the HTML for accessibility reasons.

Some were defined in XML or JSON files and then used as image src.

And finally, some were coming from a database so did not appear in the code but were bound as image sources at run time.

If you have any files in other formats such as PDFs it's worth checking these as they may contain hard coded images. I'd suggest trying to move away from serving files to publishing HTML wherever possible. It's better for accessibility and search engine discoverability, not to mention easier to maintain.

---

In this Rebranding Tips series:

- Rebranding Tips - Part 1 - Logos
- [Rebranding Tips - Part 2 - Brand Names](/blog/rebranding-tips-part-2-brand-names)
- [Rebranding Tips - Part 3 - Colours](/blog/rebranding-tips-part-3-colours)
- [Rebranding Tips - Part 4 - Typography](/blog/rebranding-tips-part-4-typography)
