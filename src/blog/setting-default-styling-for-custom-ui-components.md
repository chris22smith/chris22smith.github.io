---
layout: "layouts/blog.njk"
title: "Setting Default Styling for Custom UI Components"
date: "2016-01-10 21:57:27"
description: "I thought I'd share a challenge I'm facing at the moment"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Setting Default Styling for Custom UI Components"
wpid: "106"
---
I thought I'd share a challenge I'm facing at the moment. A lot of modern JavaScript frameworks like React and Angular encourage building reusable UI components. Using JavaScript and HTML templates seems like an excellent approach to development on larger sites but styling these components can bring a few issues.

Browsers can handle styling standard HTML web components, like &lt;select&gt; or &lt;button&gt;. They may vary in how they display these but they all have a default way which can then be overwritten with CSS. This is stored as a kind of internal CSS class in the browser and is easy to overwrite as it has almost zero specificity. Adding an element selector 'select', a class '.picker' or an id '#picker' will easily take control over the styling.

The problem arises when we create custom components that don't have any default, zero specificity styling. Any styling that we do add when we design components has specificity so we immediately have a fight on our hands for which styling declaration gets control. We need some level of default styling, usually for layout as much as anything, to ensure that the browser cannot just show a mess of HTML elements.

Here are a few examples of how default component styling could be set and the problems associated with each approach.
<ol>
	<li>
<h3>Setting the CSS in an external stylesheet</h3>
We set the styling in its own CSS file. I'd say that this is the approach used by most UI tools like Bootstrap or jQuery UI. Various HTML elements in the component are given classes, which can be overwritten.

The problem is that they can only be overwritten by using higher specificity or by making sure that the overwriting style comes after the external CSS in the document's source order. It also means an additional HTTP request to load a usually small amount of styling data.</li>
	<li>
<h3>Setting the style in a style attribute</h3>
We could add style attributes directly into the HTML tags. The problem here is obvious - super high specificity. This makes the styling very difficult to overwrite. You're pretty much forced into using '!important' declarations in your CSS, which not only feels wrong but really leaves you with nowhere to go.

It goes against the separation of concerns - content and styling but as this is intended to be default styling, which we would hope to overwrite, I'm not sure this matters.</li>
	<li>
<h3>Setting the style in a HTML &lt;style&gt; tag</h3>
We could place a block of HTML with &lt;style&gt; tags directly before or after the component HTML so that it effectively ships together. Placing &lt;style&gt; tags in the &lt;body&gt; was invalid in HTML4 but, if I've understood it correctly, can be used in HTML5 by using the scoped attribute, e.g. &lt;style type="text/css" scoped&gt;&lt;/style&gt;. Browser support for this to be properly valid is not great at the time of writing (early 2016) - we get warning messages in consoles or code editors - but it seems to display as intended.

The problem with this approach is that the style is declared in the &lt;body&gt; whereas the overwriting CSS is probably declared in the &lt;head&gt; and so will not overwrite it without upping the specificity.

<a href="http://www.w3.org/TR/REC-html40/present/styles.html" target="_blank">W3C Recommendation - Stylesheets
</a><a href="http://www.w3.org/TR/html-markup/style.html#style.attrs.scoped" target="_blank">W3C Recommendation - Style Scoped</a></li>
	<li>
<h3>Setting the style with JavaScript</h3>
The final option is to set styling using JavaScript, which effectively just inserts style attributes into the component's HTML elements like in approach 2.</li>
</ol>
I'm wondering if there may be a solution where we have a default styles object which defines style properties in our existing component JavaScript file. We then check to see what styling is applied using the browser's getComputedStyle() function. For each of the properties we check if a rule is already set, presumably by CSS that is in the &lt;head&gt;, and if not we apply the style from the object. It's almost like required validation for styling. I don't imagine it's going to be very efficient but it may be a way of ensuring a minimum level of styling. Assuming that our script file is at the end of the &lt;body&gt;, by using only the existing resources we could save an additional HTTP request.urces we could save an additional HTTP request.