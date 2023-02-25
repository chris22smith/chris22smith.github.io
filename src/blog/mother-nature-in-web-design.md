---
layout: "layouts/blog.njk"
title: "Mother Nature in Web Design"
date: 2016-04-23 10:16:16
description: "How can we make designs feel more like the natural world and less like something created on a machine? Here are a few ideas"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Mother Nature in Web Design"
wpid: "187"
---

How can we make designs feel more like the natural world and less like something created on a machine? Here are a few ideas...

<h3>Randomness</h3>
I've created a few pens on <a href="https://codepen.io" target="_blank">Codepen</a> recently which involve JavaScript generating random elements in the DOM. Add a new element and assign it random position, dimensions or scale.

<a href="https://codepen.io/chris22smith/pen/GoVVPY" target="_blank">Furball</a>
<a href="https://codepen.io/chris22smith/pen/BKaWBd" target="_blank">Tie Fighter Waves</a>
<a href="https://codepen.io/chris22smith/pen/WrzVxw" target="_blank">Random Circles</a>

Whilst these were just playing around, I am interested by the idea of bringing an element of randomness into designs. There's a real feeling of the natural world or at least being outside in allowing things to be created and move around of their own accord or, at least, appear to.

<h3>Position</h3>
To do this we can use JavaScript to assign elements a random position. Set position:absolute and then generate random numbers for left and top values within the confines of the viewport width and height.
<h3>Movement</h3>
In nature things don't generally move in a linear way. They accelerate, reach their desired speed and then decelerate again before stopping - its not sudden. Similarly, things don't just appear or disappear but gradually fade in or out of view or move in gradually from outside the range of vision. Things don't always stay upright. They turn and sway. They're affected by wind outside.

Keyframe animation with transforms, especially translate and rotate, can help make things move quite subtly giving a very natural feel.

<h3>Lighting</h3>
Light is not a constant in nature, except maybe in the dessert. It is affected by cloud cover and so the lightness/darkness of things will vary. Shadows don't stay fixed for long but may change direction and intensity outside.
