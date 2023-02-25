---
layout: "layouts/blog.njk"
title: "Beautifying Native Form Elements"
date: 2016-05-27 17:20:20
description: "The various types of form inputs can look very different in different browsers"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Beautifying Native Form Elements"
wpid: "223"
---

The various types of form inputs can look very different in different browsers. When it comes to styling them there's only so much we can control. Here are all the form elements (at the time of writing) in one pen. Try viewing it in different browsers to see how they appear.

[codepen_embed height=500 theme_id=1 slug_hash='pymBWL' user='chris22smith' default_tab='result' animations='run']
See the Pen &lt;a href='http://codepen.io/chris22smith/pen/pymBWL'&gt;All Form Elements&lt;/a&gt;.
[/codepen_embed]

It bugs me that the width and height of these elements seem inconsistent, as do text sizes, shading, etc. It makes it hard to create attractive forms and have everything align nicely.

<h3>A Style Base (CSS Reset) for Form Elements</h3>
It's not too difficult to try to bring some control to the styling. Textareas, inputs which accept text and buttons are basically boxes and we can style them just like div elements. Other inputs can have special features but we can still change the basics - height, width, font-family, font-size, margin, padding, color, border, border-radius.

[codepen_embed height=500 theme_id=1 slug_hash='PNvvXd' user='chris22smith' default_tab='result' animations='run']
See the Pen &lt;a href='http://codepen.io/chris22smith/pen/PNvvXd'&gt;All Form Elements - Style Base&lt;/a&gt;.
[/codepen_embed]

This light scattering of CSS seems to bring it under control and "flexbox" is a nice way of making everything align and behave responsively.

I don't think there's any hope for keygen but, to be honest, I'd never even heard of it before starting this so I'm not going to lose any sleep.

Please fork either of these pens and try out your own form styling.
