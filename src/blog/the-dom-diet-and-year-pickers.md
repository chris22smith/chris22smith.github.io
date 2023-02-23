---
layout: "layouts/blog.njk"
title: "The DOM Diet and Year Pickers"
date: "2018-11-15 16:43:21"
description: "I think we all know that having a smaller DOM is good for performance but I was never sure what's considered big or small, or at what points performance is affected"
tags: ["blog","archive"]
eleventyNavigation:
  key: "The DOM Diet and Year Pickers"
wpid: "835"
---
I think we all know that having a smaller DOM is good for performance but I was never sure what's considered big or small, or at what points performance is affected. Knowing a little more can change how you approach things.

I was recently doing a performance analysis on some pages and the tool I chose to use was the Chrome Performance Audit. If you open Dev Tools (F12) and go to the Audits tab you'll see a range of available audits which includes Performance. This uses a tool called Lighthouse and gives estimates for various performance metrics as well as Opportunities and Diagnostics.

One of the diagnostics which came up for me was "<a href="https://developers.google.com/web/tools/lighthouse/audits/dom-size" target="_blank" rel="noopener">Uses an excessive DOM size</a>" and the detail gives us this:
<blockquote>Browser engineers recommend pages contain fewer than ~1,500 DOM nodes. The sweet spot is a tree depth &lt; 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer <a href="https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations" target="_blank" rel="noopener">style calculations</a>, and produce costly <a href="https://developers.google.com/speed/articles/reflow" target="_blank" rel="noopener">layout reflows</a>.</blockquote>
The item that triggered this diagnostic for me was a year picker, a select element with 150 options. Whilst I don't think it's really causing any major performance issues it did strike me that 1 parent element and 150 children does seem excessive for just picking out one number from a consecutive range so I started looking at alternative ways we could do this. I wanted to put my year picker on a  "DOM Diet". I created this pen:

[codepen_embed height="520" theme_id="dark" slug_hash="MzJrjL" default_tab="result" user="chris22smith" editable="true" data-editable="true"]See the Pen <a href="https://codepen.io/chris22smith/pen/MzJrjL/" target="_blank" rel="noopener">Year Pickers</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>) on <a href="https://codepen.io" target="_blank" rel="noopener">CodePen</a>.[/codepen_embed]

Here's a quick comparison of 4 possible ways of selecting a year from a consecutive range. It's important to not only look at possible DOM performance but also the user experience side - ease of understanding and ease of use. No point making it faster if it's confusing or hard work.
<h3>Select/Dropdown</h3>
This is the standard method. It can have a default value or a blank value as the first option. It's very familiar, ease to understand and use. It's probably better to start with a blank value so that we know a user has actually made a selection rather than just left the default. It supports arrow keys and mousewheel. It's easy to validate using just the required property as the available options are set. It can look untidy in some browsers when long option lists run off the bottom of the screen and it does use a lot of DOM nodes.
<h3>Range Input</h3>
The input[type=range] doesn't show a value by default so you have to do a bit of work to show an output value, and a bit more work to do this elegantly. Through testing I found the output value had to go above the slider rather than below so it was not obscured by a finger using the control. I think this is fairly easy to understand but users may not be aware that they can use their arrow keys to get greater precision - either up/down or left/right. It can be hard to control and get the exact figure you want dragging the handle especially using a finger. It can also be wired up to support the wheel event and respond to scrolling up or down on the mousewheel. There's no way to have a blank value so it has to have a default set. There's no real validation to be done as it has to use a value in the range. It's very kind to the DOM too with only 3 nodes.
<h3>Number Input</h3>
This method is very simple. You just let the user type in the date they want. It can be left blank or have a default value. It can be controlled using arrow keys or the mousewheel though I'm not sure how many users know this. By setting the min, max and step attributes it can limit the range entered when not typing. If the value is typed (or pasted) it will require validation. This uses a single DOM node.
<h3>Multiple Number Inputs</h3>
This final method is just a bit of a "left field" design. The advantage of it is that it's very easy to update using the tab key and arrow keys. By having the digits separated the range for each is only ever 10 so in theory it should mean less to change. If left blank it could be set to automatically shift the focus to the next input when a value is added. This makes it as fast to type the 4 digits as a single number input. The min, max and step attributes can limit the range for each digit. It's light on the DOM too with only 5 nodes. The disadvantage with this method is the validation - it's going to be a bit more involved, parsing the 4 digits as a single value to be checked and then highlighting the invalid digit(s) could be difficult. On a mobile device with a number pad it also means the pad flashing in and out quickly, which is not a great experience so it's only really suitable for desktop use.

I'm not sure I'd necessarily go running from the standard dropdown but some of the other methods are certainly possibilities and help keep the DOM smaller.