---
layout: "layouts/blog.njk"
title: "WordPress to Eleventy - Part 1, The Why"
date: 2023-06-18 14:00:00
description: "For years my personal website used WordPress, now it's using Eleventy and this is why"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "WordPress to Eleventy - Part 1, The Why"
---

For years my personal website used [WordPress](https://en-gb.wordpress.org/). It's now using [Eleventy](https://www.11ty.dev/). I thought it might be interesting to others to look at why I've made the change.

## WordPress

I started using WordPress in 2008 and never really looked back, until 2022. So, that's a solid 15 years of WordPress, and, honestly I don't have a bad word to say about it, it's great.

### The pros

WordPress makes blogging or content management very easy. It's hosted online so as long as you can login you can edit it from anywhere. It also has great apps so you can have an idea for a blog post while out and about and start drafting something and then later sync it up and carry on. That's quite powerful.

There's a huge community, loads of free plugins for adding additional functionality usually with zero code, just a bit of config, loads of free configurable themes so you can find the right look.

### The cons

The platform is constantly evolving, as are the plugins and themes. On the one hand this is a good thing; on the other it adds a maintenance overhead. There's always something that needs to be updated, and occasionally causes a big problem. I had issues when my (admittedly cheap) hosting didn't offer a high enough version of PHP to support some features.

As WordPress uses a MySql database, a lot of the set up involved doing back end work, which is not what I want to be spending my time on. The use of a database also means having to pay for database hosting, which can get expensive. Not a lot of money but a blog starts becoming an expensive hobby if no money is coming in from it.

## Eleventy

My website is now built with Eleventy. It's quite a different set up.

### The pros

It's all static HTML files, which means it's really fast, like stupidly fast. I now feel I have full control as every bit of content is created by me from scratch, no plugins with black box magic in them. There's no imported theme - every bit of HTML and CSS is my own so I don't ever have to wrestle against any constraints of an existing system or template.

I don't have the fancy editor of WordPress but I now write markdown files, which is easy, and I even have markdown editor apps on my phone shoudl I get the urge to start something when away from my desk.

As it's all static pages, I can host it for free.

### The cons

To be honest, I don't really see any. I don't feel there's anything I had before that I'm missing or that I can't achieve.

## How?

So, how did I go about moving from one to the other? I've covered that in a separate post.
[WordPress to Eleventy - Part 2, The How](../wordpress-to-eleventy-part-2-the-how)
