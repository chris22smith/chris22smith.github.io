---
layout: "layouts/blog.njk"
title: "Emmet - Write HTML and CSS Faster"
date: 2021-12-10 17:15:00
description: ""
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Emmet - Write HTML and CSS Faster"
---

## What is Emmet?

Emmet is a productivity tool for HTML and CSS editors. It enables the author to type a shortcut and hit the TAB key to replace it with a predefined chunk of code called a "snippet". It is already included in Visual Studio and VS Code by default, no extensions or packages needed. It does require knowledge of HTML tags and CSS selectors.

In HTML, typing `a` then hitting TAB gives `<a href=""></a>` with the cursor placed ready between the href quotes.

In CSS, typing `bgc` then hitting TAB expands out to `background-color: #fff` with the colour highlighted to be overwritten.

## Default Snippets

Most of the shortcuts and snippets can be found on the official cheat sheet.

[Cheat Sheet (emmet.io)](https://docs.emmet.io/cheat-sheet/)

The full list of default shortcuts and snippets in JSON format can be found on the Emmet GitHub repo:

[Default HTML Snippets (GitHub)](https://github.com/emmetio/snippets/blob/master/html.json)

[Default CSS Snippets (GitHub)](https://github.com/emmetio/snippets/blob/master/css.json)

## Custom Snippets

You can also extend this tool and create your own. This works differently in Visual Studio and VS Code but essentially you define your shortcut and snippet to output in either XML or JSON.

In Visual Studio 2019, the option is under Tools > Code Snippets Manager. Each snippet is defined as a new XML file with extension .snippet. The easiest way to set this up is to copy one of the default files to get the XML structure, change it to what you need and then add/import it. This functionality can actually be used for any language.

It’s a similar idea in VS Code but all of the snippets are stored in a single JSON file. This article explains it clearly. [Creating Custom Emmet Snippets In VS Code — Smashing Magazine](https://www.smashingmagazine.com/2021/06/custom-emmet-snippets-vscode/)

## More

Emmet can also do larger scale boilerplates. Try typing `html:5` then TAB in a new blank .html file. It creates a whole skeleton document structure.

It also does Lorem Ipsum placeholder text. Type `lorem50` then TAB and you get 50 words of Lorem Ipsum. This can be combined with tags, e.g. `p*4>lorem`, to give quick placeholder content.
