---
layout: "layouts/blog.njk"
title: "The Welsh Language Conundrum"
date: "2017-04-07 17:21:41"
description: "Presenting content in two or more languages is pretty much a solved problem"
tags: ["blog","archive"]
eleventyNavigation:
  key: "The Welsh Language Conundrum"
wpid: "584"
---
Presenting content in two or more languages is pretty much a solved problem. The most common way to handle it is to have a language switcher and allow users to flip from a page in one language to the same page content in another language at any point.

The print world's equivalent would be putting one language on one side of a sheet of paper and the other language on the other. And then maybe putting a small note about the other language being on the reverse. Both are equal and easy to read, free from the distraction of the other language.

But what if you want both? There are cases where it's preferable to keep both languages visible. In Wales the Welsh language is spoken by roughly 1 in 5 people. It was slowly dying out but the government has invested a considerable amount of effort and money into keeping it alive. One of the ways this is done is to keep its profile as high as possible. It should be normal to see Welsh everywhere in Wales. This carries across into digital content too.

In print the answer is to display content in 2 columns, one Welsh, one English. Typically, as we read left to right, the Welsh is put first so it is at least acknowledged before non Welsh speaking readers can skip across to the English. It works.

How do we do this on the web? Not quite so easy.

Can we or should we have mixed language content in pages? Does this go against web standards or is it acceptable if done in the right way?

We could present a two column layout like in print but then how do we accommodate this on a small screen, like on mobile? Two very narrow columns will give a terrible user experience. If we were to put one above the other, the second language could be pushed a long way down.

Could we show just the page titles or headings in both languages and then reveal the content in the selected language on click/touch? Possibly. Probably not good for <abbr title="search engine optimisation">SEO</abbr> but maybe it's not possible to have everything.

I've used a technique previously where I keep the 2 separate language pages but intercept the request and show a full page, like an interstitial ad, which shows the page title and teaser text in both languages. Clicking either redirects to the content in the appropriate language. I refer to it as a "splash page" but I'm not sure if this is the right term.

Are there any other options I haven't considered? Please add a comment or <a href="https://twitter.com/chris22smith" target="_blank">contact me on twitter</a>.