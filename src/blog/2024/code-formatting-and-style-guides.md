---
layout: "layouts/blog.njk"
title: "Code formatting and style guides"
date: 2024-07-25 14:15:00
description: "When you have a team of developers, each with their own coding styles and preferences, how do you keep everyone aligned and your code consistent?"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Code formatting and style guides"
---

When you have a team of developers, each with their own coding styles and preferences, how do you keep everyone aligned and your code consistent?

I'm talking about the little things here, like whether you use single quotes or double quotes in your JavaScript. Do you end lines in JavaScript with a semi-colon or not bother? In HTML, do you use closing tags for `<li>` elements or not bother? In CSS, do you order your properties alphabetically, by some other logical rule, or have no rules? Let's not get into tabs vs spaces.

Without any rules in place, developers can keeping changing the coding style with each commit, so, one file could keep flipping back and forth between single and double quotes. Whilst the code still runs this does create a lot of noise in pull requests, making it much harder to see what has actually changed functionally, rather than just formatting.

Some companies have a coding style guide, where they actually specify how things should be done. This is the law, this is how we do things here.

This means developers actively consulting it, getting to know it and using it. This is fine with longer term employees but if there's a high turnover of developers it's not very practical.

## Prettier

Our approach has been to use [Prettier](https://prettier.io/), a VS Code extension which manages all of the preferences for you. Not only does it log all the rules but it enforces them and can be set to actively change the code to reflect them on file save. So, every time you open a file and save changes it implements the coding style. This does mean a lot of pull request noise the first time but then you never have to worry about it again.

In terms of the actual rules, our thinking has been to just adopt Prettier's out-of-the-box default settings. We trust that the publishers will have set sensible defaults, probably the most commonly used and it also means zero maintenance of the settings. If a new dev joins we can simply get them to install the Prettier extension and it's job done. Our coding style guide is effectively now a one-liner.
