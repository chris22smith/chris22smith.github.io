---
layout: "layouts/blog.njk"
title: "Rebranding Tips - Part 4 - Typography"
date: 2024-01-08 16:33:00
description: "Typography is not just the font-family but also font weight, font size, the relative sizes and weights of different text elements and even what fallbacks are used."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Rebranding Tips - Typography"
---

I've been through a number of website or apps rebranding exercises, ranging from just a logo update to full blown name, domain and colour scheme and typographical changes. I thought I'd share some of the oddities that cropped up for me and some tips.

---

## Typography

Typography is not just the font-family but also font weight, font size, the relative sizes and weights of different text elements and even what fallbacks are used.

## Consistency first

Generally speaking most sites or apps don't use too many fonts, usually just one for headings or notable elements and one for the body text. With a site or app that isn't strictly organised it's well worth trying to align everything in the existing typography before starting. Make sure that headings are the right font, size and weight so that everything is consistent.

Theoretically, if everything is well organised then swapping out font families should be easy.

## Sizes and weights

If one set of guidelines uses more or fewer styles than another it can harder to align everything. The focus should always be on the best result using the new system rather than simply finding the closest match. Look at how the new system wants sizes and weights to be used and try to work towards this. It can be phased, matching first and refining later if there's a tight timeline. Minor differences in size and weight usually go unnoticed.

## Accessibility

It's important to make sure that your headings are used in a logical hierarchy as this can be used for screen reader navigation.

If a font has a particular character, for example, an art deco 1930s feel or a spiky horror film feel, then this should also be described to non screen users via aria attributes.

If a font is very ornate and not necessarily easy for everyone to read, for example in a title, it may be worth repeating its content in a title attribute so that it can be read on hover. This is almost treating it as if it were an image.

---

In this Rebranding Tips series:

- [Rebranding Tips - Part 1 - Logos](/blog/rebranding-tips-part-1-logos)
- [Rebranding Tips - Part 2 - Brand Names](/blog/rebranding-tips-part-2-brand-names)
- [Rebranding Tips - Part 3 - Colours](/blog/rebranding-tips-part-3-colours)
- Rebranding Tips - Part 4 - Typography
