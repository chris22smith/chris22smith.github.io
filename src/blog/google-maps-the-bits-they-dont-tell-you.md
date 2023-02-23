---
layout: "layouts/blog.njk"
title: "Google Maps - The Bits They Don't Tell You"
date: "2016-03-09 18:06:04"
description: "I've done quite a lot of work with the Google Maps JavaScript API in the last year or so"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Google Maps - The Bits They Don't Tell You"
wpid: "140"
---
I've done quite a lot of work with the Google Maps JavaScript API in the last year or so. I think I've picked up quite a bit along the way, which you won't find in the official reference guide.

When I first started working with it, one of my favourite things was the excellent documentation that came with it. Sadly, since the shift to Material Design, it's now very difficult to navigate and find anything. In fact, I've pretty much given up on it. It's a lot easier to just use Stack Overflow.

Here are some fairly basic things I found, which, depending on your project, might make life easier.

<strong>Use a map object</strong>
Using an overarching object to hold anything map related - data arrays, functions, etc. really helps when you're using dynamic data or lots of other JavaScript. It's basically just a namespace, package or module.

<strong>Push overlays into arrays</strong>
When you add any overlay, for example a marker or polygon, the normal process is to read the geo data out of an object or array and use it to add the overlays. However, if you then want to interact with those overlays you have no way of selecting them. When you create an overlay push it into an array. That way you can loop through the items or select one by its index.

<strong>Add key or id property to get an overlay easily</strong>
In addition to adding an overlay to an array you can give it its own custom property like an id or key so that you can select it without knowing its index. The Google Maps overlay objects, which can have properties like fillColor, map, position, etc. are actually just JavaScript objects so you can add your own properties. You can then use filter() to access an individual overlay from the array or you can alias it with a variable.

<strong>Use polygons appropriate for zoom range</strong>
If you define a polygon it will work at any zoom range. For your map usage it's worth considering if you need to allow the full zoom range to be used. It might be easier to limit it. Imagine a polygon for the outline of France. If you're zoomed right out, looking at the world you can get away with just a hexagon shape. If you zoom in close you need to pick out each little twist and turn in the coastline. See what you need and use simplified polygons for speed and performance where possible.

<strong>Use dynamic SVGs as icons</strong>
You can use your own image files as markers instead of the standard pin. However, these don't have to be static image files. You can create your own function which takes parameters for colours or values and uses these to return an SVG including these details. You can then set this function as the icon image.

<strong>Set bounds and extend them</strong>
When you create a map, also create a bounds object. This holds location data for the top right (NE) and bottom left (SW) of a box, which determines the portion of the map shown on screen. It manages the zoom level for you. Whenever you add a new overlay to your map you can extend these bounds so that all of your overlays will always be shown.