---
layout: "layouts/blog.njk"
title: "Bad Breaks."
date: "2016-03-11 08:13:43"
description: "Poking through HTML pages I sometimes come across markup like this: br br br"
tags: ["blog", "archive"]
eleventyNavigation:
  key: "Bad Breaks"
wpid: "194"
---

Poking through HTML pages I sometimes come across markup like this:

&lt;br&gt;
&lt;br&gt;
&lt;br&gt;

It's generally used to just add some space between block elements. My first instinctive reaction is a mixture of horror and revulsion. I can't remove it quick enough and get some CSS to control it instead.

Thinking about it a little deeper, this tag gets misused a lot. There's a big difference between a semantic break between 2 bits of content and just shifting something down a line because it looks better.
