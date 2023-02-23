---
layout: "layouts/blog.njk"
title: "Front End Performance Enhancements"
date: "2017-05-01 13:00:40"
description: "I've recently made a load of changes to a site to improve the page loading times"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Front End Performance Enhancements"
wpid: "605"
---

I've recently made a load of changes to a site to improve the page loading times. Now that I'm happy it's worked I thought I'd share some of the moves. Broadly, we're looking to load up fewer files and to make each file as small as possible.

<h3>Remove Inline Content</h3>
My first step was to get rid of any inline styling or scripting, moving as much as possible into .css or .js files so they are recognised as static resources and cached. Moving &lt;style&gt; blocks out into new CSS files or &lt;script&gt; to JavaScript files is pretty straightforward.

I came across a few instances where these are using some server side binding, something like this:

<code></code>

<pre>&lt;script&gt;
  // lots of code
  user.companyName = '@CompanyName';
  // lots of code
&lt;/script&gt;
</pre>

Here, @CompanyName is coming from the server. This doesn't mean that the whole script block has to stay in the HTML. It's easy to just pull out any server data and stick it in a variable and then move everything else to an external file. Like this:

<code></code>

<pre>&lt;script&gt;
  var companyName = '@CompanyName';
&lt;/script&gt;
&lt;script src="lots-of-code.js"&gt;&lt;/script&gt;
</pre>

Now the bulk of the code can be cached.

<h3>Concatenation</h3>
The next step was to reduce http requests by combining files. You can manually copy all of the CSS or JavaScript into a single file but it's much more practical to do this with a task runner, like Gulp or Grunt. In ASP.NET there's a handy RegisterBundles method which combines files into a single resource for you.
<h3>Minification</h3>
As well as reducing the number of files we can also reduce the size of files. Minification removes whitespace and comments and often optimises repeated code like variable names to make the file as small as possible. This can be done in a task runner too. In ASP.NET it's an option within bundling - BundlesTable.EnableOptimizations = true.
<h3>Prefetching</h3>
Prefetching is basically going and getting resources and putting them in the cache ready for future use. You just tell your page which resources to get and when it's idle it gets them asynchronously. This means you're shifting the load from your second page onto your first page but without ever affecting the user's experience. The trick is knowing what page he/she will go to next and loading the appropriate resources and trying to avoid loading things which will not be needed. It's particularly effective on stepped processes or wizards.

The sites I've been working on had a very light login screen, which upon success takes you to a dashboard. As I knew where the user would be going next it meant that I could prefetch the resources. Obviously I couldn't prefetch anything sensitive that required the user to be logged, like API calls, in but it did mean I could have all of the site wide JavaScript libraries and CSS ready to go. Here's how it looks in the HTML:

<code></code>

<pre>&lt;link rel="prefetch" href="~/bundles/GlobalJS"&gt;
</pre>

Easy, right? As you can see, here I'm prefetching my global JavaScript bundle or concatenated and minified JavaScript resource.

The site structure was a series of list pages which each have their own details page to view a record in more detail. I made the assumption that if a user navigated to a list page he/she had the intention of viewing a record. So, from the list page I prefetched the resources needed for the details page.

There's a great article on <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS Tricks</a> which goes into far more detail - <a href="https://css-tricks.com/prefetching-preloading-prebrowsing/" target="_blank" rel="noopener noreferrer">Prefetching, preloading, prebrowsing</a>.

<h3>Instant</h3>
Looking at the Page Timings in Google Analytics almost all pages have reduced loading times, some are now even instant. They have no resources to load as everything is already cached. There's still some client side processing to be done after load but I'm happy I've managed to take away most of the user's waiting time.
