---
layout: "layouts/blog.njk"
title: "Stop Linking to Nowhere"
date: "2018-08-01 17:26:36"
description: "Do you find yourself writing this kind of thing in your HTML?
<code>&lt;a href="#" onclick="doSomething()"&gt;Some action&lt;/a&gt;</code>

Does that <code>href="#"</code> make you feel slightly uncomfortable? Like it's not really doing anything, a bit of a hack? You'd be dead right to think that"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Stop Linking to Nowhere"
wpid: "802"
---
Do you find yourself writing this kind of thing in your HTML?
<code>&lt;a href="#" onclick="doSomething()"&gt;Some action&lt;/a&gt;</code>

Does that <code>href="#"</code> make you feel slightly uncomfortable? Like it's not really doing anything, a bit of a hack? You'd be dead right to think that.

Links are used like this all the time and there's really no need. The intended purpose of links is to point to another location and provide navigation. That's why the href is there. It's pointing to another place but it's often left pointing nowhere.

It's probably worth pointing out that using <code>href="#"</code> doesn't actually do nothing. It adds a # onto your current location, changing the URL, so when you then click the back button it appears to do nothing but is actually going back to the last location, the URL without the #. If you do use <code>href="#"</code> and an onclick event be sure to use <code>event.preventDefault()</code> with it to prevent this location change.

Links get used in this way mainly because we want the styling and the interactivity. Hovering a link gives visual cues - underline changes, cursor changes so it's easy for a user to see it's something they can interact with.

So, what's the alternative? If you're just performing an action, use a button. It has the visual cues. It doesn't have any hacky <code>href="#"</code> nonsense. It can be styled however you wish if the default styling is too full-on. It can even be styled to look exactly like a link, though personally I think there's value in differentiating between navigation and actions.

And there's more... You get some more benefits for free with a button.

You have a disabled property. You can easily make your action unavailable. Not so easy with a link.

It's more touch friendly. This depends on styling but out-of-the-box it's a larger touch target.

It has an autofocus property so it can be in focus on page load without needing any JavaScript. Ready to go at the tap of the Enter key.

If you use links for navigation and buttons for actions you get every tool doing what it's best at. You could cut your food with the side of your fork and raise it to your mouth on the side of your knife but why would you? This isn't really so different.