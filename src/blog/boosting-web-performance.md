---
layout: "layouts/blog.njk"
title: "Boosting Web Performance"
date: "2016-02-10 17:40:42"
description: "One of the areas of front end development I've really got into in the last year or so is performance"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Boosting Web Performance"
wpid: "130"
---

One of the areas of front end development I've really got into in the last year or so is performance. It's always been there in the background (along with SEO and accessibility) but it seems to have a lot more focus in the web community lately.

For a while I've been looking at different ways to speed up various sites I work on. This site has given me a perfect guinea pig for trying out some different techniques. Let's give it a boost! Oooosh!

<h3>Static</h3>
My first idea for making this site super fast to load was to make all of the pages static. I started off by just making a few pages but soon realised that as things grew and I wanted to make design changes it just wasn't scalable. It was fast though. If I was building a simple site with only a handful of pages this is the way to go.
<h3>Jekyll</h3>
To try to get the best of both worlds, static for speed and CMS for convenience, I moved on to using <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>, a static site generator. After jumping through a lot of hoops I got it set up. It works really well and if you're planning to update a site from a single machine I'd say this is the perfect solution.
<h3>WordPress</h3>
For various reasons I moved back to good old uncle <a href="https://wordpress.org/" target="_blank">WordPress</a>. It's so easy to update from anywhere, which means I actually do it, plus I feel that it's become so big in the web industry (almost its own industry) that I can't really afford not to know my way around it.

So, my new challenge is to make my WordPress site fast. There are various well renowned caching plugins, e.g. <a href="https://wordpress.org/plugins/w3-total-cache/" target="_blank">W3 Total Cache</a>, which would effectively turn my PHP into static pages. Unfortunately, these don't seem to work with my <a href="https://codex.wordpress.org/Create_A_Network" target="_blank">multisite</a> setup so I've tried something different.

<h3>Cloudflare</h3>
I've routed my site through <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a>. It's a website fronting service which aims to improve performance and security. They host your site on various servers around the world so you get the benefits of a CDN - fast delivery to far flung parts of the world. They concatenate and minify static files for you - one less job. They also handle security threats and high spikes in traffic so your site doesn't go down. As if that wasn't enough, they also serve your files over https - cheaper than SSL hosting and great for SEO.

So far so great. Definitely worth a look on top of whatever other optimisations you're doing. :)
