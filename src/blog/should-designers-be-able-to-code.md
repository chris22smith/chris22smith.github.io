---
layout: "layouts/blog.njk"
title: "Should Designers Be Able to Code?"
date: "2019-08-02 18:00:05"
description: "This seems to be a bit of a hot topic on Twitter right now so here's my take"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Should Designers Be Able to Code?"
wpid: "889"
---
This seems to be a bit of a hot topic on Twitter right now so here's my take.

The definitions of designer and developer and where you draw the line between the roles is a bit of a nonsense. In reality you can't box things like this. It's about the individuals and what skills they have and what fits your team. Overlaps in skills are not a problem, gaps are. So, the handover points will naturally surface out of what works for the team. That said, I do have some more specific thoughts about what might kinds of coding might empower a designer.

I'm assuming we're talking about designers who already write HTML and CSS and what level of JavaScript they should know or learn. A designer who works in a graphics editor or prototyping environment clearly has a different skill set.

Knowing some basic DOM manipulation techniques can really help to add some life and interaction to designs - "Interaction Design".
<ol>
 	<li>Being able to select a DOM element with <code>document.querySelector()</code> is a good starting point.</li>
 	<li>Basic event handling with <code>.addEventListener('click', handler)</code> is useful as it allows you to add actions.</li>
 	<li>Handling events means learning how to write a very basic named function.</li>
 	<li>Finally being able to toggle properties like <code>hidden</code> and <code>disabled</code> or add/remove/toggle items from <code>classList</code> enables you to design for lots of different states within the same document.</li>
</ol>
I think just these few basic steps will enable a designer to achieve a lot more in their designs.

Most beginner's JavaScript courses I've seen seem to start with constructing objects but this is far less useful for UI work. Designers probably don't need to worry about objects, arrays, classes and the whole data side. Static data is generally sufficient for communicating the design and interactions.