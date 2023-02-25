---
layout: "layouts/blog.njk"
title: "Precision Level in CSS"
date: 2017-04-28 18:00:52
description: "When we're using relative sizing in CSS, percentages or ems, how precise do we need to be with our fractions? Is there an optimum level?"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Precision Level in CSS"
wpid: "590"
---

When we're using relative sizing in CSS, percentages or ems, how precise do we need to be with our fractions? Is there an optimum level?

If we have a font size of 18px (or anything, it's relative after all) and we want some smaller text at two thirds of its size (12px) then we can express this as .6666666667em or 66.6666666667%. Here I've used 10 decimal places to give a very precise fraction but this feels like overkill to me. If I used just 2 decimal places, .67em or 66.67%, is this accurate enough to consistently calculate the desired pixel value. Or should I not worry? It'll be near enough.

Looking at other developers' CSS, mainly in tutorials, the general pattern seems to be to use between 4 and 6 decimal places. Looking back through my own code, my preference seems to be to use 6 but I couldn't tell you why. I'd imagine I've just adopted someone else's coding style. I definitely feel that going beyond 6 seems unnecessary but am not sure how little I can get away with.

Sass is able to perform calculations using fractions. Here's an example:

<code></code>

<pre>$two_thirds: 2/3 * 1em;

.smaller {
  font-size: $two_thirds;
}
</pre>

This resolves to .66667em, 5 decimal places. Is this a set precision or did Sass actually calculate it from the root size and decide what precision was needed for it to resolve to an integer? Hmm (rubs chin). I guess that most people let Sass handle this for them and don't even look at the compiled CSS.
