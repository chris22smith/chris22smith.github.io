---
layout: "layouts/blog.njk"
title: "Different Conditional Syntaxes in JavaScript"
date: "2017-06-22 18:00:19"
description: "There are a few ways of using conditionals in JavaScript"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Different Conditional Syntaxes in JavaScript"
wpid: "643"
---

There are a few ways of using conditionals in JavaScript. I've started thinking about it again as I've just discovered another new way.

Lets start off with some basic set up stuff for our examples - a variable, which can be true or false and functions to use in either case:

<pre>var isAllowed = false;

function admit() {
  console.log("admitted");
}

function reject() {
  console.log("rejected");
}
</pre>

The first way I learned to write a conditional, which I consider the classic way, is with if and else clauses like this:

<pre>if (isAllowed) {
  admit();
} else {
  reject();
}
</pre>

If you don't need the else part, you can do it in one line, leaving out the curly braces like this:

<pre>if (isAllowed) admit();
</pre>

Another way of writing it is to use a ternary operator. The first part before the question mark is evaluated. If it's true the next part between the question mark and colon is used; if false the last part after the colon is used:

<pre>isAllowed ? admit() : reject();
</pre>

If you want this style of expression, without actually writing "if" but you don't want the else part there is yet another way.

Look at this:

<pre>!isAllowed || admit();
</pre>

Weird, eh? With an OR expression using ||, the first part is evaluated or run if a function. If true it stops there. If false it evaluates or runs the second part. In case you're new to this, the ! means NOT or inverts the meaning. So, we're saying if isAllowed is false, stop; otherwise run the admit() function.

It's the same technique often used to set default values, just turned around:

<pre>var carModel = getCarModel() || 'unknown';
</pre>

If you're free to use any of these I'd probably advise sticking to the classic if (else) with the braces. It's so much more readable and can be understood by a developer at any level. I like the last technique but I'd only use it in solo projects or where I can't use anything else.
