---
layout: "layouts/blog.njk"
title: "A/A Testing"
date: "2016-11-17 18:00:22"
description: "I'm guessing most people know what A/B Testing is"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "A/A Testing"
wpid: "276"
---

I'm guessing most people know what A/B Testing is. It's publishing 2 variations and monitoring the responses. A typical example might be a web page with a sign up call to action. There would be 2 versions of the page and visitors would be directed to one or the other. After a certain number of page views the number of sign-ups would be counted for each version. Version A might have had 4% sign ups whereas version B might have had 7%. Typically, the best performing page is then either used or put up against another version for another iteration of improvements.

A/A Testing is the control. Visitors are again directed to one of two pages only this time both versions are exactly the same. Let's call them A1 and A2. Suppose A1 comes in with 5% sign-ups but A2 comes in with only 1%. What does that tell us? It basically tells us not to read too much into the A/B Testing as the differing results were probably just random chance.

With A/A Testing, as you monitor more and more users the split should get closer to 50/50. It's a good way of discovering what is a suitably large sample size for your A/B Tests.

The other problem with A/B Testing is its format. It's often set up to work like a knockout, winner stays on tournament - A vs. B, B vs. C, C vs. D, etc. This is flawed. If B beats A, then C beats B, C is the winner. But what if A would beat C? It's quite possible. For it to work all variations need to put pushed out at once so we're now doing A/B/C/D Testing and this will require a larger sample size.

Personally, I'm not convinced it's very scientific in most cases. I think it can work well if you're Amazon or Google and have the traffic to get meaningful results but most companies using A/B Testing probably fall way short and are more or less flipping a coin to make their UX decisions.

A/A Testing is a great way of debunking small scale A/B Testing as it proves that random chance plays a significant part in the outcome.
