---
layout: "layouts/blog.njk"
title: "Rebranding Tips - Part 2 - Brand Names"
date: 2024-01-08 16:31:00
description: "You might think that updating brand names is as simple as a text find and replace but there can be more to it. Text can be hidden away in templates, config files and databases."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Rebranding Tips - Brand Names"
---

I've been through a number of website or apps rebranding exercises, ranging from just a logo update to full blown name, domain and colour scheme and typographical changes. I thought I'd share some of the oddities that cropped up for me and some tips.

---

## Brand names

You might think that updating brand names is as simple as a text find and replace but there can be more to it. Text can be hidden away in templates, config files and databases.

## Casing

How a brand name appears in text can be important. Some names are always used in lowercase, some always uppercase, some title case and some sentence case. You have to be careful that this casing is how the text naturally appears is not set by CSS or JavaScript or somehow manipulated in the backend. It's probably a good idea to remove anything that sets this and make the natural text appear as expected.

## Context

Another oddity I've come across is that some names can contain a certain word or meaning that no longer fits the context. For example, if the old company name was "Oldco" and we had something that said "OldCo services" but the new company name is "NewCo Services" then "NewCo Services services" feels weird. You may need to manually check for how the name is used if it contains real words and rewrite some text.

## Email addresses

If a domain is changing or we at least want to stop using the old name in any display text then there's a way of doing this. Suppose our page says "For help please email support@oldco.com". It's mentioning OldCo, which we want to avoid. Instead of just substituting the new name email address (if there is one) it's better to change the link so that we get something like "For help please &lt;email our support team&gt;" with the text in angled brackets linked to the email address. This not only conceals the old domain name but now uses meaningful hyperlink text, which is better for user experience and accessibility.

---

In this Rebranding Tips series:

- [Rebranding Tips - Part 1 - Logos](/blog/rebranding-tips-part-1-logos)
- Rebranding Tips - Part 2 - Brand Names
- [Rebranding Tips - Part 3 - Colours](/blog/rebranding-tips-part-3-colours)
- [Rebranding Tips - Part 4 - Typography](/blog/rebranding-tips-part-4-typography)
