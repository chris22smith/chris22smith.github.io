---
layout: "layouts/blog.njk"
title: "Positioning popover elements (pseudo-anchoring)"
date: 2024-06-19 16:55:00
description: "The new popover attribute takes care of layers, interactivity and focus management but not positioning."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Positioning popover elements (pseudo-anchoring)"
---

I've made a number of help components over the years, typically an icon button triggering a div to appear. My approach has always been the same. Give the button `position: relative` and then position the revealed content div using `position: absolute`, effectively anchoring it off the button.

Taking it further, I'd also add a `position: fixed` overlay layer with partial opacity above the base page with `z-index: 1` and then put the content above that with `z-index: 2`. It would also need a way of closing it, so adding a click event to the overlay element and also a cross icon button and close event to the content div. This would use JavaScript to return focus to the original icon button.

There are loads of examples of this if you search "tooltip", many claiming to be CSS only solutions, but I would suspect a lot of them don't manage the focus properly for screen reader use or keyboard navigation.

## Welcome popover

The new popover attribute takes away a lot of this extra work. It takes care of the layers, interactivity and focus management. But not the positioning.

Read more about [popover](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).

The new popover element is placed in the DOM's `top-layer` on top of all other page content so it has no awareness of the original triggering button and its positioning. This has to be set with JavaScript.

The relationship between the popover and trigger elements means that the content div will be shown and hidden automatically without us having to add any event handling.

## Handling positioning

When the icon button is clicked we can fire a function to handle positioning like this:

```
// define the content div, create or reference a template
const helpContent = document.createElement("div");

const handlePopoverPositioning = (event) => {

  const scrollY = Math.round(window.scrollY);

  const helpButtonRect = event.target.getBoundingClientRect();

  helpContent.style.insetBlockStart =
    `${helpButtonRect.top + scrollY - 16}px`;

  helpContent.style.insetInlineStart =
    `${helpButtonRect.left + 32}px`;
}
```

We get the `scrollY` value to see how far the user has scrolled the page vertically as this will affect the placement of the popover. This can be a decimal in modern browsers so I've chosen to round it to keep things simpler but there's probably no need. We get the bounding client rectangle of the help button so that we've got access to its dimensions and positioning. We can then set the positioning of the help content using the `insetBlockStart` (top) and `insetInlineStart` (left) properties. The vertical positioning has to factor in the `scrollY` value. Finally numbers can be added or subtracted to offset the top left position of the content div.

## Anchoring

[CSS anchor positioning](https://developer.chrome.com/blog/anchor-positioning-api) will make this easier and take away the need for JavaScript here by defining an anchor element, the icon button, in CSS. At the time of writing this is only available in Chromium browsers, so I can't use it yet.

Hopefully the function above or something similar will help tide you over until anchoring fully arrives.
