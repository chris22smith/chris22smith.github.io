---
layout: "layouts/blog.njk"
title: "HTML Semantics - Header or Sidebar?"
date: 2017-03-09 19:10:24
description: "Here's a question on HTML semantics"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "HTML Semantics - Header or Sidebar?"
wpid: "561"
---

Here's a question on HTML semantics. We now have the not-so-new HTML5 semantic sectioning elements which define areas of the page and try to bring more meaning to it. This is generally seen as a step forward from using &lt;div&gt; which has no particular meaning. Does it always work?

There's quite a common design pattern where a wider screen will show the logo and navigation in a sidebar on the left and then in a narrower screen will show it at the top. I've used this myself a few times. Here's a quick illustration of what I mean:

<div style="clear: both;">

[caption id="attachment_567" align="aligncenter" width="200"]<img class="wp-image-567 size-full" style="border: solid 1px #000;" src="/img/2017/03/screen-with-sidebar.png" alt="screen with sidebar" width="200" height="150" /> Wider screen with sidebar[/caption]

[caption id="attachment_566" align="aligncenter" width="150"]<img class="wp-image-566 size-full" style="border: solid 1px #000;" src="/img/2017/03/screen-with-header.png" alt="screen with header" width="150" height="200" /> Narrower screen with header[/caption]

</div>
My own website, chrissmith.xyz, currently uses this pattern. I'm using the WordPress theme twentyfifteen with my own child theme over it. The twentyfifteen theme uses an &lt;aside&gt; element for logo and navigation. When I've built my own sites I used the &lt;header&gt; element for this. My feeling was that the content was semantically header information, and that the fact that it appeared on the side on larger screens was not really important. To me &lt;aside&gt; means that the content is supplementary or in addition to the main content whereas &lt;header&gt;, used at the top level, is almost like a fixed part of the page layout template.

Ultimately, it comes down to the content. I've used the &lt;aside&gt; on this site in a fairly static, global way, so really it is a header. The theme creators can't know how the area is going to be used - if it's global or changes with the context of each page, so I guess it makes sense to keep the door open and use &lt;aside&gt;.

<h3>Changing Content</h3>
We don't necessarily show the same content at different screen sizes. We might show contextual content in the sidebar but on a smaller screen we might choose not to use it. If we change the displayed content with media queries than how can we use semantic sectioning elements correctly? We could have an &lt;aside&gt; and a &lt;header&gt; in our markup but that's a lot of unused bloat.
<h3>Aria Roles?</h3>
Maybe we keep the one element but change the aria-role with JavaScript, e.g. &lt;aside aria-role="banner"&gt;? Or do we go back to a &lt;div&gt; and use aria-roles?
<h3>Replace HTML?</h3>
We could even switch out the element using JavaScript. Add the other element, append the content to it and then remove the original element. Or just get something different from the server, either by using a cookie or just a parameter in an Ajax request.

The example I've given is quite subtle but I can imagine wanting to combine header, sidebar or footer content on smaller screens. How do we handle this and keep it all semantic?

&nbsp;
