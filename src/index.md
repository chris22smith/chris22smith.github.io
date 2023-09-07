---
layout: "layouts/home.njk"
title: "Chris Smith"
description: "Intro page about Chris Smith, front-end web developer, and his personal website."
---

<link rel="stylesheet" href="css/home.css">

<div class="home-intro-layout">
  <div>
    <img id="cs-portrait" src="./img/chris-smith-cartoon-2023.webp" alt="Chris Smith in summer 2023">
  </div>
  <div>
    <h2>Hello World</h2>
    <p>Hello. I'm Chris, a front-end web developer from the UK. I blog about front end web development and the tech industry generally. I've been making web pages since 1999 and this blog dates back to 2008.</p>
    <p>You can find me on
        <a href="https://codepen.io/chris22smith/" target="_blank" rel="noopener noreferrer">CodePen</a>,
        <a href="https://mastodon.social/@chris22smith" target="_blank" rel="noopener noreferrer">Mastodon</a>
        and
        <a href="https://twitter.com/chris22smith/" target="_blank" rel="noopener noreferrer">X (Twitter)</a>. Come and say hello.</p>
  </div>
</div>

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
