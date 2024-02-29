---
layout: "layouts/blog.njk"
title: "When to Hide and When to Disable"
date: 2016-09-30 08:24:39
description: "I've noticed a bit of a recurring theme in UX work with people asking me whether a page element should be hidden from the user or just disabled"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "When to Hide and When to Disable"
wpid: "254"
---

I've noticed a bit of a recurring theme in UX work with people asking me whether a page element should be hidden from the user or just disabled.

To me, it seems quite clear cut. If the user isn't going to use the element, hide it. If they can't use it now but may do when conditions are right, disable it.

A typical example is a form with a Save button. We don't want users to be able to save until the form is valid, completed as we've specified. We could just show and enable the button and then throw validation errors. However, it seems more appropriate to me to simply not make the save option available until it can actually perform its function and save the data. In this case do we hide the button or disable it?

I'd argue that we disable the Save button. We don't want it to be used now but we want to communicate the possibility of using it in the future. It's useful for a user to see what the next step is going to be.

If we hide the button instead of disabling it then the user is confronted with a form and no obvious action. If they think there's no way of progressing they may be reluctant to spend their time filling out the form.

Another example might be a Delete button where only certain user roles have permission to delete records. In this case it makes sense to hide the button from users without delete permissions. They will never use it, at least not with their current role on this page load, so showing it as disabled would give the wrong suggestion that they may be able to delete at some point.

<h3>Just Hidden or Never There</h3>
If we decide that an element will never be used by the current user, maybe due to permissions, then we hide it. However, there's a difference between adding the element into the DOM and hiding it with CSS, like display:none or visibility:hidden and simply not adding it into the DOM. It's better both for security and from a page performance point of view to not add it into the DOM. Conditionally add the element using server side code or, in a front-end framework, use the option which does not add it. For example, in AngularJS this would mean using ngIf rather than ngShow.
<h3>Disabling Links</h3>
Another issue that comes up is people wanting to disable links. So, there's a link to another page but this option only becomes available to use when certain conditions in the page are met. Should this link be hidden or disabled?

This is tougher. By default links don't have a disabled state in HTML, only form elements. We can make a link element effectively disabled using CSS - making its text grey or lowering the opacity and setting pointer-events:none to prevent any click or hover events.

I don't know if it's just me being a purist but I feel that disabled links are a bad idea. We should be using the established patterns rather than trying to invent new ones to solve problems. If our default enabled links were blue and our disabled ones pale grey, how would a user know this? Unfamiliar with the concept of grey links they would probably assume that it was just a :visited link and still try to use it.

With links I feel it's better for them to be simply shown or hidden. If they are revealed when certain conditions are met then it may be useful to add an animation to draw attention to them as they appear.
