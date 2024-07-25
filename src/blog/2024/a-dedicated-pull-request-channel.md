---
layout: "layouts/blog.njk"
title: "A dedicated pull request channel"
date: 2024-07-25 14:10:00
description: "During our latest restructure I was keen to trial the idea of a dedicated channel for pull requests."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "A dedicated pull request channel"
---

As often happens in tech, our company was acquired by a bigger company. Previously we were very much all Microsoft but we've transitioned to Google. This included moving from Teams to Slack and then to Google Chat.

I don't really have any strong opinion on these tools. I think they're all much the same and all do a good job. What I find more interesting is that the act of migrating from one to another means an opportunity to rethink and reorganise teams/channels/spaces. I'll just use the Slack term "channels" going forward.

## Reset

In my experience, channel membership grows over time. Gradually, more and more colleagues peripheral to the core channel membership get added as the need arises but then never leave again. I've found myself joining more and more channels where I have little to no day to day involvement. A reset is healthy.

During our latest restructure I was keen to trial the idea of a dedicated channel for pull requests. This was to keep them separate from the day to day chat. My original thinking was just to reduce the noise in our chat so that if anyone asked a question it would get the attention is deserved and not get lost in the fog. It turns out it was far more useful than that.

## Automated posts

We use webhooks from Azure DevOps (not Google yet) to automatically post updates to the channel. So, every time a new pull request is generated in Azure DevOps a new thread is created in the channel. Furthermore, when it is completed a reply to the same thread appears in the channel.

This automation has saved us a lot of time in manually copying and pasting links to pull requests and asking our colleagues to look at them. As something is ready it posts to the channel, triggering a notification. Now, most of our pull requests are jumped on quickly, which further reduces delays.
