---
layout: "layouts/blog.njk"
title: "Google Analytics - Why You Should Replace IDs in URLs"
date: "2018-08-01 16:53:19"
description: "Google Analytics is brilliant at tracking things like Page Views for a website"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Google Analytics - Why You Should Replace IDs in URLs"
wpid: "805"
---

Google Analytics is brilliant at tracking things like Page Views for a website. It logs the URL and then keeps a count of how may times that URL is requested. Great, right? Not always.

There's a problem. Dynamic sites that use IDs in their URLs generate a lot of different URLs. A typical example might be a site being made up of list and details screens, so the URL for a list screen might end in <code>/List/</code>. For a details page there's probably one template with the data changing dynamically and the ID for that item is probably in the URL, something like <code>/Details/123</code> or <code>/Details?id=123</code>.

This means that Google Analytics sees every visit to a different item's details as a different screen. This is ideal for some data analysis, like seeing which item is viewed most but not so great when you want to look at something like the performance of that template. Having hundreds of different URLs makes it impossible to analyse the template as a single screen.

Good news. It's quite easy to set up another view to show the aggregated data using filters.

<ol>
 	<li>Go to the Admin area and create a new view.</li>
 	<li>Find Filters and add a new filter.</li>
 	<li>Add a Filter Name.</li>
 	<li>Select a Filter Type of Custom.</li>
 	<li>Use the Search and Replace option.</li>
 	<li>Select a Filter Field of Request URI.</li>
 	<li>The Search String needs to match the ID. You can use regex to match any patterns so if you know your ID is 3-5 digits long you can use <code>[0-9]{3,5}</code>. If it varies you could use a wildcard, like <code>id=*</code>.</li>
 	<li>Add a Replace String. I use something to represent what's being replaced, like ID. This gives me a URL like <code>/Details/ID</code> or <code>/Details?id=ID</code>. If you've used a wildcard in the Search String with part of the URL you can replace this too, like <code>id=ID</code>.</li>
</ol>
Here's an example of replacing a GUID in the URL:

<img class="aligncenter wp-image-806" title="Google Analytics Filtering screenshot" src="/img/2018/08/replace-guid-filter.png" alt="Google Analytics Filtering screenshot" width="320" height="456" />The full regex needed is:

<p style="text-align: center;"><code>[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}</code></p>
An added bonus. When you look at your reports in Google Analytics you'll no longer see URLs like <code>/Details/aace7226-0576-4a0f-9b39-bb549a53ee11</code> but just <code>/Details/GUID</code>. Much easier to understand, especially if your URL contains several IDs or GUIDs.

Hope this helps you analyse your screens, templates or UIs rather than just the data requested.
