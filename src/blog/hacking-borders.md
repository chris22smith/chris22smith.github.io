---
layout: "layouts/blog.njk"
title: "Hacking Borders"
date: "2017-06-21 18:00:52"
description: "Have you ever been in a situation where your borders aren't rendering as expected? Hopefully not"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Hacking Borders"
wpid: "641"
---
Have you ever been in a situation where your borders aren't rendering as expected? Hopefully not.

I've hit this issue recently using PhantomJS to turn HTML content into a PDF. It generally works pretty well but when you get into tables with collapsed borders and use rowspan and colspan things start getting a bit hairy and some of your borders just don't get rendered. Sad face.

No amount of messing with border-collapse, display or border properties seems to have any affect. So, what can we do? Time to get dirty and hack our way out of it. Surgical gloves on.

We can't change the borders so we create pseudo borders. We use CSS pseudo elements to create lines within the cells. Here's the CSS for a top-border:
<pre>.hacked-border-top {
  position:relative;
}

.hacked-border-top:before {
  background-color:currentColor; /* or whatever */
  height:1px;
  left:0;
  position:absolute;
  top:-1px;
  width:100%;
}
</pre>
The pseudo border is absolutely positioned within the cell, thickness (height) 1px, full width. The top:-1px moves it outside the box model to where the border would be.

Change the height, width and bottom, left, right and top values as need be for the different sides.

Please only use this as a last resort when all else fails.
<div style="border: solid .5em #c00; border-radius: 1em; color: #c00; display: inline-block; font-family: sans-serif; font-weight: bold; margin: 1em; padding: 1em; text-transform: uppercase;">In case of emergency break glass</div>