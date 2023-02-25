---
layout: "layouts/blog.njk"
title: "Lazy HTML :("
date: 2016-04-21 19:15:08
description: "Poking through other developers' HTML pages I sometimes come across markup like this"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Lazy HTML :("
wpid: "191"
---

Poking through other developers' HTML pages I sometimes come across markup like this:

&lt;br&gt;
&lt;br&gt;
&lt;br&gt;

It's generally used to just add some space between block elements. My instinctive reaction is a mixture of horror and disbelief. I can't remove it quick enough and get some CSS to control it instead.

Thinking about it a little deeper, this tag gets misused a lot. There's a big difference between a semantic break between 2 bits of content and just shifting something down a line because it looks better at the time. The example above using several line breaks consecutively is, to my mind, just plain wrong. A break is used to separate content and its semantic meaning here is trying to separate other breaks.

To be fair to the other developers there's a good chance it's some visual editor doing a bad job rather than it being hand coded this way but the result is the same.

HTML should be about conveying the meaning of the content, not just a way of putting text on screen. Adding gaps or breaks between bits of content needs to be considered too.

<h3>Margin vs Padding</h3>
We get a similar situation with margin and padding. Some developers just use these interchangeably to put a gap between elements but this feels wrong to me. Even though this is purely styling rather than content and doesn't need to worry about semantics in the same way, it's still a matter of how you view a particular element. If it appeared in another context, would it always have this margin or padding? I think we should be designing chunks of content as independent elements, which can be dropped into a page ready to go without the need for excessive styling for their context.
