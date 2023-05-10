---
layout: layouts/home.njk
title: Blog posts
description: List of blog posts and articles about web development.
eleventyNavigation:
  key: Blog
---

All {{ collections.tech.length }} of my blog posts, most recent first...

<ul class="post-list">
  <!-- blog posts with tag 'tech' sorted by date, most recent first -->
  {%- for blog in collections.tech reversed -%}
  <li>
    <a href="{{ blog.url }}">{{ blog.data.title }}</a>
    <time>{{ blog.date | date: "%d %b %Y" }}</time>
  </li>
  {%- endfor -%}
  <li style="border:none"></li>
</ul>
