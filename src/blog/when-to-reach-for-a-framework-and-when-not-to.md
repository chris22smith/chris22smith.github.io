---
layout: "layouts/blog.njk"
title: "When to Reach for a Framework (and When Not To)"
date: 2019-04-13 08:58:13
description: "First off, when I say 'framework' in this post's title I just mean any big chunk of stuff that you load up and it does stuff for you"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "When to Reach for a Framework (and When Not To)"
wpid: "870"
---

<!-- wp:paragraph -->
<p>First off, when I say "framework" in this post's title I just mean any big chunk of stuff that you load up and it does stuff for you. So, could be React, jQuery, Bootstrap, etc.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let's say that a "framework" is made up of 10 bits of functionality. If we use all 10 of them then we're getting great value from it. Conversely, if we're only using one or two we're probably loading up a lot of stuff that is never used - bloat.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>DIY?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you're only using one or two bits then you'd probably be better off writing these parts yourself, if you can, or finding smaller libraries which do just the parts you need.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you go too far with trying to roll your own system you end up with a kind of framework but one that's made up of lots of disparate parts which may have other dependencies. It's a  Frankenstein's Monster of a framework. Hard to maintain and extend.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Tipping Point?</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So, the real question is at what point do you move from assembling your own parts to adopting a full framework which organises these parts in a coherent and systemic way? Where's the tipping point?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Going back to our example of a framework that offers 10 bits of functionality, how many would you want to be using to make adopting the framework worthwhile? I think it's important not to look at the now but at the future. Where is your project headed? Will it keep growing? What other functionality might you use further down the line? Does the framework given you other things for free that you can do now?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Framework Benefits</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The other major benefit that a framework brings is the knowledge and familiarity. You can recruit someone who has worked with a framework before and they will be up to speed quite quickly compared with someone coming in and having to pick their way through a large custom system.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If a framework offers 10 bits of functionality I'd be inclined to adopt it as soon as you're using 3 of them. I feel the benefits of a framework outweigh the saving.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You also have to consider the quality. Is a framework that has been worked on by top engineers and tested by thousands of developers going to be better than something you roll yourself? And will it integrate better with other third party tools?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Modules FTW</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The real answer is for frameworks to become modular with a very small core and lots of optional modules. Not NPM which is going back to the "Franken-framework" but a properly connected set of features which can be included or dropped as needed. A bit of an old-school example now but <a href="https://jqueryui.com/download/" target="_blank" rel="noreferrer noopener" aria-label="jQuery UI (opens in a new tab)">jQuery UI</a> does this very well - you can build a custom version of the library to suit your needs.</p>
<!-- /wp:paragraph -->
