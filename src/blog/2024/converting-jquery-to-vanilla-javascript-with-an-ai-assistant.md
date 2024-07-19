---
layout: "layouts/blog.njk"
title: "Converting jQuery to vanilla JavaScript with an AI assistant"
date: 2024-07-19 13:40:00
description: "I thought I'd try to give an honest appraisal of my experience and see what we can learn about using these tools."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "jQuery to JavaScript with AI"
---

I'm using an AI assistant to help me with some laborious code changes. As AI seems to have a bad name in developer circles, I thought I'd try to give an honest appraisal of my experience and see what we can learn about using these tools.

## The task

I'm in the process of converting a lot of older JavaScript files, written with jQuery syntax, into vanilla JavaScript, just to remove another dependency. I'd also like to refactor where posisble, updating to more modern JavaScript and improving efficiency by removing repetition, etc. Many of the script files are from 10+ years ago and written by a single developer, probably under time pressure, so there's certainly room for improvement in how the code is written.

## The tool

I'm using [Codeium](https://codeium.com/), a free VS Code extension. On the surface it's quite like ChatGPT but is supposedly more context aware. I'm using the free tier. If you have a block of code selected in the main editor window and then copy this into the chat prompt it returns a result in the chat window but offers the option of inserting it, which overwrites the code in the main window. This is a good time saver.

## Prompting

I'm giving the initial prompt `convert this jquery syntax to vanilla javascript` and then pasting my block of code. Then, for the next block, I'm just prompting `and this` then pasting the next block.

## Results and findings

In the main, it does a great job, exactly what you would hope for.

### Selectors and attributes

It replaces `$("#filter")` jQuery syntax with `document.getElementById("filter")` and any other non id selectors with `document.querySelectorAll()` and then a `.forEach()` loop.

It handles getting or setting attributes and values perfectly.

### Show and hide

It replaces jQuery's `.show()` and `.hide()` functions with `element.style.display = "block"` and `element.style.display = "none"`, which is interesting. Whilst that will work a lot of the time it assumes that the displayed element has `display: block` so it won't be quite right for elements with other initial display types. I would have thought that using the `.hidden` property would be safer as this does not alter the display type when shown. Of course, we can tell it to do this.

The other issue with `.show()` and `.hide()` was when it takes a value, e.g. `.show(200)` or `.show("fast")`. It doesn't seem to understand this transition duration so just omits it. As I'm dealing with old code here I feel I can live with this. Ideally I'd prefer to handle any animation with CSS anyway so that's another job for another day.

### Requests

jQuery's ajax requests, like `$.get()` and `$.post()` seemed to convert well, though it did sometimes use `fetch()` and sometimes `XMLHttpRequest` (XHR). I had to specify that I preferred to use `fetch()`. I also noticed that it added a `catch()` clause, console logging the error, which was not in the original code, so it's trying to follow best practices.

### Syntax preferences

There are other areas where there can be multiple ways of writing JavaScript and you have to tell it what you prefer. For example, it may mix using traditional for loops, `for (var i = 0; i < 10; i++)` with `.forEach()` or flip between if statements and ternaries. As with most LLMs I think it comes down to being detailed in the prompting or following up with subsequent prompts - it can't reasonably be expected to guess what you want. That said, I was a little disappointed that it didn't seem to remember when I had expressed preferences previously and still used alternatvie syntax.

### Oddities

Everything was going well and then suddenly it replied with:

> I converted the jQuery code to vanilla JavaScript. I kept the code as it is since it is already written in JavaScript.

Thanks for nothing. This was very unexpected as it had already done about 20 conversion operations successfully. It's like it forgot everything that had gone before. Perhaps this was a failing on my part as I had not given it a thumbs up for doing things correctly until this point to confirm that the results were what I had wanted. Maybe it always treats each prompt as a fresh instruction and it can always be interpreted differently. I think that it comes back to prompting. My simple prompt of `convert this jquery syntax to vanilla javascript` was maybe not very specifically what I wanted and, technically, its response is reasonable. Maybe I need to say `rewrite this javascript to remove the dependency on jquery`. This does seem to work consistently, so far.

### Dependencies

Occasionally the code had other dependencies, like jQuery UI, and it was not able to convert this, or at least not in a way that I could be confident it would work and that it hasn't just guessed the content of the dependency. Maybe jQuery UI is so commonplace that it would know but it would need a lot of testing. These parts have been left and I will tackle them manually another time.

### Scale

I started doing these code block conversions very cautiously, one function at a time, carefully checking each line, but I have grown to trust it and accept its output more readily after a quick skim. I tried feeding it more code blocks at once, like 3 functions, then 5 and it seems ok, but there is definitely a hard limit. I have one file that has over 3,000 lines and it certainly can't do that in one go. I wonder if doing more at once can lead to better context awareness and it might see more opportunities for efficiency gains. I might need to start paying to do more, which is fair enough.

### Refactoring

I was also interested to see to what extent it would try to rewrite and improve upon code as well as just replace syntax. Admittedly, I've not asked it to do this. I'm just wondering if it would naturally base its code knowledge on good code or bad code, well used or cutting edge. The honest answer is... a complete mixture. It does not have a style or set preferences, which is something that really differentiates it from a human. Sometimes it will reorganise the code to avoid repetition; sometimes it won't. Sometimes it will optimise a conditional statement to give it a faster exit; sometimes it won't. It's very inconsistent. I think explicitly asking it to refactor code and seeing what it does will be a separate experiment.

## Conclusion

In summary, I'd say that there's no question that using Codeium is saving me hours of manual work. Even if some of the changes are not particularly difficult the time involved is still huge. My main takeway is that you can't expect it to work perfectly straight away. The AI needs very clear instructions and time to learn, and the human needs to invest time in learning how to use the AI tool, get the prompts right and get the best results.

It's a very worthwhile investment for a larger task but for a one off conversion of one function it's probably not worth the time getting the prompting just right. You'd need to be experienced with using AI tools and be an expert prompter or just get lucky to see the value.
