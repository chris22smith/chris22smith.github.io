---
layout: "layouts/blog.njk"
title: "Bulk deleting tweets"
date: 2024-11-19 17:00:00
description: ""
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Bulk deleting tweets"
---

I joined twitter in 2009. Over the years I wrote over 4,000 tweets and at my peak had over 3,000 followers. I gained a lot of useful knowledge from following others, had some great interactions with people in the web and front end community and just had a lot of fun. But things change.

I won't bore you with my reasons for now wanting out, as, if you're reading this, I'm sure you're probably in a similar position or not too far away. The good news is that Mastodon has a thriving community, effectively back to the glory years of twitter.

## The right way to go

I was initially just going to remove my account but having taken advice from others on Mastodon (thank you) there are risks associated with this. If I delete my account the username becomes available again and it opens the door for someone to be able to impersonate me. Whilst this seems unlikely, as I'm not famous or anything, I have had a similar experience in the past with allowing a domain name to expire and somebody taking it over and benefitting from my work in building a website's reputation.

So, I'm going to do as others have suggested, leave my account intact but delete all the tweets. This removes my history and hopefully prevents my data from being used to train AI models, not that I can ever know or do anything about that.

## Deleting the tweets

Obviously, you can just go to your Profile page and start manually deleting away. I started doing this but it didn't take me long to realise how long this was going to take. So, an automated solution was needed. There are paid services out there but it struck me as being too trivial to be worth paying for. I'm quite used to using Playwright to run automated scripts on a UI in my job but even this seemed like overkill. I decided to just write a script and run it in the browser's JavaScript console.

## Instructions

1. Open X in Chrome
2. Navigate to your Profile page
3. Open the DevTools (F12)
4. Open the Console tab
5. Paste the script below into the console and hit Enter
6. Leave it running...

You should see the count of posts gradually come down at the top of the screen, though this does not refresh every time.

## The script

<p class="codepen" data-height="1100" data-default-tab="js" data-slug-hash="VwoOrOV" data-pen-title="Bulk Delete Tweets" data-user="chris22smith" style="block-size: 1100px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/chris22smith/pen/VwoOrOV">
  Delete Tweets</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## The breakdown

For anyone interested, I'll explain how it works, not because you need to know but because you amy be able to write similar things to run against other web applications.

The basics are to find a tweet, find the interactive elements needed and click them but there's a bit more to it.

### Recursive

You can't simply use `document.querySelectorAll()` to select all the tweets as only a small number are loaded, with more loading on scroll. So, I decided to use a recursive approach and just tackle the first tweet, then, once that has been deleted tackle the first tweet again, and so on. You'll see the `deleteFirstPost()` function called again towards the end of itself. Handily, `document.querySelector()` returns the first matching item.

### Timeouts

There are a lot of timeouts used. From my experience working with Playwright for automated testing I've learnt that it's important to give a web app some breathing space. Humans can only click things so fast but machines can do things instantly. Sometimes this is too fast and it can try to do something before it has rendered or is in a ready state. So, many of the interactions are wrapped in a `setTimeout()` function with a 500 millisecond delay.

The final recursive calling of the `deleteFirstPost()` function is wrapped with a 5000 millisecond or 5 second delay. Whilst this obviously makes things quite a bit slower, waiting 5 seconds between each deletion, it's important to leave a gap. Actions like deleting posts are usually rate limited, meaning that if you try to do things at too high a frequency it is seen as suspicious and blocked. Leaving a longer gap and just leaving it running is more effective.

### Selectors

The final piece to this function is using the right selectors. The HTML is div soup, layers and layers of div elements and it uses dynamic classes so they will never be guaranteed to be the same twice, so we can't really use any of that. However, it does use the `data-testid` attribute on eahc button so we can use this.

The other main selector used is the dropdown option for "Delete" or "Undo post". The dropdown and it's children are just more divs but they ave been given accessible roles, `menu` and `menuitem`. The text itself is in a span inside the menu item. Luckily for us, it's always the first item we need so we can just use `document.querySelector()`.

Whenever I use a selector I then check if it exists, if it has found a match, before trying to use it. This makes it more robust and less likely to fail. In the case of the dropdown items I also do a quick check against the menu item text to make sure we're picking the right option. If the site was to reorder the options it would break otherwise and who know what bulk action we might be taking.

### Scroll

I added a small scroll with `window.scrollBy(0, 150);` so that it keeps slowly moving down the page with each deletion. This is just to ensure that the screen does not fill with other non tweet content like ads or recommendations on who to follow and prevent more tweets from loading up and being availbale to select.

## Please share

If you found this useful please feel free to use it yourself and share with others. Thanks.
