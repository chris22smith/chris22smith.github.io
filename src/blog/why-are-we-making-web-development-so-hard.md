---
layout: "layouts/blog.njk"
title: "Why Are We Making Web Development So Hard?"
date: "2018-10-24 17:47:09"
description: "I don't think I'm the first person to think this by any stretch"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Why Are We Making Web Development So Hard?"
wpid: "830"
---
I don't think I'm the first person to think this by any stretch. There are lots of infographics around showing the difference between web tooling now and 10 years ago and it's clearly ballooned at an extraordinary rate.

In the last year or so I've started working with Angular (as opposed to Angular.js a.k.a. Angular 1) and have also dabbled in Vue and React. All of these frameworks seem to share the same basic ideas - build everything as a component and push and pull them from the <abbr title="Document Object Model">DOM</abbr> as needed. Each component is made up of a HTML template, embedded CSS styles and a JavaScript controller.

This feels like an efficient way of working, very <abbr title="Don't Repeat Yourself">DRY</abbr>. But is it? You create a component, let's say a time picker. One it's developed you can put it into multiple views or uses relatively quickly. However, if you later modify it to work slightly differently, using adding complexity, you have to test it in each use case and make sure it still works with no detrimental effects.

All <abbr title="User Interface">UI</abbr>s are basically built up of HTML, CSS and JavaScript. Traditionally HTML is for content, CSS for styling and JavaScript for reacting to user behaviour. With components we're adding a whole load of JavaScript just to make the basic elements appear before we even get into any behavioural usage. This adds to page weight (size of files being transferred to the browser) and render times. There's the library itself, often split into many smaller modules, plus a controller for the UI to assemble it and then the components. It could just be one HTML file, one CSS file and one JavaScript file.

Increasingly, what the developer writes in their editor is becoming further and further from what actually appears in the <abbr title="Document Object Model">DOM</abbr>. The frameworks insert a whole host of IDs and classes to elements, bloating the HTML and making it harder to read. Styles are inserted as inline &lt;style&gt; blocks rather than being cached in an external stylesheet. Opening the browser's Dev Tools to track down and fix a problem is becoming harder, not easier.

Also, the more tools you use, the more you've got to maintain, keep up to date, upgrade and replace. It's creating work just to keep up and inviting technical debt.

I think that what we're gaining in terms of being able to develop new UI more quickly is all rooted in developer efficiency and production cost saving. It's not thinking about the user. We're making things slower for users. The mobile experience on most sites is still awful and the overhead of these frameworks is partly to blame.

The latest frameworks also rely on good browsers with all the JavaScript features. They do not use progressive enhancement but just grind to a halt on an older browser. This goes against the universal nature of the web - it should be easy to read and easy to write. The bells and whistles on the top is just that and should be optional, not prevent the basics from working.

I think we need to get back to making things simple. Write HTML, CSS and as little JavaScript as we can get away with. Go static wherever possible. Make it fast and simple for users. User experience should trump developer experience.