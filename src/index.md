---
layout: "layouts/home.njk"
title: "Chris Smith"
description: "Intro page about Chris Smith, front-end web developer, and his personal website."
---

<link rel="stylesheet" href="css/home.css">

<div class="home-intro-layout" role="region" aria-label="Introduction">
  <div>
    <img id="cs-portrait" src="./img/chris-smith-cartoon-2023.webp" alt="Photo of Chris Smith, head shot with field and trees in the background" height="240" width="240">
  </div>
  <div>
    <h2>Hello World</h2>
    <p>Hello. 👋 I'm Chris, a front-end web developer from the UK. I blog about front end web development, design and user experience. I've been making web pages since 1999 and blogging since 2008.</p>
    <p>You can find me on
        <a href="https://codepen.io/chris22smith/" target="_blank" rel="noopener noreferrer">CodePen</a>,
        <a href="https://mastodon.social/@chris22smith" target="_blank" rel="noopener noreferrer">Mastodon</a>
        and
        <a href="https://twitter.com/chris22smith/" target="_blank" rel="noopener noreferrer">X (formerly Twitter)</a>. Come and say hello.</p>
        {% include 'kofi-widget.html' %}
  </div>
</div>

## Latest blog posts

<ul class="post-list" itemscope itemtype="https://schema.org/Article">
  <!-- 12 most recent blog posts with tag 'tech' -->
  {% assign techs = collections.tech | sort: 'date' | reverse %}
  {%- for blog in techs limit:3 -%}
  <li class="featured">
    <a href="{{ blog.url }}" itemprop="name">{{ blog.data.title }}</a>
    <div class="description" itemprop="description">{{ blog.data.description }}</div>
    <time datetime="{{ blog.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ blog.date | date: "%d %b %Y" }}</time>
  </li>
  {%- endfor -%}
  {%- for blog in techs offset:3 limit:6 -%}
  <li>
    <a href="{{ blog.url }}" itemprop="name">{{ blog.data.title }}</a>
    <time datetime="{{ blog.date | date: '%Y-%m-%d' }}" itemprop="datePublished">{{ blog.date | date: "%d %b %Y" }}</time>
  </li>
  {%- endfor -%}
</ul>

[Big list of all posts](/blog/)
