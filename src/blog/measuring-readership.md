---
layout: "layouts/blog.njk"
title: "Measuring Readership"
date: "2017-03-05 11:15:12"
description: "I've been thinking about how we might more accurately determine how many times a blog post is read"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Measuring Readership"
wpid: "533"
---
I've been thinking about how we might more accurately determine how many times a blog post is read. Not just loaded in a browser but actually read.

Firstly, there are different levels of reading.
<h3>Level 1: Evaluate Source</h3>
This is just a quick look to see if the post looks worth spending time on. If the page is full of click bait junk then a discerning user might just back out here. If it looks like a decent quality site then the user will hopefully progress to a...
<h3>Level 2: Quick Scan</h3>
This is reading the post but at high speed and without taking in all the details. The user might skip over any introductory or background content and try to get straight to the meat. When I scan a piece I tend to navigate by subheadings or by reading the first few words of each new paragraph or section.
<h3>Level 3: Full Read</h3>
This either means the user knows the blog already and trusts its quality or that he/she has the time and interest to read it properly.
<h3>Analysis</h3>
Using Google Analytics and filtering we can establish the type of visit rather than it just being a page load.

First up, try to filter out any bots, spiders or non human visitors. When you set up a view Analytics has a nice checkbox option for this.

The next step is to break the visits down into the levels described above by looking at the length of time on the page. It's not quite a simple as setting fixed ranges as blog posts will vary in length, so what might be a full read for a short piece could be a scan for a longer one. So, we need to use the word count and the time on page to calculate the level. This means we need 3 ranges of reading speeds which reflect our 3 levels.

Setting the reading speed levels is largely guess work but I've tried to apply some logic to it. Some <a href="http://www.staples.com/sbd/cre/marketing/technology-research-centers/ereaders/speed-reader/" target="_blank">reading speed research</a> shows that the average reading speed for an adult is around 300 words per minute. That's five words per second. So, if we get the word count and divide by 5 we've got the rough amount of time in seconds that an adult should need to be on the page to read the whole article.

So, if the seconds spent on the page is greater than or equal to a fifth of the word count then we have level 3, the full read.

At the other end of the spectrum, what can we discount as an evaluation or bounce? How long can you be on a page before it's considered that you might be scanning its content? I feel this can be a fixed value rather than relative to the word count as our initial evaluation is done very quickly. Unscientifically, this part is really just plucking a number out of the air but my gut feel is for something like 10 seconds. That's taking in 50 words. Below that I find it hard to consider that any content has really been processed. I can't think of a good way to test this out but I may canvas opinion to refine the figure.

So, we have a page visit time of less than 10 seconds as our level 1 evaluation. That leaves anything in between as level 2, the scan.
<h3>Fine Tuning</h3>
Of course users could spend time on the page without necessarily reading anything. We can add some other details to increase the accuracy. Using JavaScript we can listen for a scroll event or better see if the end of the post is shown in the viewport and then send this as a dimension. A lack of scrolling or content visibility would certainly help to qualify the evaluation visits.
<h3>Ideas?</h3>
Please comment if you think of any further refinements or see any flaws in the logic. Thanks.