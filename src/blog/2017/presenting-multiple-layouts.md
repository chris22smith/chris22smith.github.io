---
layout: "layouts/blog.njk"
title: "Presenting Multiple Layouts"
date: 2017-05-05 18:00:02
description: "I'm sure everyone has seen web apps where the user is given a choice of layouts for their data"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Presenting Multiple Layouts"
wpid: "613"
---

I'm sure everyone has seen web apps where the user is given a choice of layouts for their data. Sometimes you can view items as a list or as cards and there's a mechanism of flipping between them. Gmail has options of Comfortable, Cosy or Compact.

From the developer's point of view, it seems like a nice little extra. It's fairly easy to do in CSS - just toggle a root class on the module and set your styles for each layout.

Having done this a few times now, my advice would be a pretty emphatic <strong>don't!</strong> It starts off as a simple variation but it means that every time you make a small change to the content or layout in one layout you have to do this development for each, and then test in each. In short it multiplies out the work.

Imagine offering the user a choice of 3 layouts and 3 colour themes. That's 9 scenarios for the poor tester to check every time you make even the slightest tweak.

There's nothing wrong with putting work into a UI but in this case the benefit to the end user is negligible for a lot of additional effort. It would be far better to spend the time just doing one layout really well.

I think there can be occasions where it can work, like just toggling a module font size or line-height but getting into different sets of styling rules is a big no-no for me.
