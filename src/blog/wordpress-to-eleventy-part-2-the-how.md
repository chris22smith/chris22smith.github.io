---
layout: "layouts/blog.njk"
title: "WordPress to Eleventy - Part 2, The How"
date: 2023-06-18 14:00:01
description: "For years my personal website used WordPress, now it's using Eleventy and this is how I migrated it"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "WordPress to Eleventy - Part 2, The How"
---

Having made the decision to migrate my site from [WordPress](https://en-gb.wordpress.org/) to [Eleventy](https://www.11ty.dev/), actually getting into it was quite daunting. In fact, I put off doing it for a few months. I'm not going to lie, it was a bit of work, but not too bad. I mean, I'd do it again.

## Exporting from WordPress

This was probably the easiest part. WordPress makes it nice and easy to get your data out. You can do it through a number of plugins or from the database direct. My hosting plan had a control panel with the MySql database with easy export options. I had a choice of exporting to JSON, XML, CSV, all sorts. Not really knowing what I was doing yet, I grabbed an export in every format, just in case. You only need JSON. It gives you a bit array of post objects.

## New Eleventy site

### Eleventy and GitHub

I created a new GitHub repo and following the excellent Eleventy docs installed a new instance of Eleventy with npm. Running it via the command line gets you to a static page quite quickly and easily. You can then start playing with the underlying HTML, add CSS and, by reading more of the docs, start adding some more functionality like loops or repeated templates. It's really not hard to use and so flexible with interchangable syntax across templating languages.

### Netlify

For hosting I used Netlify. I've used it before for a static site and it's superb. It's free, which is always a winner. Following documentation across Eleventy and Netlify it was quite simple to set up a new site, point it at the GitHub repo (giving it permissions) and have it all set to deploy whenever the repo changes. So, now I make changes on my local machine, push them in GitHub desktop and they're live within about 30 seconds.

## Importing into Eleventy

With the site all set up and a basic template in place, I now needed to restore my old posts. I had two options here - either manually copy the text from the JSON into new HTML files or find a way of looping through the JSON and transforming each post into a new file. I decided to do both. Thinking that the transform might be hard and take time I thought that if I could manually copy the last few posts then it would allow me to get the site up as quickly as possible. I could then backfill the others at my leisure. Pressure off. So, I manually copied 5 posts, built it all, pushed to GitHub and it went live.

### Data cleansing

Working with the WordPress data export had some challenges, maybe some that I would not have faced if I'd used an export plugin with more options. One challenge was that it not only had an object for each post but also each post revision, so every time I made a change to a post it would have both full versions in the data. Making a new working copy of the JSON, I had to manually trawl through the posts and where there was duplicated content, remove all but the most recent version.

Another issue was the content type. It created a record for each image attachment and also for any static pages that weren't posts. More manual tidying up.

Finally, it also contained posts that weren't actually ever published, all the drafts. I removed these too leaving a slimmed down JSON file with just my actual posts. I suspect that filtering out these records might have been an option in a better export tool.

## Creating the posts

This would have been hard, for me at least, if it wasn't for this amazing post by Heydon Pickering.

[From WordPress to Eleventy with Ease](https://heydonworks.com/article/wordpress-to-eleventy/)

Heydon created a node script that uses the json-to-frontmatter-markdown package to transform the WordPress post data JSON into frontmatter plus markdown.

I tried running it and got errors but the error messages were helpful and I was gradually able to fix minor data errors, usually things missing or unusual syntax in the JSON. After a few goes it worked and filled my target folder with new files. Yay! But, it wasn't quite right. No problem. It's easy to just empty out the folder, make tweaks to the script and run it again. After a few more goes I got what I wanted and had lots of markdown files with just the right frontmatter and content.

## Tidying up

On publishing the posts locally, there were still issues - odd bits of formatting not handled quite right by markdown, broken links, missing images, the wrong kind of quote marks. But now these could be fixed in the markdown files rather than the JSON. And once you've found an issue you can search for other occurrences and fix those too.

As you can see, the majority of the work is not really technical, it's more about having the data in good shape and looking out for things that are not quite as expected.

## New content

So, now I write new posts in markdown, in VS Code (that's what I'm doing right now), edit the frontmatter, push changes and the post is live.

## Why?

So, why did I decide to move from one to the other? I've covered that in a separate post.
[WordPress to Eleventy - Part 1, The Why](../wordpress-to-eleventy-part-1-the-why)
