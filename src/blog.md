---
layout: layouts/home.njk
title: Blog posts
description: List of blog posts and articles about web development.
eleventyNavigation:
  key: Blog
---

All {{ collections.tech.length }} of my blog posts, most recent first...

{% assign currentYear = '' %}
{% for post in collections.tech reversed %}
{% assign postYear = post.date | date: "%Y" %}
{% if currentYear != postYear %}

<hr>
<h2>{{ postYear }}</h2>
{% endif %}
  <p class="post-item" itemscope itemtype="https://schema.org/Article">
    <time datetime="{{ post.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ post.date | date: "%d %b" }}</time>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </p>
  {% assign currentYear = postYear %}
{% endfor %}
