---
layout: "layouts/blog.njk"
title: "Why should we care about Web Accessibility?"
date: 2024-01-26 16:45:00
description: "In a nutshell, taking care of web accessibility makes our apps available to everybody, easier to use, easier to test, easier to sell and safe from negative publicity and lawsuits."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Why should we care about Web Accessibility?"
---

In a nutshell, taking care of web accessibility makes our apps...

- available to everybody
- easier to use
- easier to test
- easier to sell
- safe from negative publicity and lawsuits

## Available to everybody

There is a proportion of the population who have disabilities or impairments that mean they cannot use the web in the same way as most people.

There is a wide range of visual impairments that can affect users, including things like sensitivity to motion, colour blindness or blurred vision.

Some users cannot see at all. Does not being able to see the screen mean you can't access its content or interact with it? It shouldn't. Assistive technology, in particular screen reader software can read aloud the contents of a page, reading text and annoucing interactive features. It can also handle advanced navigation, describing images or diagrams and keeping up with live changes.

Some users have difficulty with fine motor skills, making it difficult for them to use a pointing device like a mouse. They rely on using a keyboard or other form of input.

If we've done our job properly and built things in an accessible way then all of these problems are mitigated and our products can be used by everyone.

It's obvious that from a moral perspective this is the right thing to do and something that we would all want to do and be proud that we do. However, in the day to day reality of business, with lots of conflicting priorities, this area can't always compete with the bigger earners so here are some other reasons to care.

## Easier to use

There's a reason I didn't quote numbers at you for people with disabilities or impairments. That's because these things actually affect all of us to some degree. Small print is hard to read. So is pale grey text on a white background. That's not an impairment, that's a poor design choice. If you find yourself leaning in to your screen to read something or having to use your little finger to touch something, that's a web accessibility failure, and a usability failure, which means a poor user experience. If we want our users to love our products and recommend them to others we need to get this stuff right.

## Easier to test

This point is rarely spoken about but having accessible content can make automated testing much easier. If you think about it, supporting screen reader software and running automated tests are both about a machine being able to read your page and then take actions or provide feedback. It's about the page elements being described in a way that does not solely rely on them being seen. As an example, if a chart has values in text, a screen reader can read them and an automated test can check them, whereas if they're part of a generated image then they're only available to those who can see them.

## Easier to sell

I very much doubt that web accessibility is at the forefront of anyone's mind when deciding whether or not to buy software but it can certainly be a factor.

For any publicly funded project it will be a clear selling point, as it's a non-negotiable requirement.

For private companies, it often comes up as something that is required when getting into the finer details of contract agreements, usually in the form of proving how web accessibility standards are being met. If you have not been giving this area due attention, this can be very difficult to find a way around. Auditing software makes it very easy to expose a product that is not sufficiently accessible.

## Safe from negative publicity and lawsuits

I suppose that after all the carrots, this is the stick. If we don't make an effort in this area then we're exposed to negative comments, bad PR, boycotts and even legal action.

It is still relatively rare but there have been anti-discrimination cases brought against websites for failing to serve disabled users and the amounts of money involved are frightening.

Even if things are not fully accessible it's defintely worth having a plan in place to demonstrate positive intent and a pathway to making it accessible in the near future.
