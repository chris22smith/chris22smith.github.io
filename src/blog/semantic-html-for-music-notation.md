---
layout: "layouts/blog.njk"
title: "Semantic HTML for Music Notation"
date: "2016-05-15 14:24:50"
description: "I'm interested in how music notation (staves, crotchets, etc"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Semantic HTML for Music Notation"
wpid: "237"
---
I'm interested in how music notation (staves, crotchets, etc.) could be displayed as HTML. At present there's no ready-made way of including this type of content as HTML. It has to be done using images or possibly with HTML5 Canvas or SVG. I'm wondering how it might work in straight HTML5 and CSS3, preferably without any JavaScript.
Scope

I know that HTML is not designed for this and I'm not expecting to find a solution but it's fun to see how close we can get and a good exercise in approaching content in a semantic way.
Setting up the Semantics

Logically, when looking for semantic markup the place to start is with the HTML. I think we'd need to place our music into our HTML page using an &lt;article&gt; or &lt;section&gt; tag depending on whether it's the main content or an extract within a page.

&lt;article class="music"&gt;

&lt;/article&gt;

Any title for the music or introductory notes will be in regular HTML tags but for better semantics this should be included within the music section.

&lt;article class="music"&gt;
&lt;header&gt;
&lt;h2&gt;The Title&lt;/h2&gt;
&lt;address&gt;By &lt;a href="#" rel="author"&gt;the Composer&lt;/a&gt;&lt;/address&gt;
&lt;p&gt;Notes about style, etc.&lt;/p&gt;
&lt;/header&gt;
&lt;/article&gt;
Notation

Now to begin on the actual music notation. It will be useful to wrap our notation in a containing element. It's hard to say what will be best in terms of HTML semantics but I'm going to suggest the &lt;figure&gt; tag for now.

&lt;article class="music"&gt;
&lt;header&gt;
&lt;h2&gt;The Title&lt;/h2&gt;
&lt;address&gt;By &lt;a href="#" rel="author"&gt;the Composer&lt;/a&gt;&lt;/address&gt;
&lt;p&gt;Notes about style, etc.&lt;/p&gt;
&lt;/header&gt;
&lt;figure class="notation"&gt;

&lt;/figure&gt;
&lt;/article&gt;

The stave is a series of horizontal lines which each hold content. We could approach this by creating horizontal container elements with the notes within them, something like paragraphs &lt;p&gt; or an ordered list &lt;ol&gt;. However, this is not how the music actually works semantically. Music is not written or read from top to bottom, a line at a time, all the highest notes, then all the next note down, etc. It's different from text content. Music notation is written and read from left to right, in a timeline, with several notes able to occur together. Therefore, we need to find a way of flowing our content from left to right.
Bars and Beats

In terms of time units, the music can be broken down into bars. Beyond that we may be able to break it down further into beats within the bar. So, in terms of HTML, maybe something like:

&lt;figure class="notation"&gt;
&lt;div class="bar&gt;
&lt;div class="beat"&gt;

&lt;/div&gt;
&lt;/div&gt;
&lt;/figure&gt;

I've stuck with &lt;div&gt; tags for now as these are just containers for inner content but there may be a better alternative.

Looking at the styling for a moment, we could use "display:inline-block" on both bars and beats so that they flow left to right and wrap gracefully onto new lines as required by the page, article or section width.

div.bar, div.beat
{
display:inline-block;
}

So far so good. Now for the difficult part, the stave and the notes.
Notes

I imagine that the easiest way to handle the visual representation of the various note types will be to use a special font, an icon font with characters for all the various note representations. The character or symbol used will denote the length of the note. For the pitch we need to position it on (or above or below) the stave.

Alternatively, should the notes be more semantic, with each note element containing the information on its length and pitch so that it still has meaning without a specific font or CSS? I'm thinking of something more like:

&lt;note pitch="c1" length="0.5"&gt;

In existing HTML, we'd need to do something like:

&lt;span class="note" data-pitch="c1" data-length="0.5"&gt;&lt;/span&gt;

Perhaps chords could be handled in a similar way:

&lt;span class="chord" data-pitch="c1,e1,g1" data-length="2"&gt;&lt;/span&gt;

This would then need to be transformed to be represented correctly but I feel we should be able to do this with CSS.
The Stave and Positioning the Notes

Do we treat the stave as a background image and position the notes (characters) on top of it? I'm not sure this is right semantically. By default, the background image would not print. Maybe the stave needs to be a key part of the content rather than a mere background?

In terms of positioning the notes, we need their vertical position or y-position to reflect their pitch and then we need them to appear in source order, left to right, within their beat.

Thinking about the CSS, I don't think can can absolutely position every note or chord as this would lose our natural left to right flow, not to mention all the extra markup. We might be able to set the notes' vertical position using margin-top or margin-bottom? If we use margin-bottom from the bottom of the beat container then the higher the value the higher the note, which makes more sense to me than the reverse. We could even use negative values where notes move outside of the 'normal' range.

For example, if each note character has a height of 12px and each line of the stave is 12px apart then the notes can placed on or between lines by giving them margin-bottom in intervals of 6px.