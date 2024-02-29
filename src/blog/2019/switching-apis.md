---
layout: "layouts/blog.njk"
title: "Switching APIs"
date: 2019-10-17 18:00:59
description: "It's completely normal now for web apps to work with external third party JavaScript APIs"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Switching APIs"
wpid: "922"
---

<p>It's completely normal now for web apps to work with external third party JavaScript APIs. The good ones give you lots of documentation making them pretty straightforward to implement and use. You load a script from a URL or local resource, use their methods and properties in your code and away you go.</p>

<p>But what if you then want to switch to another API provider? Maybe the one you were using isn't accessible, doesn't support the older browsers you need? Maybe they put their prices up? Whatever the reason you may need to switch at some point.</p>

<p>This change means rewriting your app's JavaScript to work with the new API. You'll have to find every point it touches and update it. What if it works differently? What if this one takes an object parameter rather than an array? You'll have to completely rewrite the data parts too.</p>

<p>There is a better way.</p>

<p>Rather than working directly with an API and using the properties and methods in your code, you create an intermediary, your own internal service, which handles this functionality. The internal service maps the properties and methods you need to those of the third party API. It handles any data transformation needed. Your app works with this service, your own API, so that when a change of service provider is needed the app itself does not need to be rewritten, just the internal service.</p>

<p>An internal service can also be set up to work with multiple APIs at once so it maps everything it needs for each. This allows you to push choice to your users. So, for example, if it's a news, sport or weather feed built into a site, you can let your user choice their preferred information source. You could use different services for different regions, e.g. local news.</p>

<p>To use a slightly inappropriate analogy, it's better to be dating these APIs than to move in with them. &#x1f609;</p>

<p></p>
