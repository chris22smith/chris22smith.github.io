---
layout: "layouts/blog.njk"
title: "Not enough or too much data"
date: 2024-03-21 16:30:00
description: "One of the most common tasks in front end development is requesting data from an endpoint with JavaScript and then using that data to create items in the HTML"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Not enough or too much data"
---

One of the most common tasks in front end development is requesting data from an endpoint with JavaScript and then using that data to create items in the HTML. A designer will typically think about how the data is presented as cards or list items. A developer will think about iterating through an object array and binding its properties.

This is the happy path where we have a nice amount of data to work with but what about the other cases where we don't have any data or we have more than we can handle? We need to design for these scenarios too.

## No data

There are 2 different types of no data. The first is where we successfully hit our endpoint and get a valid response of no data, typically getting back an empty array. This is the empty state and would typically be the starting point in a lot of apps. You start off with nothing before creating items.

The other is where the network request fails and we're not able to get any data or even know if there is any data to get. This is the error state and needs to be handled.

### Empty state

If there are no items to display we need to explain that to users in a message and maybe prompt them to create their first item. It's much better to handle this properly than just leave a blank space where the items would be. This may leave users wondering if it's just slow to load or broken.

If you're using state, like in React, it's important to set your initial state value to something different to when no data is returned. For example, you might set the initial state to undefined but an empty array when there's no data returned. This difference allows you to handle the display logic in the UI and show the relevant content.

### Error state

When there's an error we need to handle it and let the user know. Leaving a blank space and leaving the user in doubt is not helpful. The important thing is to be clear about what has happened and try to provide useful information and, if possible, something to try to resolve the issue. We can use the error code to try to point towards the nature of the problem - not found, permissions, server error. Is there anything they can try now, e.g. logging in again, refreshing or is it a network issue that might mean trying again in a while. Anything we can give is better than silence.

With state, it might be worth setting the value to null in this scenario, or possibly passing the error details in so they can be used in the UI.

## Too much data (excess)

The opposite of getting no data is getting loads of data and struggling to handle it, either in terms of memory or processing or just it being too much for a user to practically work with. There needs to be a strategy for managing this and sensible limits put in place for how much is downloaded and displayed. It's often better to bring back less data and keep it fast rather than keep the user waiting.

Strategies for handling large volumes of data include paging, windowing and filtering.

## Design for all states

So, when you think about bringing in data, think about these 4 scenarios:

- data
- empty
- error
- excess
