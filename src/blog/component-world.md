---
layout: "layouts/blog.njk"
title: "Component World"
date: "2017-09-09 18:08:39"
description: "Whatever stack of framework you use, everything in web development seems to be going modular"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Component World"
wpid: "663"
---
Whatever stack of framework you use, everything in web development seems to be going modular. We're no longer building pages of screens but components and component systems. This is changing the way I work with files. Where once I would have combined my script and styles into a single resource to reduce requests, I now actively look to break everything down into tiny pieces. For example, I have loads of Sass files. These get compiled into CSS before being concatenated and minified - turned back into the single big file. Working this way has several advantages. It's easier to work in smaller files - easy to find the line you need with minimal scrolling. It paves the way for using web components of a component system where styles of scripts can be embedded within the component, making it a true standalone piece of the document. Finally, it makes it easy to build dependency free components in a tool like CodePen. You can just write the HTML, Sass and JavaScript and save it as an isolated component with its own demo.