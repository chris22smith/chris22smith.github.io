---
layout: "layouts/blog.njk"
title: "International box-sizing Awareness Day"
date: "2017-02-01 08:00:41"
description: "Today, 1st Feb, is International box-sizing Awareness Day, apparently"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "International box-sizing Awareness Day"
wpid: "498"
---

Today, 1st Feb, is International box-sizing Awareness Day, apparently. Add it to your calendar now! :) I'm not sure how official that is, or who decided it but it's good to have an annual reminder on some things.

The general consensus in early 2017 seems to be that the boffins got the spec wrong on this one and border-box should have been the default, so the first line in a lot of stylesheets or pre-processor files is \* { box-sizing: border-box; }. The spec can't change as it would break legacy pages' layout so we're stuck with this fix.

That's fine, and I don't believe that using the universal selector \* causes any real performance issues. Browsers are fast enough and smart enough to take it in their stride. However, I do hit problems with this reset approach. Frameworks.

<h3>CSS Frameworks</h3>
I've recently tried moving a site which just uses custom CSS and a reset over to Bootstrap 3. Bootstrap uses box-sizing:content-box by default so you chuck in that universal selector and all hell breaks loose. I think that to work with a framework like Bootstrap you have to respect the content-box option and just apply border-box to any custom modules that need it. Basically, if you're using the framework, use the framework, don't half use it.
<h3>Table Cells</h3>
It's worth noting how table cells behave. They basically have box-sizing border-box by default so padding gets applied inwards. A border between 2 cells gets centered across the cells, so if we have 2 cells with a border of width 10px between them, 5px is effectively within each cell's width.

You can change the box-sizing property on a cell to content-box but, in short, don't. It's not clear how this should behave and is inconsistent across browsers.
