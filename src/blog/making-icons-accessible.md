---
layout: "layouts/blog.njk"
title: "Making Icons Accessible"
date: "2018-05-16 17:42:34"
description: "I've been using the excellent Font Awesome for a few years and it's become part of almost every new design that I do"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Making Icons Accessible"
wpid: "773"
---

I've been using the excellent Font Awesome for a few years and it's become part of almost every new design that I do. For a long time I've just slapped my icon down on the page, styled it and added a click event where needed. Job done.

Having spent some time looking a bit more deeply into accessibility, I can now see that this is not a great approach. There's more to consider. If you can't see it what is it actually doing?

Here's how I approach using icons now. It may not be the perfect solution but it's certainly a lot closer than most use cases I see. The way I use HTML depends on the use case.

If the icon is purely decorative - there in addition to text, e.g. a floppy disk icon next to the word "Save" on a button, then I think we can reasonably just forget about it and hide it for non screen users. A simple aria-hidden="true" attribute should do.

<code>&lt;button&gt;&lt;i class="fa fa-save" aria-hidden="true"&gt;&lt;/i&gt; Save&lt;/button&gt;</code>

If it is there as an indicator, in place of a label, like where a hotel might have icons for TV, bath, etc. then we can use an &lt;span&gt; to wrap it. Inside the span we add our icon and another span with a text alternative. We show the icon and hide the inner span for screens, show the text only for other media.

Finally, if the icon is interactive and acts like a link or button, let's make it a link or button. Like the previous example, use the &lt;button&gt; or &lt;a&gt; tag to wrap the icon and a span text alternative and show/hide for the appropriate media. This has the added bonus of making it possible to tab to the icon and so use just the keyboard to navigate the page. It also handles the icon's active state and visited in the case of a link.

Alternatively, if you didn't want to add a span with text inside your button or link, you could use the aria-label attribute to provide a text alternative.

One little tip. If you use an icon inside a link or button, do not leave whitespace between the outer wrapper element and the inner icon as you may get unwanted effects in the styling, such as underlined spaces either side of your icon. Keep it tight.
