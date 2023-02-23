---
layout: "layouts/blog.njk"
title: "CARPET - A Front End Checklist"
date: "2022-07-08 08:28:07"
description: "<!-- wp:paragraph -->
<p>The 6 areas to consider spell out <strong>CARPET</strong>, hopefully making it easier to remember"
tags: ["blog","archive"]
eleventyNavigation:
  key: "CARPET - A Front End Checklist"
wpid: "981"
---
<!-- wp:paragraph -->
<p>The 6 areas to consider spell out <strong>CARPET</strong>, hopefully making it easier to remember.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 id="Is-it-Clear?"><strong>Is it Clear?</strong></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Is it obvious what to do? Imagine it’s the user’s first day. Is help text needed?</li><li>If we include help text does it use plain English (or translated equivalent)?</li><li>Does any button text accurately reflect what will happen when it is pressed?</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 id="Is-it-Accessible?"><strong>Is it Accessible?</strong></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Are we using semantic HTML elements so the role of each piece of content is clear?</li><li>Is all text easily legible – large enough with enough contrast? If you have to think about it, probably not.</li><li>Do we have text descriptions for any visual media, such as images and icons?</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 id="Is-it-Responsive?"><strong>Is it Responsive?</strong></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Is it still usable when the viewport is very large or very small?</li><li>Do items that are visually grouped become disassociated when the screen is very wide?</li><li>Could the experience be optimised for different screen sizes?</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 id="Is-it-Performant?"><strong>Is it Performant?</strong></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Are there barriers which may mean waiting times greater than 2 seconds?</li><li>Are we keeping DOM manipulations to a minimum?</li><li>Could it be made faster, possibly by doing less at once, or doing some things in the background or asynchronously?</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 id="Is-it-Efficient?"><strong>Is it Efficient?</strong></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Is there user effort that we could remove - repetition of actions, excessive clicks or scrolling?</li><li>When the page loads is the initial focus on the most useful element?</li><li>Is there an opportunity to remember user preferences or persist filters?</li></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 id="Is-it-Testable?"><strong>Is it Testable?</strong></h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Are any values that we may want to test available in the DOM?</li><li>Do elements with testable values have IDs or classes so that the specific elements can be targeted?</li><li>If we have values embedded in images, videos or canvas do we have a text equivalent which we can test?</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->