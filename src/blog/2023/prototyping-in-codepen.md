---
layout: "layouts/blog.njk"
title: "Prototyping in CodePen"
date: 2023-06-09 16:55:00
description: "CodePen is not only great for making demos or experimenting but can also be used for prototyping"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Prototyping in CodePen"
---

[CodePen](https://codepen.io) is not only great for making demos or experimenting but can also be used for prototyping.

Personally, I've never been a big fan of prototyping tools like Figma. I prefer to dive straight into code and play around with HTML and CSS. For me and my knowledge it's faster.

Let's assume you have an existing app and want to add a new page. You want to be able to show something that looks like the finished page and is written in HTML, CSS and JavaScript. I'll explain how I'd create a prototype like this in CodePen.

It's worth a quick caveat that there is some initial setup to this so you'll only really reap the rewards if you're doing a few pens. You may also need a [CodePen Pro](https://codepen.io/features/pro) account to be able to use all the features mentioned.

## Templating

The first phase is to recreate the app as a CodePen template. Create a new pen and give it a suitable template title. Now we need to add all our basic app shell content, HTML and CSS.

Load up your app in a browser window, open DevTools on the Inspect or Elements tab and copy the DOM nodes inside the . Paste this into the HTML tab of your pen. The ensures that we get the final rendered content and don't need to worry about any server binding or scripts.

You'll probably have references to external script files in your HTML. You can remove these or comment them out. We're not aiming to bring across all front end functionality but if you wanted to you could copy the script content into the pen's JS area, being careful to keep them in the right order.

Now the CSS. Open the Network tab in DevTools and filter to CSS content. This shows all the CSS used. Anything in tags or inline will already be in your HTML so We're looking to copy in external CSS. We can either download the CSS files and upload them as assets (Pro feature) or copy the files' content into the pen's CSS area, again in order.

Hopefully you will now see a pen that looks like your app UI. Now identify any content in your HTML that is page specific rather than template and replace this with opening and closing comments so it's clear where to insert new content for prototypes.

You'll need to do something similar with your CSS. Remove any specific styling that you won't need and add comments to make it clear what will be template styling and what will be new prototype specific content.

Nearly there. Save this pen as a template, if you have this feature available. If not, you can fork it instead.

Create a new pen from this template or fork it and add your new content. You now have a prototype in HTML, CSS and JavaScript.

## Why this?

The advantage of this approach, as opposed to a UX tool, is that you can design and test for responsiveness, run Lighthouse audits in Debug mode, try different media settings like dark mode or reduced motion, all within the same prototype. It's also great for sharing with others and letting them play around.
