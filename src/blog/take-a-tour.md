---
layout: "layouts/blog.njk"
title: "Take a Tour"
date: 2017-05-24 18:00:48
description: "When working with web apps or more complex sites where the user has to work through a process a product tour can be a very useful addition"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Take a Tour"
wpid: "637"
---

When working with web apps or more complex sites where the user has to work through a process a product tour can be a very useful addition. In case it's not clear from the name (I'm not sure I'd have known) a product tour is basically a series of tooltips which appear and guide the user through using the page/app in steps.

Having the help or guidance right there in the page is much neater than providing a separate help page or subsite. It's not always easy flicking back and forth between the screen your working on and the documentation.

The other great benefit is that you don't have to just show the tooltips as hints. You can actually tell the user what to do and the tour advances as they do it. So, they're actually using your site and you're helping them through it.

If implemented well this could mean the end of lengthy, hard to maintain documentation, training materials, videos, etc.

There are a few libraries out there for this but, of the ones I've looked at, the best for my needs was <a href="https://linkedin.github.io/hopscotch/" target="_blank" rel="noopener noreferrer">Hopscotch</a> by LinkedIn. It's vanilla JavaScript, very simple to implement and has some nice added features like support for other languages.

You define a tour object with an array of steps. Each step then has an element selector, the bubble content and the position where you want it to appear - top, bottom, left, right. That's it.

You can also do some pretty clever stuff where your tour goes across multiple pages. This just needs you to pass the tour ID and step index so it knows where to pick up from.

The Hopscotch demo page explains it all very nicely:
<a href="https://linkedin.github.io/hopscotch/" target="_blank" rel="noopener noreferrer">https://linkedin.github.io/hopscotch/</a>
