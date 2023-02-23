---
layout: "layouts/blog.njk"
title: "Why It's Still Worth Learning Bootstrap"
date: "2017-05-19 18:00:29"
description: "Until fairly recently I didn't like UI frameworks"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Why It's Still Worth Learning Bootstrap"
wpid: "627"
---
Until fairly recently I didn't like UI frameworks. I always felt that they would only ever handle half of what the developer actually needed and added a lot of extra unused bulk to the load. Whilst that it still true, to a degree, I now think that there are enough reasons to use a framework which outweigh this concern.
<h3>Maintainability</h3>
Adopting a framework isn't just about the code and the styling. It's about using a well established pattern and way of doing things. The big win for me is that the documentation is all out there. I don't have to write it. So, if I come back to a page in a year's time I'll understand how I've structured the layout. This is also a massive benefit when working with other developers. Having a common standard and style makes it easier for anyone to pick up anyone else's code.
<h3>Consistency</h3>
Having an opinionated way of doing things ensures that pages within a site are consistent. It's very easy, especially in a large site, to have 3 different ways of doing columns, e.g. floats, display:table and flexbox. <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> helps guide developers towards a common preferred approach.
<h3>Accessibility</h3>
Historically I'm not sure <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> has had the best reputation for accessibility but these days it seems pretty solid. Most of the examples in the documentation show things like roles and screen reader only content (.sr-only), which I probably wouldn't have considered writing my own HTML.
<h3>Efficiency</h3>
Using a framework means I'm not spending time solving solved problems. It means other people have already invested the time in finding a good way of doing something so that I don't have to. It provides a way of handling most responsive design issues. It may not always be perfect but if you're in a hurry you've got something to work with from the off. I believe that this can really speed up development.
<h3>Understanding</h3>
Learning a framework like <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> teaches you how a framework hangs together so you can write your own. It's very useful to understand what components and utility classes might be needed, how you can combine page elements in containers and how you keep it all maintainable.
<h3>Why Bootstrap?</h3>
Personally, out of all the available UI frameworks, I'd reach for <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>. It's the biggest and the best documented (official docs and things like <a href="https://stackoverflow.com/questions/tagged/twitter-bootstrap" target="_blank" rel="noopener noreferrer">Stack Overflow</a> posts). Don't be put off by the look and feel if this is not what you're looking for. It's easy to customise in another layer to look how you want but it does all the layout heavy lifting for you. It's so widely used that if you use a <abbr title="Content Delivery Network">CDN</abbr> there's a good chance the user will already have it all cached so it'll load quickly.