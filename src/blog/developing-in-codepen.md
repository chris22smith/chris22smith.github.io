---
layout: "layouts/blog.njk"
title: "Developing in Codepen"
date: "2015-12-13 22:09:41"
description: "A look at why and how I use Codepen for front end development work"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Developing in Codepen"
wpid: "35"
---

A look at why and how I use Codepen for front end development work.

<h3>Background</h3>
I work on a web app with a development team. We use <a href="https://angularjs.org" target="_blank">AngularJS</a> with a RESTful API. My role is looking at the design and UX side of things and scoping out how a new feature will look and behave in a web browser, or, I should say, in various browsers at different screen sizes.

I generally do my work up front. I've always been a design in HTML and CSS kind of guy. To me, with my skill set, working in a graphics editor takes as long as coding it so it makes little sense for me to do the work twice.

Until recently, I've been using static HTML and then another developer has added the binding and data. Where the feature is on a new screen I can go a step further and create a dummy data object, to represent the data returned from the API, and actually do the binding as well as create any custom behaviour.

Working on existing screens has been much more difficult. It's almost impossible to add new data, binding and behaviours without breaking the existing code. To use a dummy data object I need to intercept the real data retrieval and replace the object, which stops the page working when wired up again. However I work things, I'm having to check in code which is not releasable.

<h3>A new way of working</h3>
I've started using <a href="https://codepen.io" target="_blank">Codepen</a> to abstract away the new feature. I set up a new pen, import any existing dependencies and then create the HTML, CSS and JavaScript for the new feature in isolation.

This means that the original project code does not get touched and broken. As the next developer brings in any model/schema changes he/she can bring in my front end code so we don't have any breaking check-ins.

By importing the dependencies - JavaScript libraries, CSS - we avoid any clashes or inheritance issues and additional work trying to integrate my code.

It also means I can give the new feature my full attention without having to use other parts of the screen, for example, if I'm working on a modal window, I don't have to go through the usual page processes in order to call it.

I'm using <a href="https://codepen.io" target="_blank">Codepen</a> in the way it was intended, as a front end playground, an environment where I can experiment with different ways of doing things. The results are displayed in a frame, updated instantly as you type, which makes working much faster - no more manual refreshing or rebuilding.

From what I've described up to this point, this abstraction could be done by making a copy of the page but copying the HTML page, the CSS and JavaScript and changing all of the references between these files is quite a headache. Believe me, I've been there enough times.

One of the massive advantages of <a href="https://codepen.io" target="_blank">Codepen</a> for a designer is the ability to fork pens, so you just hit one button and you've got an exact copy of the pen you were working in, making it very easy to create a few variations of a design.

As each pen is available on a public URL it's easy to share designs with colleagues or clients and they can see a working prototype - much better than a static screenshot. It also means that links can be embedded in documentation. Personally, I feel that now web animation has become mainstream, it's important to be able to show how screen elements transition between states, how things appear/disappear and demonstrate where the user's attention is drawn through processes. Static screenshots just don't cut it any more.

Final point. Designing in the browser with work stored in the cloud is awesome for design. I could be out and about and suddenly see some inspiration for something I'm working on or get a new idea. Rather than hope I'll remember it, I can quickly create a new pen or fork an existing one and add some code or notes there and then from a phone or tablet. I don't have to hope I'll remember or wait until I'm back at my desktop. It's exactly what the web should be.
