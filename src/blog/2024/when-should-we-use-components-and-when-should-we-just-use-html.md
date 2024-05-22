---
layout: "layouts/blog.njk"
title: "When should we use components and when should we just use HTML?"
date: 2024-05-22 16:30:00
description: "A lot of UI frameworks or design systems include a component library, a series of components that can be dropped into a page to add functionality"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "When should we use components and when should we just use HTML?"
---

A lot of UI frameworks or design systems include a component library. This is a series of components that can be dropped into a page to add functionality.

Sometimes these components are like HTML tags that don't exist yet, e.g. a card, or they add functionality easily without having to write JavaScript, e.g. a number formatter.

There are some components that don't really seem to add any new functionality but just control styling or the arrangement of inner tags. For example, most component libraries have their own button, which is a standard native HTML button but wrapped in another element, basically a fancy named span. What are the pros and cons of doing this and what are the alternatives? Let's assume we're adding the custom element `<my-button>`.

## Pros of using components

- It can come pre-styled. Styling can be baked into the component so either we don't have to think about styling or we have a base style to build upon.

- It can provide some structure to the inner HTML. If we want our button to optionally have an icon, we can control that it is inserted in the correct position, before or after any text with the right spacing.

- We can ensure that the markup is semantically correct and accessible.

- If we want to, we can lock down the styling so that it cannot be overidden. If we use the shadow DOM we can dictate how it looks and that's how it looks.

- It's easier for a developer to pick up and use, not having to worry about precise internal markup and styling. It's just `<my-button>` plus a few attributes.

- If we need to change a component's markup or styling we can do it once and it will update everywhere.

## Cons of using components

- We may be introducing JavaScript and additional complexity where simply writing HTML and CSS would do.

- It needs JavaScript to work at all. So the markup can't be used in a context that does not have JavaScript, like HTML email, whereas straight HTML is much more resilient. The exception to this is if the component auther has added appropriate fallback markup between the tags.

- It's slower. Probably not by much but it's more files to transfer, more script to run. If you handle all page elements in this way it will start to add up.

- If you use a framework it will update at some point and there will be maintenance associated with it.

- Updating a component can have unexpected knock-on effects if we're not aware of everywhere that it is used. Whilst not repeating code is generally good, reuse means more testing when we make changes.

## Alternatives to components

For a simple component like this button example, we could simply use a documentation site or style guide, documenting what HTML and CSS to use.

We could make code snippets available including the full feature set, e.g. icons before and after button text, and the developer can simply copy the full markup removing the parts that are not needed.

Probably not a very popular opinion right now but AI tools like GitHub Copilot can help add the right markup. If a similar block has been used before it can be context aware and keep things consistent with other code in your codebase.

## When to use components

There no right or wrong answer here. There are a few considerations.

It's down to the nature of the project, how much reusability and change we expect and how much we value developer experience compared to user experience.

There's nothing wrong with using components for consistency and ease of development but we need to be wary not to constantly over-engineer very simple pages that could just be HTML.

Are the people writing the frontend UI frontend developers who are comfortable writing HTML and CSS, or are they more backend or full-stackers who would prefer picking elements from an existing library?

Do the page elements require lots of JavaScript to function? If there is no HTML only option this may sway our decision. An encapulated component may be preferable to separate JavaScript which adds functionality.
