---
layout: "layouts/home.njk"
title: "Chris Smith"
description: "Intro page about Chris Smith, front-end web developer, and his personal website."
---

<h2>Hello World</h2>
<p
  >Hello. I'm Chris, a front-end web developer from the UK. I blog about web
  development and whatever else is on my mind.</p
>
<p
  >You can find me on
  <a
    href="https://codepen.io/chris22smith/"
    target="_blank"
    rel="noopener noreferrer"
    >CodePen</a
  >
  and
  <a
    href="https://home.social/@chris22smith"
    target="_blank"
    rel="noopener noreferrer"
    >Mastodon</a
  >
  and occasionally
  <a
    href="https://twitter.com/chris22smith/"
    target="_blank"
    rel="noopener noreferrer"
    >Twitter</a
  >. Come and say hello.</p
>
<h2>Latest blog posts</h2>
<ul class="post-list">
  <!-- 10 most recent blog posts with tag 'tech' -->
  {% assign techs = collections.tech | sort: 'date' | reverse %} {%- for blog in
  techs limit:10 -%}
  <li>
    <a href="{{ blog.url }}">{{ blog.data.title }}</a><br />
    <small>{{ blog.date | date: "%d %b %Y" }}</small>
  </li>
  {%- endfor -%}
</ul>
<p>
  <a href="/blog">Big list of all posts</a>
</p>
