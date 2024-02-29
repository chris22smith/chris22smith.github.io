---
layout: "layouts/blog.njk"
title: "Who'd be a front end developer?"
date: 2023-06-15 08:00:00
description: "I'm going to try to explain what a front end developer does, or, at least, should be doing, for those that don't know"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Who'd be a front end developer?"
---

I'm going to try to explain what a front end developer does, or, at least, should be doing, for those that don't know.

Imagine you've been tasked with designing a poster. You're given the text and a selection images and you arrange them in a pleasing way. Job done.

That's all front end dev really is, right? Errr... no. Not by a long way.

## Sizing

Now imagine that you're told your poster can magically change size. Spooky. In fact, it can be any size, so you need to make all the content flow and adapt so that it still always looks pleasing whether it's a square, a tall column or a long landscape view. I mean, your poster might even be glued onto the face of a watch (pushing the metaphor to breaking point). So, any size. How much longer does it take you now?

## Timing

But it's not just size that varies. The different bits of content, text and images, are not all given to you up front. They may become available to use at different times and you don't always know what they will look like. But plan how you will display them at all sizes anyway. If things are available at different times but they flow, one after another, then how do you stop them jumping about as they're added? If something's taking a while to show up, how do you let people know it's on its way? Hmm, bit more to think about.

## Describing

If this hadn't become challenging enough, now you've got to think about making your poster content available to everyone. That's people who use other languages and even people who can't see it. It needs to be set up in a way which allows text to be available to translate and the layout flexible enough to also show right-to-left languages such as Arabic. That means not saying this text goes on the left but this text goes at the start of the line. For those that can't see it, you need to describe everything in words that can be read aloud - audio description.

## Real world

Shattering the metaphor (finally) and bringing it back to the web these considerations are known as responsive design (sizing), loading strategy (content availability) and accessibility (available to everyone).

And that's not even it. There's also performance (speed), user experience, branding, search engine optimisation for public sites, knowing which browser features you can and can't use.

Easy, right?
