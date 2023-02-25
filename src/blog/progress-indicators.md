---
layout: "layouts/blog.njk"
title: "Progress Indicators"
date: 2021-05-23 20:05:25
description: "I've been working on a questionnaire with a requirement to show progress through the questions"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Progress Indicators"
wpid: "967"
---

<!-- wp:paragraph -->
<p>I've been working on a questionnaire with a requirement to show progress through the questions. It has thrown up some interesting challenges which I felt were worth sharing.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When I first saw the requirement I thought it would be simple - progress is just number of questions divided by number of answers, easy maths, right? Well, it could be in a very simple questionnaire but ours threw up a few more curved balls. Here are some additional considerations:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some questions are mandatory, others are optional, so are we counting all questions or only the mandatory ones?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is some conditional logic so a question may be shown or hidden depending on how you answer another question. How do we handle that?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some questions can have multiple answers, like a checkbox list, so how many do we count?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some answers may automatically answer other questions. I know this sounds odd but it's a big old questionnaire and sometimes it was useful to repeat some questions and answers in a different context in case it changed the answer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Our architecture has questions and answers as 2 separate API calls, which each bring back object arrays. Questions and answers are linked by a common data point, which is just an identifier so that we can match them up. So, time to work through our extra considerations...</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We only want to count mandatory questions. These are denoted by an isRequired property on each question so we can filter to that like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const filteredQuestions = questions.filter(q =&gt; q.isRequired);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>We also only want to count questions that are shown. We can't reasonably expect a user to answer a question they haven't seen. This is similar to the isRequired property but using isVisible, so to filter on both of these (instead of just the one property above) we can do this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const filteredQuestions = questions.filter(q =&gt; q.isRequired &amp;&amp; q.isVisible);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If questions have multiple answers, it doesn't matter, we're just interested in whether or not they have an answer.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next we need to deal with duplicated questions and/or answers. We can convert our filtered questions and our answers into arrays of unique data points. First we simplify the array to only hold the data point string, then we dedupe it by converting the array to a set and back again.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const questionDataPoints = questions.map(q =&gt; q.dataPoint);
const uniqueQuestionDataPoints = &#91;...new Set(questionDataPoints)];

const answerDataPoints = answers.map(a =&gt; a.dataPoint);
const uniqueAnswerDataPoints = &#91;...new Set(answerDataPoints)];</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Now that we've got a list of unique question data points and a list of unique answer data points we only need to see which of our questions have answers, which we can do like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const numberOfQuestions = uniqueQuestionDataPoints.length;
const questionsAnswered = uniqueQuestionDataPoints.filter(q =&gt; uniqueAnswerDataPoints.includes(q));
const numberOfAnswers = questionsAnswered.length;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>These figures can now be used as our value and max attributes or numerator and denominator in a fraction. To give a percentage we can do this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const percentage = Math.round((numberOfAnswers/numberOfQuestions) * 100);</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If we want a normalised figure, a decimal in the range between 0 and 1, we can stick with the simpler fraction calculation like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>const normalized = numberOfAnswers/numberOfQuestions;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The &lt;progress&gt; HTML element can take max and value attributes or if we don't specify a max we can simply pass a normalised value.</p>
<!-- /wp:paragraph -->
