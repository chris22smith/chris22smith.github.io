---
layout: layouts/home.njk
title: Blog posts
description: List of blog posts and articles about web development.
eleventyNavigation:
  key: Blog
---

All {{ collections.tech.length }} of my blog posts, most recent first...

<p id="current-page-label" tabindex="-1"></p>

<ul class="post-list" id="paginated-list" itemscope itemtype="https://schema.org/Article">
  <!-- blog posts with tag 'tech' sorted by date, most recent first -->
  {%- for blog in collections.tech reversed -%}
  <li>
    <a href="{{ blog.url }}" itemprop="name">{{ blog.data.title }}</a>
    <time datetime="{{ blog.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ blog.date | date: "%d %b %Y" }}</time>
  </li>
  {%- endfor -%}
</ul>

<link rel="stylesheet" href="/css/pagination.css">

<nav class="pagination-container">
  <button type="button" class="pagination-button" id="prev-button" title="Previous page" aria-label="Previous page">
    &lt;
  </button>
  
  <div id="pagination-numbers">
  </div>
  
  <button type="button" class="pagination-button" id="next-button" title="Next page" aria-label="Next page">
    &gt;
  </button>
</nav>

<script src="/js/pagination.js"></script>
