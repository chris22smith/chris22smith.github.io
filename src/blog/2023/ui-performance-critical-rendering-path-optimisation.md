---
layout: "layouts/blog.njk"
title: "UI Performance - Critical Rendering Path Optimisation"
date: 2023-04-30 16:30:00
description: "A quick guide to how a web page renders and how we can ensure it stays fast"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "UI Performance - Critical Rendering Path Optimisation"
---

A quick guide to how a web page renders and how we can ensure it stays fast. We tend to focus on load times and how quickly our requests receive responses. This focuses on what happens after that and how we keep the experience smooth for users.

## How a page renders

### HTML and CSS

HTML is parsed to create the DOM (Document Object Model, a tree structure).

CSS is parsed and all of the cascade, custom properties and calculations are done to arrive at final values. This creates the CSSOM (Cascading Stylesheet Object Model, another tree structure).

The DOM and CSSOM are combined into the Render Tree. This decides what is rendered and how it is styled, e.g. an element with display: none will not be rendered.

Next comes Layout. The browser has to calculate the exact size and position of every rendered element, and then which fit into the viewport.

Now Paint. Now that the browser knows the exact size, position and styling of every element they're created as layers of rasterised images. As HTML and CSS are needed to reach this point these are always render blocking resources.

Finally, there's a Composite step where these paint layers are brought together and this gives the rendered page.

So, in terms of work for the browser, we've got these 6 steps:

1. HTML > DOM
2. CSS calculations > CSSOM
3. Render tree (DOM + CSSOM)
4. Layout calculations
5. Paint layers
6. Composite

This process of getting to the first render is called the Critical Rendering Path.

### Fonts

Fonts are requested after the Render Tree, once the browser knows which font characters are needed. This can block rendering or, at least, the rendering of text until the font has loaded. By preloading the font in the `<head>` we can load it instantly from the cache when the time comes to use it.

### JavaScript

When the browser hits a `<script>` tag it stops the rendering process until the script has finished executing. As JavaScript can alter the DOM or CSSOM the browser pauses building, known as "render blocking".

JavaScript cannot run until the CSSOM is built so will wait for it before executing.

Adding the async property to a `<script>` tag means it will download in parallel with the document and execute as soon as it is available.

Adding the defer property to a `<script>` tag means it will download in parallel with the document but only execute once the DOM and CSSOM have been created. It executes before the DOMContentLoaded event is fired. JavaScript modules are deferred automatically.

If JavaScript alters the DOM or CSSOM then the browser has to go through some of the rendering steps again.

## Problems

Any render blocking slows things down. This can be HTML or CSS that is not needed for the initial page load or JavaScript that causes rendering to wait.

JavaScript that uses an internet connection, e.g. a fetch(), slows things down much more as the page has to wait for the response and the script execution to finish before rendering can continue.

Trying to run scripts before all CSS has loaded and created the CSSOM results in scripts having to wait. Having large or multiple stylesheets increases this delay.

If JavaScript loads CSS (common in packages) then the render has to wait for the JavaScript to finish executing, which in turn has to wait for the CSSOM to update. It's starting to queue up.

The most common issue (in my opinion) is trying to load everything up front rather than using a well thought-out strategy to load content progressively as it is needed - designing for performance.

## Critical Rendering Path (CRP) Optimisation

A Critical Rendering Path optimisation strategy enables a page to load as quickly as possible by prioritising resources and the order in which they are loaded.

## Animation

A user's perception of an element moving is based on the speed at which the screen re-renders, the frame rate, measured in frames per second (fps). If an element jerks from one position to the next the illusion is broken, so it's important we can always re-render fast enough to avoid this.

## User Interactions

When a user interacts with the UI, e.g. pressing a button or typing in a search box, then the UI needs to respond quickly so that the user does not feel a disconnect and that the UI is unresponsive. Ideally we should always acknowledge their interaction within 50ms. This does not have the be the completion of the action but we do need to confirm their interaction visually so that they don't question it, e.g. did they definitely press the button?

## Tips

- Work out what is critical for the initial page load, load just that, and defer everything else. It does not have to be interactive. Sometimes just showing the user something is enough.
- Use preloading to get critical resources higher up the priority list, e.g. `<link rel="preload" as="script" href="critical.js">`.
- Newer versions of webpack support preloading modules with "magic comments" in the import() statement, e.g. `import(_/* webpackPreload: true */_ "CriticalChunk")`.
- Good caching reduces response times and allows the various steps of rendering to start earlier.
- If you can, do any data binding needed for the initial page load server side then subsequent updates client side.
- Use the async or defer properties to execute scripts at the appropriate time.
- The HTML attribute `loading="lazy"` can be used with media (images, video, etc.) to tell the browser to only load the element when it enters the viewport.
- If you need to load data with JavaScript, e.g. a fetch(), do the initial page load so the user sees something, then get the data.
- Minimise changes to the DOM and CSSOM in scripts as it will mean the browser having to go through its steps again, a "reflow".
- Avoid anything that changes layout (showing, hiding, resizing or repositioning) in scripts as layout is one of the slowest steps.
- Changes to colours, shadows and filters happen in the Paint step so are much faster. Only the last 2 steps have to be repeated.
- Changes using transform or opacity happen in the Composite step and only affect a single paint layer so mean minimal reflow.
- Animation should always try to avoid layout changes so use transform to move things, not width, left, margin, etc.
- The CSS will-change property tells the browser that an element is liable to change its appearance and to give it its own paint layer, so it can be redrawn in isolation without redrawing everything else. This is only needed if it's not already obvious from other rules like animation or transform.
- The CSS content-visibility: auto rule tells the browser to only render the element if it is near the viewport, so in a long page it can skip later content, e.g. a footer, to render the page faster.

### Useful Links

[Critical Rendering Path | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path)

[Preload critical assets to improve loading speed (web.dev)](https://web.dev/preload-critical-assets/)

[Optimize WebFont loading and rendering](https://web.dev/optimize-webfont-loading/)
