---
layout: "layouts/blog.njk"
title: "What to Validate on a Form"
date: 2023-10-27 14:30:00
description: "We all know that validating user input is a good idea but how do you decide on what rules to apply?"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "What to Validate on a Form"
---

We all know that validating user input is a good idea but how do you decide on what rules to apply?

## What are the aims of validation?

- Protecting us against any malicious input.
- Protecting the system's data integrity.
- Protecting the user against data entry mistakes.
- Protecting our UI against things we're not able to output.

## What can we do?

We can limit the data type by applying the appropriate input type attribute - number, date, email, url, etc. That will constrain the data to only the type expected. It may also help with input by bringing up the appropriate on screen keyboard.

`<input type="email">`

We can constrain length or range with attributes like min, max, maxlength, minlength.

`<input type="number" min="0" max="100">`

We can do pattern matching, using regex to only accept certain string formats.

`<input type="text" pattern="^[a-zA-Z0-9]$">`

## What should we do?

This is the harder question.

### Security

Firstly, let's think about security and protecting against malicious intentions. We can use pattern matching to restrict the characters entered to only those that are needed. For example, a phone number field can be restricted to numbers and, if you're feeling generous, spaces, brackets and dashes. We should work out what characters are needed and use regex to only allow those.

The main thing to remember from a security point of view is to do this validation on the server as the front end can be bypassed. It's here for convenience, not security. It's the smiley person opening the door for guests, not the mean looking security guard.

### Constraints

Thinking about the other considerations, let's set sensible minimum and maximum sizes on things.

How long or short can a phone number really be? If they're putting in something that's 30 digits long then chances are they've accidentally pasted it twice, or are copying the wrong number from something else.

What's a reasonable length for a first name? Surely there comes a point, when it gets really long, when they have a shorter form they can use?

How far into the future can a date be set? Is there ever any point in setting something more than 30 years ahead? What are the chances of this system being around then and this data still being relevant?

There's a skill to making sure things aren't too open but not so closed as to cause a problem with genuine data.

### Ask for the right things

Also, think about the tone and how the data will be used. If you put "First name" as your label you might get a different, more formal value than if you use "What shall we call you?".

Another option is to use warning prompts rather than an absolute pass or fail. If a name is long, you can prompt "That's a long name. Is there a shorter version you prefer to use?". Or you could reveal a second input for a nickname or short name. That way you can accept the long form if they prefer but you're reducing the risk of handling something you might have to output ungracefully with ellipsis later.

We can use JavaScript to listen for the invalid event and reveal an alternative input.

### Tell them what you expect

Asking someone to input some data without any instructions and then telling them off for doing it wrong is just rude. Give them hints with placeholders or some help text. As well as not annoying users it makes data entry much quicker.
