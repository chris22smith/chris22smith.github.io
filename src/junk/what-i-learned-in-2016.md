---
layout: "layouts/blog.njk"
title: "What I Learned in 2016"
date: "2017-01-04 16:40:55"
description: "I've done this quick run-through of things I've learned in the last 12 months for a few years now"
tags: ["blog","archive"]
eleventyNavigation:
  key: "What I Learned in 2016"
wpid: "343"
---
I've done this quick run-through of things I've learned in the last 12 months for a few years now. It's great to reassure myself that I'm still learning and every time it surprises me how much new stuff I've picked up in a short space of time.
<h3>HTML Email</h3>
For a while I've known that you have to use tables and inline styles rather than CSS. Actually there's a lot more to it and you can use CSS and even media queries. You just have to be prepared for when they're not supported with nice fallbacks. There's an excellent course on <a href="https://www.codeschool.com" target="_blank">CodeSchool</a> called <a href="https://www.codeschool.com/courses/unmasking-html-emails" target="_blank">Unmasking HTML Emails</a>.
<h3>SVG</h3>
I put this one in last year too but I think it's fair as I've learned more this year. It's surprising how under-used this is considering how easy it is now to make web graphics. I recommend Chris Coyier's <a href="https://abookapart.com/products/practical-svg" target="_blank">Practical SVG</a> book.
<h3>Accessibility</h3>
We all know we should do more but ironically it's a bit "out of sight, out of mind". I've started to actually do something about it. As I build new screens or components I just run them through some basic checks. There's a great Chrome extension called <a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?utm_source=chrome-app-launcher-info-dialog" target="_blank">aXe</a>, which you run in the dev tools. It lists accessibility violations for your page and even quotes the WCAG docs to show you exactly where you're causing an issue. It then provides tips on how to resolve the issue, often just adding an aria attribute, title or alt text. I've also started checking colours to ensure they have adequate contrast for users with visual impairments but it also just makes it that little bit easier for all users. <a href="http://contrastchecker.com/" target="_blank">Contrast Checker</a> is a great tool for this and let's you build up your own palettes and export to PDF.
<h3>Microformats</h3>
This is an odd one. I've stumbled across it and think it's a really neat idea but I'm not convinced anyone else is using it. Please let me know if you are. It's basically using a fixed pattern of markup (HTML and classes) to represent a common use case for greater consistency. The example I've used is marking up an address with lines for street address, town, county, postcode/ZIP, etc. the theory is that if we use a recognisable format then machines, like browsers, can pick them up and use them intelligently. So, if you add your addresses in this prescriptive format then a phone might offer the user the option of adding it to their contact list. Not sure it it'll be adopted but it takes a lot of the thinking and naming away.

Flexbox
Sass
ES2015
TypeScript
Atomic Design
Airtable
MongoDB
Node.js

Bootstrap
Dragula
Angular Material
Functional JavaScript (single purpose, all params)

Tab Triggers