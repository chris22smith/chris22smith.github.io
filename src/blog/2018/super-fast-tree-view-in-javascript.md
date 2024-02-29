---
layout: "layouts/blog.njk"
title: "Super Fast Tree View in JavaScript"
date: 2018-10-05 16:25:04
description: "I thought I'd share a way of writing your JavaScript that will make a tree view hierarchy render and respond very quickly"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Super Fast Tree View in JavaScript"
wpid: "818"
---

I thought I'd share a way of writing your JavaScript that will make a tree view hierarchy render and respond very quickly.

Firstly, the demo. I've got 100,000 items, quite a hefty data set, which is randomly generated in a function. You can change the number of items easily in the JS area. Click on the + or - icons to expand or collapse nodes.

[codepen_embed height="520" theme_id="dark" slug_hash="WawYKX" default_tab="result" user="chris22smith" editable="true" data-editable="true"]See the Pen <a href="https://codepen.io/chris22smith/pen/WawYKX/">Super Fast JavaScript Data Tree</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>) on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]

It's still quick, like instant, with 100,000 items. It can start to slow a little at a million but I'd say it's still acceptable given that kind of data.

<h3>One Long List</h3>
The trick is in how the data is structured. It's one big array, not hierarchical data with objects inside other objects. The reason for this is pretty simple, it's all about iterations or looping. If you have a single array you can run through the whole list of items once. If it's nested you have to get into loops inside other loops and it gets more complicated and takes longer. In fact, you'd be lucky for it to work at all without getting stack overflow errors.
<h3>JavaScript Magic</h3>
With a single array you can use the built in JavaScript Array methods, which are very fast - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener">map()</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener">filter()</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener">some()</a>. I'd definitely recommend reading up on these. All three work in IE9+ so hopefully you shouldn't have to worry too much about browser support.

I use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener">map()</a> to convert each data item into a HTML list item which I can insert into the DOM. I use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener">filter()</a> to quickly find the children items of any item by returning a subset, and I use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener">some()</a> to see if an item has children. The beauty of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank" rel="noopener">some()</a> is that once its found it child it stops iterating, saving time.

<h3>Easy on the DOM</h3>
The other part of this is keeping DOM manipulation to a minimum. Playing around with data in memory trivial for a browser but making changes to the DOM and rendering things on screen takes time. So, only the nodes that are needed right now exist in the DOM - there are not hidden items waiting on the sidelines. So, a new &lt;ul&gt; is added when you expand a node and the &lt;ul&gt; is removed when you collapse. A + icon is shown if the item has children of its own but we don't know anything about how many it has or what they contain until it's expanded.
<h3>More...</h3>
If you found this useful it might be worth looking at my older post <a href="/blog/lightning-fast-filtering-in-javascript/" target="_blank" rel="noopener">Lightning Fast Filtering in JavaScript</a>, which uses a lot of the same principles.
