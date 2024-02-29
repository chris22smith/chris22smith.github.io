---
layout: "layouts/blog.njk"
title: "Measuring Front End Performance"
date: 2017-05-03 18:00:53
description: "My last post was about Front End Performance Enhancements and how I've managed to improve page load times on a site"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Measuring Front End Performance"
wpid: "610"
---

My last post was about <a href="/front-end-performance-enhancements" target="_blank" rel="noopener noreferrer">Front End Performance Enhancements</a> and how I've managed to improve page load times on a site. I've recently done some work in this area and, whilst I'm satisfied that my changes have improved performance, I can't really be sure to what extent.

With any kind of improvement work it's always nice to have a before and after and be able to show the difference. If this can be hard numbers, like in sales, then even better. With web performance can we ever really rely on any numbers?

I've been using Google Analytics Page Timing reports, specifically the Page Speed Suggestions report, which gives the most popular pages (sorted by page views) and the load time in seconds. I've tried comparing a week before my changes with a week after them. The page load times are different and generally better but it's hard to know if I'm really comparing like with like.

There are so many random factors. The number of page views is different for the two different periods. We don't know who the users are, and therefore how much data they're loading. We don't know their locations or devices or their network connection speed. We can find most of this out but then we'd have to find a way of putting it back together in a fair and meaningful way whilst probably still having some unknowns.

The other issue is that the page load times in Google Analytics are (mean) averages. This means that one extremely slow load can make the average rocket upwards. Conversely, one user hammering the refresh button and getting lots of page views from the cache will make it drop.

I think that there are 2 ways we can help to measure performance more accurately.

The first is just to look at page load times in these reports but wait until we have a larger sample size. As the sample size grows the anomalies are more likely to be diluted and have less of a sway on the overall result. If possible, try to isolate the extreme results, like the fastest and slowest 5%, and remove these from the averages.

The second is to use automated load testing so that we're using very similar conditions for each test. Even in this case we'd have to load the page a few thousand times to get a meaningful average result.
