---
layout: "layouts/blog.njk"
title: "Experiment: Font Size vs Colour Contrast"
date: 2018-07-13 19:13:37
description: "One of the things I've learned early on in web accessibility is the importance of colour contrast to make things easy to read on screen"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Experiment: Font Size vs Colour Contrast"
wpid: "797"
---

One of the things I've learned early on in web accessibility is the importance of colour contrast to make things easy to read on screen. High contrast is good but the size of text is also a factor. If it's larger it's easier to read even if the contrast drops.

At the same time, having very large text with high contrast is quite "full on". It can feel a bit like you're being shouted at. <em>Oppressive</em> is the word I'd use.

This got me thinking. I wonder if we can scale colour contrast with font size so that it always feels good. It's really an extension of responsive design.

So, I tried it in CodePen.

[codepen_embed height="600" theme_id="1248" slug_hash="ajvVPL" default_tab="result" user="chris22smith" editable="true" data-editable="true"]See the Pen <a href="https://codepen.io/chris22smith/pen/ajvVPL/">Font Size vs Color Contrast</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>) on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]

I've just done some very crude maths to make the RGB colour proportional to the font-size. As the font gets larger so do the RGB values, and vice versa.

I'm sure there's probably some beautiful golden formula for getting the optimum contrast at every size but I wouldn't really know how to go about finding these optimum settings. This experiment seems to prove that the general idea is sound though.

Please feel free to play around with it, take it further and let me know how you get on.
