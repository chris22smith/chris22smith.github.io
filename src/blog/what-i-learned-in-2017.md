---
layout: "layouts/blog.njk"
title: "What I Learned in 2017"
date: "2018-01-10 17:17:09"
description: "A bit late but I still feel it's worth keeping track"
tags: ["blog","archive"]
eleventyNavigation:
  key: "What I Learned in 2017"
wpid: "726"
---
A bit late but I still feel it's worth keeping track...

2017 has been different to previous years. It wasn't so much about learning new tech and tools as just getting back to basics and doing things better.
<h3>Simplifying Things</h3>
I've learned to keep things simple and not make them more complicated than they need to be. I actively try to write less JavaScript, doing more with HTML and CSS, and trusting native form controls instead of trying to re-invent them.

A good example might be something like a list of text items where we want the currently selected item to be bold. We could use JavaScript to set the style of the selected item and add click events to change the state of each item but we don't need to. When we just look at the requirement and what is actually happening, it can be done with a radio button list. Just add radio buttons each with a unique  ID but the same name attribute. Put a label after each referring to it with the for attribute. Finally use CSS to hide the input and apply a style to :checked + label. Done. It's a radio button list in disguise. Not only is it much simpler code but it's accessible as a non screen user just sees a standard radio button list.
<h3>Components</h3>
In the world of Angular, and starting to explore the more recent versions, I've got used to using components. As a front end developer/designer it's been great to be able to build a small standalone snippet of HTML/CSS in CodePen. By having it small and isolated it makes it easy to test in browsers, linting tools, accessibility tools, etc. It's like unit testing for functions.
<h3>Sass (SCSS)</h3>
I came to Sass very late but it hasn't taken long for it to become the norm and writing standard CSS now just feels weird and like hard work.
<h3>Accessibility</h3>
In the last couple of months I've made a conscious effort to improve accessibility. I've started using <a href="https://www.deque.com/products/axe/" target="_blank" rel="noopener">aXe</a> accessibility checker and guidance from the Accessibility Project site, <a href="https://a11yproject.com/" target="_blank" rel="noopener">a11yproject.com</a>. It's a big area and an important one so more about that in another dedicated post.
<h3>Xamarin</h3>
I've dipped my toe into the waters of cross platform development with Xamarin. It allows you write code in C# and export separate versions for iOS, Android and Windows. There's still some platform specific quirks but it's about 90% reusable and the framework makes it manageable. It now supports <em>some</em> CSS too as well as it's own style rule syntax so should be easier.
<h3>Adobe Illustrator</h3>
Final one on my list is that I've now got Illustrator. I don't really know what I'm doing yet, still Googling each new thing I need but it's an amazingly powerful tool. It's been great for creating alternate versions of logos, converting PNGs to SVG and optimising existing images.
<h3>2018?</h3>
I'm not sure what 2018 holds. I think I might actually start doing some training, focusing on HTML and CSS.