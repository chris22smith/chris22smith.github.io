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
        <a href="https://codepen.io/chris22smith/" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            class="icon"
            viewBox="0 0 512 512"
            aria-hidden="true"
            focusable="false"
          ><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              fill="currentColor"
              d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/>
              </svg>CodePen</a>,
        <a href="https://mastodon.social/@chris22smith" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            class="icon"
            viewBox="0 0 448 512"
            aria-hidden="true"
            focusable="false"
          >
            <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              fill="currentColor"
              d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"
            /></svg>Mastodon</a>
        and
        <a href="https://twitter.com/chris22smith/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>X (formerly Twitter)</a>. Come and say hello.</p>
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
