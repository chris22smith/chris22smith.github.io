---
layout: "layouts/home.njk"
title: "Chris Smith"
description: "Intro page about Chris Smith, front-end web developer, and his personal website."
---

## Hello World

Hello. I'm Chris, a front-end web developer from the UK. I blog about web development and whatever else is on my mind.

You can find me on [CodePen](https://codepen.io/chris22smith/) and [Mastodon](https://home.social/@chris22smith) and occasionally [Twitter](https://twitter.com/chris22smith/). Come and say hello.

## Latest blog posts

<ul class="post-list">
  <!-- 12 most recent blog posts with tag 'tech' -->
  {% assign techs = collections.tech | sort: 'date' | reverse %}
  {%- for blog in techs limit:12 -%}
  <li>
    <a href="{{ blog.url }}">{{ blog.data.title }}</a>
    <time datetime="{{ blog.date | date: '%Y-%m-%d' }}">{{ blog.date | date: "%d %b %Y" }}</time>
  </li>
  {%- endfor -%}
</ul>

[Big list of all posts](/blog)
