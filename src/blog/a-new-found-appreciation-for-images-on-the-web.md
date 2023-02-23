---
layout: "layouts/blog.njk"
title: "A New Found Appreciation for Images on the Web"
date: "2018-05-09 17:17:46"
description: "I've been putting images in web pages for years"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "A New Found Appreciation for Images on the Web"
wpid: "760"
---

I've been putting images in web pages for years. Nearly 2 decades now. For most of that time it has been quite easy. Add your source and the dimensions and BOOM, there you go. There was always some work around optimising images outside of your page but once in there, easy.

Then, with higher pixel densities it started getting a bit harder and we had to work it out with media queries and srcset. Now SVG is widely supported, all this fussing around with different versions for different resolutions has gone away, at least for simple graphics.

I've recently been doing some design work on an Android app and it's a very different way of doing things with images. For example, I've created a splash screen for while the app is loading. It's a full page, wide logo in the centre, coloured background.

On the web, I'd just set the background colour and then centre the SVG logo, probably with flexbox, and use a flex-basis of 80% or some margin to give it a flexible width.

On Android, I've had to provide the splash screen image as a series of PNG files. 5 different resolutions, varying from 480x320 up to 1920x1280, and then in both orientations, 10 files in all. The clever part is that at the point of installing the app the Android device will only get the files appropriate for its size and pixel density but it means a lot of messing around with assets.

It's been a similar story for icons too. Multiple resolutions. You want a different colour? That's a separate PNG.

I'm making it sound worse than it actually is. Luckily there are great tools that let you import a single image and export all the variations you could need.

But it does make you think about the differences between platforms. To me, the web browser, with it's ability to resize on the fly, use SVG, recolour, apply filters, transform and animate in CSS makes Android image support feel very primitive.
