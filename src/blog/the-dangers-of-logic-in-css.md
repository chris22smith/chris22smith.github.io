---
layout: "layouts/blog.njk"
title: "The Dangers of Logic in CSS"
date: 2020-03-26 18:00:00
description: "We can do a lot of logic in CSS. I'm thinking specifically of scenarios which take the form 'if this, then that'"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "The Dangers of Logic in CSS"
wpid: "929"
---

<p>We can do a lot of logic in CSS. I'm thinking specifically of scenarios which take the form "if this, then that".</p>

<p>There are media queries which will let us control the appearance of elements based on a variety of factors. Probably the most common is screen width, so we get things like "if the width is 1024px or higher, then show an extra element".</p>

<p>There are pseudo selectors like :empty, :checked, :valid, :disabled which let us control appearance based on state, giving us, for example, "if the parent element has no children (:empty), then change its opacity".</p>

<p>We can also do logic based on combinations of elements or selectors, like li + li, for example, "if the list item follows another list item, then give it a top border."</p>

<p>I'm sure there are plenty more ways of applying logic but you get the idea. Each of these is equivalent to writing a conditional statement in a programming language - if this, then that.</p>

<p>The big question is, should we be doing this in CSS, and is there a point at which it becomes too difficult to manage in CSS and we need to defer to another technology, like JavaScript?</p>

<h3>My Experience</h3>

<p>I started thinking about this when I was designing a UI with a lot of logic going on. We had a busy table where we show some additional columns at wider screen resolutions. At smaller widths the user would be able to toggle between different groups of columns and save a preference. But then these additional columns are only offered if they contain data. So, we had logic around the screen width, user preference and presence of data, which, multiplied out, meant 8 permutations.</p>

<p>I initially tried to do it all with CSS. I set up media queries for the narrower and wider screen widths. Within each of these I then read a class for the user preference and then I used :empty to see if table cells contained any data. I managed it and it worked. Just.</p>

<p>However, I realised that it was really not scalable. Every time I added a new condition it doubled the amount of CSS I was having to write. If we wanted to add more logic in future it would create more and more work and be harder and harder to maintain.</p>

<p>By moving all the logic into JavaScript we can set simpler classes, one for each type of display we need rather than every permutation of logic. So now we just have 3 classes: 1) show the first set of columns, 2) show the second set or 3) show all columns.</p>

<p>We still have lots of branches in our JavaScript but the big difference is that it's easy to read and follow. It's also easy to edit or extend if we ever need to.</p>

<p>I think doing some logic with CSS is fine but as soon as you're starting to layer it on and find yourself multiplying out the selectors you're writing it's probably time to move it over to JavaScript.</p>
