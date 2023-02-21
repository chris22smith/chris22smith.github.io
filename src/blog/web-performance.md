---
layout: "layouts/blog.njk"
title: "Web Performance"
date: "2016-02-09 22:07:02"
description: "One of the areas of front end development I've really got into in the last year or so is performance"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Web Performance"
wpid: "141"
---
One of the areas of front end development I've really got into in the last year or so is performance. It's always been there in the background but it seems to have a lot more focus in the web community lately.

For a while I've been looking at different ways to speed up various sites I work on. This site has given me a perfect guinea pig for trying out some different techniques.

Static

My first idea for making this site super fast to load was to make all of the pages static. I started off by just making a few pages but soon realised that as things grew and I wanted to make design changes it just wasn't scalable. It was fast though. If I was building a simple site with only a handful of pages this is the way to go.

Jekyll

To try to get the best of both worlds, static for speed and CMS for convenience, I moved on to using Jekyll, a static site generator. After jumping through a lot of hoops I got it set up. It works really well and if you're planning to update a site from a single machine I'd say this is the perfect solution.

For various reasons I moved back to good old WordPress. It's so easy to update from anywhere, which means I actually do it, plus I feel that it's so big in the web industry that I can't really afford not to know my way around it.

So, my new challenge is to make my WordPress site fast. There are various well renowned caching plugins, which would effectively turn my PHP into static pages. Unfortunately, these don't seem to work with my multi-site setup so I've tried something different.

Cloudflare

I've routed my site through Cloudflare. It's a website fronting service which aims to improve performance and security. They host your site on various servers around the world so you get the benefits of a CDN - fast delivery to far flung parts of the world. They concatenate and minify static files for you - one less job. They also handle security threats and high spikes in traffic so your site doesn't go down. As if that wasn't enough, they also serve your files over https - cheaper than SSL hosting and great for SEO.

So far so good.