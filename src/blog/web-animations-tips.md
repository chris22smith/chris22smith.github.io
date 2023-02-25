---
layout: "layouts/blog.njk"
title: "Web Animation Tips"
date: 2016-04-25 17:54:22
description: "Here are a few techniques I use in making web animations in CodePen"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Web Animation Tips"
wpid: "199"
---

Here are a few techniques I use in making web animations in <a href="https://codepen.io/chris22smith" target="_blank">Codepen</a>.

<h3>Zooming</h3>
By zooming all I really mean is moving things nearer or further by animating them along the Z axis with transform:translateZ(). This needs to be used in conjunction with the perspective and perspective-origin rules on a parent element. I tend to put this on the html element.

I like to set the opacity at 1 when elements are close up and fade them down to a lower opacity as they're further away. This gives a very natural feeling of coming into focus or if exaggerated can give the impression of something emerging from a fog.

Example: <a href="https://codepen.io/chris22smith/pen/BKaWBd" target="_blank">Tie Fighter Waves</a>

<h3>Rotation</h3>
I quite often use rotation to make 3D objects spin on screen. It would be a shame to go to the trouble of making a 3D object with detail on all sides only to see part of it. Turning it round slowly is an easy way showing it off. Use a keyframe animation for this rotating the object around the Y axis.

@keyframes spin {
0% { transform:rotateY(0deg); }
100% { transform:rotateY(360deg); }
}

.spin { animation: spin 5s linear infinite; }

<h3>Shaking</h3>
Making an object shake is a great way of drawing attention to it or giving the ipression taht something is alive or vibrating like an engine. It's easy to make objects shake using keyframe animations.

@keyframes shake {
0% { transform:translateX(-2px); }
100% { transform:translateX(2px); }
}

.shake { animation: shake 100ms linear alternate infinite; }
