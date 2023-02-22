---
layout: "layouts/blog.njk"
title: "Bilingual Equality with a Splash Page"
date: "2016-01-18 23:14:08"
description: "I've worked on a few education sites in Wales and bilingualism is one of the major challenges for any public sector site"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Bilingual Equality with a Splash Page"
wpid: "125"
---
I've worked on a few education sites in Wales and bilingualism is one of the major challenges for any public sector site.

A multilingual site isn't so hard. Most content management systems offer language switching - being on a page in one language and hopping across to view the equivalent piece of content in another. The difficulty comes with entering the site or managing the landing page experience.

So, on your bilingual site, what do you put on your home page? Most content management systems are set up to use a default or primary language with others as secondary options. They're not treated equally. In Wales we're supposed to give both Welsh and English equal status.

At one point I toyed with the idea of having bilingual pages - a 2 column layout with the 2 versions side by side. This is common in print and it works pretty well. On web pages it's not so easy. Space can be very limited, especially on mobile. Loading and displaying additional content that will not be consumed is not really practical. It halves the value of your site - that's value in real monetary terms if you're paying for data downloaded. The other main point is that web pages just don't work that way. A page needs to have a language set so that it can be searched and indexed by search engines. As soon as we mix languages, we're probably killing any potential search rankings.

I've come up with a possible solution. I'm not sure it would work in all cases but for the school website I'm working on now it seems to tick all the boxes. I use a Splash Page. It's normal use would be for special promotions. It's a screen which interrupts your browsing before allowing you to continue to your usual entry page. Rather than a static promotional message I'm reading in the title of the target page in both languages and presenting them as options. So, the user chooses whether to continue in Welsh or English. Now, here's the clever bit. The user's language preference is stored in the browser (localStorage) and is used on future visits. If a preference has been set then the Splash Page will not appear again on that browser, within a specified time frame.

Using this Splash Page means that the user is never presented with a monolingual page without having first made a choice. We have achieved equality for both languages whilst not harming our search engine rankings. :)