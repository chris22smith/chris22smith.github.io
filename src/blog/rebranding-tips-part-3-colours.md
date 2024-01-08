---
layout: "layouts/blog.njk"
title: "Rebranding Tips - Part 3 - Colours"
date: 2024-01-08 16:32:00
description: "In a big codebase that had evolved over a long time with lots of different parts, I once counted 15 different versions of what was supposedly the same green."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Rebranding Tips - Colours"
---

I've been through a number of website or apps rebranding exercises, ranging from just a logo update to full blown name, domain and colour scheme and typographical changes. I thought I'd share some of the oddities that cropped up for me and some tips.

---

## Colours

I'll start with an oddity. In a big codebase that had evolved over a long time with lots of different parts, I once counted 15 different versions of what was supposedly the same green. Some were a HTML colour name, some hex, some RGB.

## Consistency first

This widespread variation of colours taught me something valuable. You can't just get into a replace operation. You need to get your old colours lined up first. If you can reach a point where each colour is defined once, with a single source of truth then it makes changing it much easier.

It's important to document your colour scheme somewhere where all designers and developers can get it easily so they use the right values. This is fairly standard practice these days but wasn't in the past and still might not be for smaller projects.

Once you have your well defined colours it's now relatively easy to switch out the old for the new but there can still be some hiccups.

## Colour frameworks

Some colour schemes will have a primary colour and then neutrals - black white and various shades of grey. Others will have a primary and a secondary as well as neutrals. Moving from one colour list to another can be hard if they don't naturally align.

## Neutrals

It's probably easiest to tackle the neutrals first. How many shades does each scheme contain? Your focus should not be on finding the nearest match for each but on how the new branding would want the various shades to be used. Is a light grey only intended to be used as an alternative background colour to white? Maybe it's not suitable for text as it doesn't have sufficient contrast against white. It's important to know what combinations of shades can be used together to provide enough contrast to be accessible.

If you're moving from a scheme which has 3 greys to one which has 10, rather than match 3 look at the branding guidelines or existing uses to see whcih is best for each use case. This is a lengthy process to do right but you do have the option of a phased approach, matching the closest shade initially and then taking a more refined approach later. In my experience people don't generally get offended by a shade of grey being suboptimal like they might with primary brand colours.

## Status colours

Colours that are used exclusively to communicate statuses, such as success, errors, warnings, or information are usually quite straightforward to adapt. A well designed colour scheme should have these clearly defined.

I've come across a situation where the old colour scheme had additional statuses that the new scheme did not consider. For example, we had "expired" (red/error), "expiring" (amber/warning), "valid" (green/success), "new" (blue/info) but also "pending". In this case I chose to use a neutral grey so as not to introduce anything new from outside the overall colour scheme.

## Brand colours

The use of the primary brand colour is usually the most contentious issue. Hopefully it's a like for like swap but it can be harder. I've encounterted the situation where the old scheme had a single primary brand colour but the new scheme has 2 main colours. You need to work out what to use where and think about the balance.

Imagine a website for a coffee shop with an Italian theme, where the design is to use lots of green and red on white, like the Italian flag. I don't know if anything this corny really exists anywhere but it illustrates the point. It would need to use both colours for the idea to work so it can't just swap the old colour, say brown, to just red. This becomes quite a manual, design driven process so takes longer than a simple code change.

Of course, you may get the opposite where more colours become fewer, but that's much easier.

## Semantics

To throw in a general bit of design theory, it's important for any interactive elements such as buttons or links to be obvious. Ideally you'd use unique colours for links, not the same colour as headings, so that it's immediately obvious to a user what can be clicked and what can't.

---

In this Rebranding Tips series:

- [Rebranding Tips - Part 1 - Logos](/blog/rebranding-tips-part-1-logos)
- [Rebranding Tips - Part 2 - Brand Names](/blog/rebranding-tips-part-2-brand-names)
- Rebranding Tips - Part 3 - Colours
- [Rebranding Tips - Part 4 - Typography](/blog/rebranding-tips-part-4-typography)
