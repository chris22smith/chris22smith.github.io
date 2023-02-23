---
layout: "layouts/blog.njk"
title: "Loading More Items"
date: "2016-03-03 18:03:38"
description: "What's the best way of loading more items on screen in terms of user experience and performance - "infinite" scroll, pagination or a simple "load more" option? Here's a quick look and pros and cons of each"
tags: ["blog","archive", "tech"]
eleventyNavigation:
  key: "Loading More Items"
wpid: "119"
---

What's the best way of loading more items on screen in terms of user experience and performance - "infinite" scroll, pagination or a simple "load more" option? Here's a quick look and pros and cons of each.

<h3>Infinite Scroll</h3>
Infinite scroll is the name given to a web design pattern where scrolling to the bottom of the screen loads more records. It's most common in streams like on Facebook and Twitter.

<strong>Pros</strong>
Done well it's a nice seemless flow, moving very smoothly from one set of items to the next.

<strong>Cons</strong>
It can be hard to navigate back up the list. Having so many items on screen at once can be confusing and slow everything down. The list has to be loaded in order - it's not possible to skip to the end. It's not infinite - there is always a finite number of records - just a pet hate of mine.

<h3>Pagination</h3>
Pagination is the practice of breaking a large list down into pages and only showing a fixed number of records at a time. It typically has links at the bottom to navigate between pages and previous and next links. It often features text to help explain what is being shown, e.g. "Showing records 21-40 of 165".

<strong>Pros</strong>
It's very clear. The user is not presented with too much information at once. This keeps the DOM light and the screen fast. The user knows where he/she is in the list and can make an educated guess on jumping to other pages. If the list is in alphabetical order and has 10 pages, you can assume that something beginning with M will be roughly in the middle, page 5 or 6.

<strong>Cons</strong>
Seeing that there are lots of pages can be off-putting.

<h3>Load More</h3>
The Load More option is like Infinite Scroll but instead of automatically loading more as the user scrolls down you offer a button or link to load the next set of items. This is commonly seen at the end of image search lists.

<strong>Pros</strong>
It puts the user in control - they don't accidentally load content they don't really want using up bandwidth on mobile. It doesn't give a sense of how much data there is in the pipeline so doesn't scare the user away from loading more.

<strong>Cons</strong>
Sometimes not having a sense of the number of records can be a bad thing. As with Infinite Scroll, the list has to be loaded in order - it's not possible to skip to the end.
