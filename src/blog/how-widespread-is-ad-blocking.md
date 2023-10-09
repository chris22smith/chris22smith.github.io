---
layout: "layouts/blog.njk"
title: "How Widespread is Ad Blocking?"
date: 2023-10-09 17:10:00
description: "Have you ever tried to read a blog post or article and found it really hard work because of all the ads?"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "How Widespread is Ad Blocking?"
---

Have you ever tried to read a blog post or article and found it really hard work because of all the ads? Banner ads appearing between paragraphs, videos hugging the bottom of the screen, the odd modal appearing. It's too much.

After not using them for over a decade, I've now gone back to installing an ad blocker browser extension. And it mostly makes my experience of browsing the internet better. I can focus on the content I want without all the noise.

Now, whether or not we should use ad blockers, and deny sites this revenue stream, possibly their only revenue stream, is a whole debate in itself. I won't get into all that here. I'm more interested in some other side effects I've discovered from starting to use one again.

## Different Services

As well as ad blocking browser extensions there are also VPN services that offer to block ads, internet or broadband providers who offer this as an extra, mobile network providers. When you start adding all of those up it could be quite a proportion of users.

## Tracking and Analytics

From using my browser's console and network tabs I noticed that some content on my own sites is now being blocked. Tracking software, like Google Analytics, gets blocked. So, in theory, when I visit a page now, the owner will not know. This got me thinking. How many people are using ad blockers and how does this affect the numbers we see in tools like Google Analytics?

## Numbers

After some research, reading a few posts from the last couple of years, I got some percentages. The numbers being from different sources varied but they all seemed to agree on certain factors. The likelihood of using ad blocking varies by geography, age and device type. Younger people block more, mobile devices block more and the UK and US don't block as much as other nations. Maybe that's a capitalist, pro advertising thing? Who knows? Of all the big numbers quoted, the percentage estimated to be blocked ranged from about 30 to 40 percent. Not that much variation. It seems that most sources agree it's broadly in that range.

So, if we take a conservative estimate from this and work on the assumption it's roughly a third of users, what does that mean for our analytics data? Well it means that we might only be seeing two thirds of our actual traffic. So, maybe we should be estimating actual traffic at 1.5 times what is recorded.

If our site serves ads, maybe the numbers recorded in analytics tracking are an accurate reflection of how many visitors will see our ads.

## Handling Blockers

If we know that a high proportion of visitors are blocking our ads, how does our page handle this content being blocked? Do we test this scenario, viewing the page with an ad blocker on? Can we serve alternate content (probably not more ads) if this fails to load? Maybe a message asking users for their support and requesting that they disable the ad blocker for this site?

Or we could even play hard ball and make loading content conditional on ads loading. I probably wouldn't recommend this route as you're putting your whole site at the mercy of another service's availability.
