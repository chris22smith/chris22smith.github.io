---
layout: "layouts/blog.njk"
title: "Can I Track It?"
date: "2016-03-11 20:19:26"
description: "I'm not sure what proportion of websites include Google Analytics tracking scripts"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Can I Track It?"
wpid: "177"
---
I'm not sure what proportion of websites include Google Analytics tracking scripts. I'd be guessing. What I do know is that every site I've worked on in the last decade or so has made use of it.

The part I feel more confident about guessing is that only a very small minority use anything beyond the most basic out of the box usage. This was true of me until only a few months ago when I was asked if we could track something other than a simple page load.
<h3>Tracking Events</h3>
It seems like a big thing initially but is actually quite straightforward. You just use any JavaScript event, like a click or change, and send some details to identify it off to Google, all asynchronously. Then it shows up in your reporting. <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/events" target="_blank">Analytics for Web Event Tracking</a>

This almost becomes a consideration in everything you do in JavaScript. Every time a user takes any kind of action in the UI ask if it's worth tracking. It can be incredibly useful for a new site or new feature to understand exactly how things are being used in the wild. I'd say if in doubt, track it, analyse it, then once you know how it works and you're happy with the result stop tracking.