---
layout: "layouts/blog.njk"
title: "Displaying Options in a UI"
date: "2016-11-23 18:30:26"
description: "One of my pet hates in UIs is seeing a drop down list (select tag) in a form with only a single option in it"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Displaying Options in a UI"
wpid: "302"
---
One of my pet hates in UIs is seeing a drop down list (select tag) in a form with only a single option in it. As a user you have to click it to see the other available options only to find that there are none. This is a clear example of developer convenience being put before user experience.

I'm sure it seems obvious now I've highlighted it but if there's only one option then there isn't a choice to be made at all and we don't need a form input. The code should conditionally show the drop down list only when there is a selection to be made, more than one item.

Depending on the UI design, we could even take this a step further. Maybe a drop down list isn't the best choice for selecting between 2 items? A radio button list is probably better as it enables the user to see all of the available options at a glance and make a selection with a single click/touch. We can test the number of options and if it's below 5 show the options in a radio button list. &lt;ol&gt; might be a better choice than &lt;ul&gt; for the list if the items are in a specific order, e.g. years.

Another example I see is displaying disabled form controls where the control is never enabled, e.g. a checkbox which is disabled because the user doesn't have permissions to change it. If it's not an option, don't show it. Disabling it is the lazy option, easy for the developer. Hiding it is much better but may involve a change to layout. The UX should always be put first. It's usually no more difficult, it's just not considered.