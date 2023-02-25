---
layout: "layouts/blog.njk"
title: "Star Wars Mini Projects in Codepen"
date: 2016-05-18 18:47:28
description: "The Star Wars universe seems to be a bit of a recurring theme for me when experimenting with 3D modelling and animation in Codepen"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Star Wars Mini Projects in Codepen"
wpid: "226"
---

The Star Wars universe seems to be a bit of a recurring theme for me when experimenting with 3D modelling and animation in Codepen. Here are some pens and a bit of explanation of how they were made. Naturally the code is available by switching the view.

<h3>CSS 3D Tie Fighter Wireframe</h3>
[codepen_embed height=500 theme_id=1 slug_hash='wMYaBL' user='chris22smith' default_tab='result' animations='run']
See the Pen &lt;a href='http://codepen.io/chris22smith/pen/wMYaBL'&gt;CSS 3D Tie Fighter Wireframe&lt;/a&gt;.
[/codepen_embed]

The Tie Fighter body is just made up of a number of circles, &lt;div&gt;s with border-radius:50% rotated using transform:rotateY(). See the pen <a href="http://codepen.io/chris22smith/pen/LGeVzz" target="_blank">CSS Sphere Wireframe</a> to see this part in isolation. The front cockpit window circles are the same but brought forward using transform:translateZ(). The axle is actually just 2 flat rectangles. One is brought slightly forwards and the other is set slightly back using transform:translateZ(). The hexagonal wings were the most difficult part. The hexagons are made up of 3 rectangles rotated through 60 degrees. The inner triangles are then formed using pseudo elements inside these triangles which are rotated 30 degrees and have one border applied and the dimensions set just right. See the pen <a href="http://codepen.io/chris22smith/pen/EPeYmL" target="_blank">CSS Hexagon with inner triangles</a> to see just this part. Finally, the whole thing, the .sphere, is rotated to show off the 3D. The blueprint style background is a combination of linear gradients and background sizing and positioning.

<h3>Tie Fighter Attack</h3>
[codepen_embed height=500 theme_id=1 slug_hash='EKKeZv' user='chris22smith' default_tab='result' animations='run']
See the Pen &lt;a href='http://codepen.io/chris22smith/pen/EKKeZv'&gt;Tie Fighter Attack&lt;/a&gt;.
[/codepen_embed]

In this project the Tie Fighters are much simpler. Each one is actually just a letter H in a sans-serif font with a small circle (border-radius) over the centre of it. I use JavaScript to set a random position within the viewport, randomly scale and rotate each one slightly so they appear less uniform. The movement is just CSS. Each one uses a keyframe animation to increase it's Z position using transform:translateZ(). So, it is generated, animated towards the viewer until the perspective means it's out of sight and then removed from the DOM. I just keep doing this at regular intervals and it gives the appearance of lots of objects moving towards the viewer, just missing. Another effect at play here is the opacity. Each Tie Fighter starts off with 0 opacity and it increases to 1 as they approach giving the appearance of them coming out of a fog becoming clearer as they approach. The final effect is the shooting. A random proportion of the fighters shoot. These are assigned a class and then use a pseudo element to draw a tall thin box below the main fighter. This is invisible but has green box-shadow. This then uses a CSS animation to add a blink effect.

<h3>3D Death Star</h3>
[codepen_embed height=500 theme_id=1 slug_hash='QNYOQQ' user='chris22smith' default_tab='result' animations='run']
See the Pen &lt;a href='http://codepen.io/chris22smith/pen/QNYOQQ'&gt;3D Death Star&lt;/a&gt;.
[/codepen_embed]

This project uses a 3D sphere made up of rotated circles which rotates. It has one static circle inside it, which is achieved by rotating it in the opposite direction. This has a linear gradient to give it a three dimensional feel. The indented weapon part is just another circle placed on the surface with the gradient running in the opposite direction. The stars are positioned randomly using JavaScript and appear in 3 layers. These are rotated against the Death Star to give the impression of movement.

You can find lots of great pens in <a href="http://codepen.io/mariemosley/">Marie Mosley</a>'s <a href="http://codepen.io/collection/nbGZVv/" target="_blank">Star Wars collection</a>.

&nbsp;
