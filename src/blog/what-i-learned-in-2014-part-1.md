---
layout: "layouts/blog.njk"
title: "What I Learned in 2014: Part 1 - HTML, CSS, Fonts and Images"
date: "2014-12-29 16:05:41"
description: "I thought I’d take a look back through all the new tech that I’ve learnt in 2014"
tags: ["blog","archive"]
eleventyNavigation:
  key: "What I Learned in 2014: Part 1 - HTML, CSS, Fonts and Images"
wpid: "24"
---
I thought I’d take a look back through all the new tech that I’ve learnt in 2014. Most of it is genuinely learning new things from scratch but some is polishing up on things I haven’t used for a while or taking things further than I had before. It’s a much longer list than I had expected so I’ve broken it down into 3 articles. Hopefully, it’ll be handy to come back to in the future when I’ve forgotten it all again.
<h3>HTML</h3>
I’ve discovered a couple of new things in HTML5. As they’re APIs I uess they’re really Javascript more than HTML. I’ve learned a bit about the Speech API - speech synthesis (turning text content into audio) and speech recognition (turning microphone input into text). It’s still early days and, at the time of writing, only works in Chrome but has some exciting possibilities for both greater accessibility and the ability to use the web without having to look at a page.

My other discovery this year has been the progress element for adding a progress bar to a page. All browsers make these look very different by default but it’s not too hard to style them for consistency if that’s what you want. Like many other HTML5 elements it has nice fallback syntax for non HTML5 browsers.
<h3>CSS</h3>
I’d previously only used transitions for adding a bit of a delay into hover effects but it’s great for changing the size or position or page elements too. It works very nicely combined with transform:rotate. I’ve actually found a great practical use for transitions in creating a multi-state button, which changes from displaying “Save” to “Saving…” and then “Saved” with different styling for each state.

I’ve now learned how to do proper keyframe animations in CSS without the need for any Javascript. The possibilities are endless. Just need to make sure I’m not chucking them in everywhere for the sake of it.

It’s been a while since I’ve had to deal with print media styling. I was hoping things would have improved in the last few years but still find it quite tricky. I found myself having to use a lot of !important in my properties to gain control. Maybe considering print later in the design process rather than from the outset was a mistake with hindsight?
<h3>Fonts</h3>
I’ve started making full use of web fonts, particularly Google Fonts. The basic implementation is very easy, just a link to an external CSS file which loads the font-face, but they’re not always consistent across operating systems and browsers so it takes quite a bit of testing to be sure your chosen font will appear nicely across the board. Working out whether to install additional font variants for bold and italic or whether to just let the browser apply its own faux bold and italic effects is another issue. Given the extra HTTP requests and page weight I’m tending to stick with “web safe” fonts for body text and only use web fonts for headings or elements requiring a bit more styling.

I’ve found that I can actually create my own font variants by playing around with the CSS letter-spacing property, using things like letter-spacing:-1px, on “web safe” fonts.
<h3>Images</h3>
I haven’t learned much new with images but have found a couple of handy new techniques. I’ve started using base64 format for smaller images instead of referencing external files. This means putting the file data into a continuous stream of characters in the CSS file instead of using a path another file. This still gets cached as part of the CSS but prevents an additional HTTP request. As base64 format is actually a little bigger in file size than refreencing the image directly it only makes sense for smaller files. For larger files it makes more sense to benefit from the smaller file size at the expense of the extra request. Good CSS editors will also show you a preview of the image as you hover over the base654 code, which is handy as it’s completely unintelligible.

I’ve started using some very basic SVG. It seems fairly straightforward but I’m still not sure about the sizing and scaling. One for next year.