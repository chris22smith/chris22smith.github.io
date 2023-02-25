---
layout: "layouts/blog.njk"
title: "Clicking Off Things to Close Them"
date: 2020-03-25 18:00:53
description: "There's a common design pattern these days where a bit of content is shown over the main screen"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Clicking Off Things to Close Them"
wpid: "759"
---

<p>There's a common design pattern these days where a bit of content is shown over the main screen. It might be a modal window or maybe a fly-in menu or sidebar. It's also common, especially in native apps, that we can just click or tap in the space not used by these elements to close them. So, how can we do this?</p>

<p>I think there are 2 approaches, one which is pure JavaScript and another which involves an overlay element. Let's look at both.</p>

<h3>JavaScript Document Click Event Method</h3>

<p>We can detect that a click is not on the content element using JavaScript. As all click events bubble up or propagate through the DOM tree they eventually reach the top document level. We can listen for a click on the document and then use the event target to check what was clicked. For this example let's assume our content element has a class of 'modal', like &lt;div class="modal">&lt;/div>.</p>

<pre class="wp-block-code"><code>// JavaScript

function handleClick(event) {
  if (!event.target.closest('.modal')) {
    console.log('close');
  }
}

document.addEventListener('click', handleClick);</code></pre>
<!-- /wp:code -->

<p>event.target gets the element that was clicked. This could be the modal element itself, another element inside it or another element outside of it. event.target.closest('.modal') checks if the element clicked is the modal or is an antecedent of the modal element, an element within it. If the element clicked is not (!) in the modal we can close it.</p>

<p>It's maybe worth noting that .closest() doesn't work in IE11 if you need to support this but there is a polyfill available.</p>

<h3>Using an Overlay Element</h3>

<p>The other approach, and the one I tend to use, is to use an overlay element. This means adding an element that covers the whole screen area, slipped in between the modal and the main screen content. The idea is that this overlay will appear and disappear along with the modal and will pick up any click events which are not on the modal. It's a bit like a safety net that will catch any stray clicks.</p>

<p>The CSS for the overlay would typically look something like this:</p>

<pre class="wp-block-code"><code>/* CSS */

.overlay {
  background-color:#000;
  bottom:0;
  left:0;
  opacity:.5;
  position:fixed;
  right:0;
  top:0;
  z-index:1;
}

.modal {
  /* styling */
  z-index:2;
}</code></pre>
<!-- /wp:code -->

<p>The overlay has fixed display and goes to each edge so it fills the screen.</p>

<p>The overlay has z-index set to 1 so it's over the main screen content, and the modal has it set to 2 so it's over the overlay. These can increase as needed but the modal always needs to be higher.</p>

<p>I've given the overlay a background colour and 50% (.5) opacity so that it veils the main screen content underneath giving the modal a "lightbox" effect but these are not needed and our overlay can be effectively invisible.</p>

<p>You then just add a click event to the overlay which will close the modal and hide the overlay.</p>

<p>The reason I like this approach is that by covering the main screen we prevent any interactions with it. If the user tries to click on a button under the overlay their first click will just close the modal. We don't need to worry about any other interactions - while the modal is showing it becomes the sole focus.</p>

<p>Extra tip. If you use a visible overlay it's nicer not to show and hide it immediately but fade it in and out with a transition on the opacity, taking it between 0 and .5. This feels much smoother and less jerky.</p>
