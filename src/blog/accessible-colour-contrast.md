---
layout: "layouts/blog.njk"
title: "Accessible Colour Contrast"
date: "2018-01-10 19:00:40"
description: "When I started looking at accessibility and using the <a href="https://www"
tags: ["blog","archive", "tech"]
eleventyNavigation:
  key: "Accessible Colour Contrast"
wpid: "713"
---

When I started looking at accessibility and using the <a href="https://www.deque.com/products/axe/" target="_blank" rel="noopener">aXe</a> accessibility testing tool, one of the first things that it reported was insufficient colour contrast. So, I started looking into it. The page I tested had quite a few different shades of grey (not 50, before anyone else says it) so this seemed like a good place to start.

How light can grey text be against a white background, or flipped around, how dark does a grey background need to be for white text to be clear?

And the same with black. How dark can grey text go on a black background and how light does a grey background need to be for black text to be easily legible?

The results are shown in the embedded pens below. Please share if you find this useful. :)

[codepen_embed height="1050" theme_id="dark" slug_hash="POxVQg" default_tab="result" user="chris22smith"]See the Pen <a href="https://codepen.io/chris22smith/pen/POxVQg/">Accessibility - Colour Contrast with White</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>) on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]

[codepen_embed height="1050" theme_id="dark" slug_hash="XzGgpM" default_tab="result" user="chris22smith"]See the Pen <a href="https://codepen.io/chris22smith/pen/XzGgpM/">Accessibility - Colour Contrast with Black</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>) on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]

The next task is to find the acceptable contrast blacks and whites for pale greys, like #EEE or #F7F7F7, and dark greys, like #222.
