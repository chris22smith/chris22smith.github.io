---
layout: "layouts/blog.njk"
title: "Performance Perception Trick: Processing Lists Faster"
date: 2019-08-03 08:00:23
description: "I've got a little trick to make the processing of lists appear to go faster than it actually does"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Performance Perception Trick: Processing Lists Faster"
wpid: "903"
---

<p>I've got a little trick to make the processing of lists appear to go faster than it actually does.</p>

<p>Let's suppose we have a list of 10 items and there's some kind of processing to be done on them, maybe sending them off to a service which returns a Boolean true/false response for each. In reality we post a single request with the data of the 10 items and we get a single response back after 3 seconds.</p>

<p>In the UI we can use animation to make it look as if each item is being sent one at a time by adding a 100 millisecond delay between each state change. This means that the user thinks the last item of the 10 is sent after 1 second but in reality it's already gone a second  ago buying us extra time.</p>

<p>When we get the response, rather than show all the results immediately, we can use a similar animation to make them appear one by one with a 100 millisecond delay again. Although this is slower than just showing them all it maintains the illusion of the items being processed one by one.</p>

<p>So, the reality, without the trickery, is like this:</p>

<table class="wp-block-table"><tbody><tr><td style="width:2em">0</td><td>Request sent,<br>perceived waiting time begins</td></tr><tr><td style="width:2em">3</td><td>Response returned,<br>UI updated,<br>perceived waiting time ends</td></tr></tbody></table>

<p>This would mean a perceived waiting time of 3 seconds.</p>

<p>And with the trickery:</p>

<table class="wp-block-table"><tbody><tr><td style="width:2em">0</td><td>Request sent,<br>animation started</td></tr><tr><td style="width:2em">1</td><td>Animation ends,<br>perceived waiting time begins</td></tr><tr><td style="width:2em">3</td><td>Response returned,<br>animation started,<br>perceived waiting time ends</td></tr><tr><td style="width:2em">4</td><td>Animation ends</td></tr></tbody></table>

<p>Even though the time to getting the final bit of data on screen is actually extended to 4 seconds, the perceived waiting time is reduced to 2 seconds.</p>
