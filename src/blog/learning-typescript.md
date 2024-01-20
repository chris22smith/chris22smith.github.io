---
layout: "layouts/blog.njk"
title: "Learning TypeScript"
date: 2024-01-20 11:05:00
description: "I've started learning TypeScript properly. After a few years of knowing bits and mostly just writing JavaScript in .ts files I decided to make the effort to understand it."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Learning TypeScript"
---

I've started learning TypeScript properly. After a few years of knowing bits and mostly just writing JavaScript in .ts files I decided to make the effort to understand it.

A bit like a linting tool, the whole point is that it warns you when you do things wrong or expose yourself to potential problems. When you don't understand why you're being told off, it can get frustrating, and I'd reached a point where it felt like more of a hindrance than a help.

I think I had made some assumptions about type checking, thinking it was mostly knowing if things were a string, number or boolean, and I couldn't really see how this would be that much of an issue. In truth, that part is quite straightforward.

The real value comes from picking up when things can be null or undefined. For example, if you use `document.querySelector()` you will get a HTML element or, if it does not match anything in the DOM, null. It's very easy to overlook this null and not handle it appropriately. TypeScript has you covered.

It's very useful when working with objects or arrays, making sure that all types, structures and properties are present and correct. Imagine you're building up an object to post to an API. If one of the properties you send is undefined, maybe because it has not yet been set, then it may fail. TypeScript will alert you to the possibility of this being undefined so you can prevent the problem.

In short, it makes your JavaScript more secure and helps you pick up issues much earlier in the development cycle so they don't become bugs.
