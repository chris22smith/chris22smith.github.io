---
layout: "layouts/blog.njk"
title: "Please stop using flags to represent languages"
date: 2024-03-05 16:05:00
description: "It's really quite simple. What do flags represent? Yes, countries. Are countries and languages the same? Sometimes but often not."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Please stop using flags to represent languages"
---

Yeah, please stop doing that. Stop it. Stop. If you want to know why you should stop it then read on.

## The problem

It's really quite simple. What do flags represent? Yes, countries. Are countries and languages the same? Sometimes but often not. It's not a one to one relationship. A country can use multiple languages, like English and French in Canada, and multiple countries can use one language, like German in Germany, Austria and Switzerland. So, it's a many to many relationship.

If you're a company in Canada and want to show a flag for the English and French languages, what do you show? The Canadian flag doesn't help. It doesn't really make sense to show the flag of France for French but is inappropriate to show the British or American flag for English. Canadians don't consider themselves a different nationality because they use a certain language.

If you're a website user in Austria and want to view the content in German, you don't want to select the German flag. You'd probably understand what you need to do but it's not ideal.

## The solution

The best option is to display the languages in text in their native language so that the user can always recognise their own language, like this:

- Deutsch
- English
- español
- français
- Português
- 普通话
- Русский

With this in mind, don't hide it behind a label that says "Choose language", just display the selected or default language and possibly add a globe icon to convey the idea of language or culture.

## Same language, different culture

If you use a language picker then consider broadening it out to provide more cultural options. Rather than just offering English you could offer English (UK) and English (USA), or français (France) and français (Canada). By capturing the preferred culture as well as language you can make the best use of the JavaScript `Intl` namespace and present details like thousand separators or date format as the user would expect. You know whether they're more likely to prefer data presented in the Imperial or Metric system. It opens up many options for greater personalisation and a better experience.
