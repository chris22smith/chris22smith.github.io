---
layout: "layouts/blog.njk"
title: "Default Styling for Custom UI Components"
date: "2016-01-09 12:43:49"
description: "I thought I'd share a challenge I'm facing at the moment"
tags: ["blog", "archive"]
eleventyNavigation:
  key: "Default Styling for Custom UI Components"
wpid: "98"
---

I thought I'd share a challenge I'm facing at the moment. A lot of modern JavaScript frameworks like React and Angular encourage building reusable UI components. Using JavaScript and HTML templates seems like an excellent approach to development on larger sites but styling these components can bring a few issues.

Browsers can handle styling standard HTML web components, like &lt;select&gt; or &lt;button&gt;. They may vary in how they display these but they all have a default way which can then be overwritten with CSS. This is stored as a kind of internal CSS class in the browser and is easy to overwrite as it has almost zero specificity. Adding an element selector 'select', a class '.picker' or an id '#picker' will easily take control over the styling.

The problem arises when we create custom components that don't have any default, zero specificity styling. Any styling that we do add when we design components has specificity so we immediately have a fight on our hands for which styling declaration gets control. Here are a few examples of how default component styling could be set and the problems associated with each approach.

<h3>Setting the CSS in an external stylesheet</h3>

We set the styling in its own CSS file. I'd say that this is the approach used by most UI tools like Bootstrap or jQuery UI. Various HTML elements in the component are given classes, which can be overwritten.

The problem is that they can only be overwritten by using higher specificity or by making sure that the overwriting style comes after the external CSS in the document's source order. It also means an additional HTTP request to load a usually small amount of styling data.
