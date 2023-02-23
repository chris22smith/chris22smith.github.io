---
layout: "layouts/blog.njk"
title: "twentyfifteen"
date: "2017-07-03 09:21:54"
description: "/*
You can add your own CSS here"
tags: ["blog","archive"]
eleventyNavigation:
  key: "twentyfifteen"
wpid: "655"
---
/*
You can add your own CSS here.

Click the help icon above to learn more.
*/

@import url('https://fonts.googleapis.com/css?family=Anton');

body,
button,
input,
select,
textarea {
    font-family:'Noto Sans', sans-serif;
    line-height:1.4 !important;
}

#main h1,
#main h2,
#main h3 {
    border-bottom:solid 2px #d07;
    color:#000;
    font-family:'Anton', Impact, 'Arial Narrow', sans-serif;
    font-weight:normal;
}

ul, ol {
    margin:0;
}

#main > article.hentry {
    animation:riseIn 1s ease-out;
}

.nav-links .post-title {
    color:#000;
    font-family:'Anton', Impact, 'Arial Narrow', sans-serif;
    font-weight:normal;
}

.post-navigation,
.nav-links .nav-previous,
.nav-links .nav-next {
    border:none;
    box-shadow:none;
}

.secondary-toggle:before {
    content:"menu";
    font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
    text-shadow: 0 1px 1px #000;
}

.secondary-toggle.toggled-on:before {
    content:"close";
    font-size: 16px;
}

/*#page {
    perspective: 1000px;
    perspective-origin: 50% 50%;
}*/

#sidebar {
    font-family: sans-serif;
}

#sidebar .site-title {
    font-family:'Anton', Impact, 'Arial Narrow', sans-serif;
    font-size: 2.6em;
    font-weight:normal;
    text-shadow: 0 1px 1px #000;
}

#sidebar .site-description {
	opacity:1;
}

#sidebar a:hover {
    color:#ff0;
}

#sidebar .sidebar-icons a {
    border:none;
    font-size:2em;
    margin:.5em;
    text-decoration:none;
}

#sidebar .search-field {
  border-radius:.25em;
}

#sidebar .widget {
  margin:2em 0;
}

#comments {
    border:none;
    box-shadow:none;
}

#colophon {
    display:none;
}

.entry-content a,
.entry-summary a,
.page-content a,
.comment-content a,
.pingback .comment-body > a {
    /*border-bottom:none;
    color:inherit;
    display:inline-block;
    position:relative;
    text-decoration:none;*/
    border-bottom:none;
    color:#07c;
    text-decoration:none;
}

    .entry-content a:hover,
    .entry-summary a:hover,
    .page-content a:hover,
    .comment-content a:hover,
    .pingback .comment-body > a:hover {
        text-decoration:underline;
    }

/*
.entry-content a:after,
.entry-summary a:after,
.page-content a:after,
.comment-content a:after,
.pingback .comment-body > a:after {
    background-color:#ff0;
    bottom:0;
    content:"";
    left:-0.25em;
    height:.25em;
    opacity:.5;
    position:absolute;
    right:-0.25em;
    transform:skewX(-15deg);
}

    .entry-content a:hover:after,
    .entry-summary a:hover:after,
    .page-content a:hover:after,
    .comment-content a:hover:after,
    .pingback .comment-body > a:hover:after {
        height:1.5em;
    }
*/

.wrap_login_logout {
    list-style:none;
}

/* styling classes */

.lcp_catlist {
  list-style:none;
}

.lcp_catlist > li {
  border-bottom:solid 1px #ccc;
  margin-bottom:1em;
  padding-bottom:1em;
}

.lcp_catlist > li > div {
  color:#757575;
  margin-bottom:0;
}

.lcp_catlist > li > div a {
  color:#ccc;
  pointer-events:none;
}

.lcp_catlist > li > div p {
  margin:0;
}

.lcp_catlist > li h3 {
  display:none!important;
}

.lcp_paginator li {
  border-color:#ccc;
  min-width:2em;
  text-align:right;  
}

.circle {
  border-radius:50%;
}

/* social media icons */

.social {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 2em 0;
}

.social li {
  display: inline-block;
  text-align: center;
  vertical-align: top;
}

.social li i {
  font-size: 5em;
  margin: .2em;
  -webkit-transition:all 1s ease-in-out;
  transition:all 1s ease-in-out;
}

.social li:hover i {
  text-shadow: 0 1px 1px #000;
}

.twitter > a {
  color: #00aced;
}

.facebook > a {
  color: #3b5998;
}

.linkedin > a {
  color: #007bb6;
}

.google-plus > a {
  color: #dd4b39;
}

.codepen > a {
  color: #222;
}

.github > a {
  color: #bbb;
}

.stackoverflow > a {
  color: #f90;
}

.post-navigation .meta-nav {
	color:#757575;
	opacity:1;
}

/* media queries */

@media screen and (min-width: 59.6875em) {
    /*body:before {
        width:25%;
    }*/
    .site-header {
        margin:15% 0;
        padding:0 15%;
    }
    /*.site-content {
        margin-left:25%;
        width:75%;
    }*/
    .main-navigation {
        margin:0 15% .5em 15%;
    }
    .main-navigation li {
	border-color: rgba(255,255,255,0.5);
    }
    .widget {
        margin:0 0 15% 0;
        padding:0 15%;
    }
    .social-navigation {
        margin:0 15% 15%;
    }
    /*#sidebar {
	transform: rotateY(60deg);
    }*/
    /*body:before {
	box-shadow:inset -50px 0 150px #c06;
    }*/
}

@media screen and (min-width: 38.75em) {
    .secondary {
        background-color:#d07;
    }
    .secondary a {
        color:#fff;
    }
    .hentry {
        box-shadow:none;
    }
}

/* animations */
/* using filter and transform for hardware acceleration */

@keyframes riseIn {
    0% {
        filter:opacity(0%);
        transform:translate3d(0, 25vh, 0);
    }
    100% {
        filter:opacity(100%);
        transform:translate3d(0, 0, 0);
    }
}    