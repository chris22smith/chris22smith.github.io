---
layout: "layouts/blog.njk"
title: "The development burden of user choice"
date: 2024-04-02 11:30:00
description: "It seems like a nice idea to give the user more choice, let them use it how they prefer, but, in reality, it's not always a good thing."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "The development burden of user choice"
---

When developing a site or app there's often a temptation to give the user a choice, to make something configurable to their preferences. Here are some common examples. Light and dark modes, choosing text sizing or spacing (compact vs expanded), different layouts like a stacked list vs cards.

It seems like a nice idea to give the user more choice, let them use it how they prefer, but, in reality, it's not always a good thing.

## Maintenance multiplied

Let's suppose we have light and dark modes. Every time we add a new feature it now needs to be tested in both modes, so that's 2x testing. If we also have a choice of list or cards, that now needs testing both modes and both layouts, 4x testing. You can see where this is going. Each choice or configurable element is introducing more risk and more development work and it multiplies.

If you give a choice of a list or cards, every change you make to an item has to be made in both layouts. That's double the design, double the coding, double the testing.

From a user's point of view, they will likely make a UI choice and then stick with that choice forever, so they're no longer appreciating the benefit of the feature even though it is still generating ongoing work for the development team.

What was a "nice to have" feature can be quietly adding more and more maintenance work in the background.

I've fallen foul of this a few times. In my eagerness to please users and create a configurable UI, I've given myself problems further down the line. I've learnt the hard way that any user UI choice needs to be considered very carefully before being added.

## Users adapt

The reality is that users don't really appreciate the choice as much as you think they might. If you don't offer light and dark modes then they will use what they're given and probably won't even question it.

If you change your site design from having a horizontal navigation along the top to a vertical navigation down the side then just be brave and make the change. Don't try to give them the choice for a while to soften the blow. Removing choice later is worse than just changing things. They will adapt quickly and any negativity about the change will be forgotten within a very short time frame.
