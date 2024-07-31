---
layout: "layouts/blog.njk"
title: "Replacing jQuery UI datepicker with HTML date input"
date: 2024-07-31 15:45:00
description: "I'm currently in the process of engineering out jQuery UI datepicker so that we can use native HTML input elements with type of date instead."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Replacing jQuery UI datepicker with HTML date input"
---

We have an ageing web app, 10+ years, which uses jQuery UI datepicker throughout. I'm currently in the process of engineering this out so that we can use native HTML input elements with type of date instead.

## Why bother?

jQuery UI's datepicker dates back to a time before a native date input being a thing. At the time it was a great solution, making a nice picker UI for users. It generates a calendar view with days of the month laid out in weeks, a typical month-to-view.

One of the issues with this now is that the calendar uses links for dates rather than buttons. Not only is this not very semantic and probably not very accessible but it creates the problem of links pointing to # (`href="#"`) and us having to use `event.preventDefault()`. That was common practice at one time but now I think we all recognise that those links should be buttons.

The other issue is just that it's an additional dependency that is not needed and is not being actively updated so it's redundant and at risk of becoming a problem in the future. If we can get rid of jQuery UI then it paves the way for getting rid of jQuery too. There could be a nice performance gain by removing the additional resource loading.

## How they both work

jQuery UI datepicker works by adding the picker functionality on top of an existing text input. This raises the issue of date format. You want to read and write the format in your locale, like dd/mm/yyyy (in the UK) but want to submit the input's data as yyyy-mm-dd (ISO format). They get around this by cleverly bolting on an additional hidden input. So, you edit the visible input with the display format and it gets converted to the submission format in the hidden input.

In our code there's quite a lot of format conversion going on, switching between date formats and we always have to check that data is received and sent as expected.

With the native HTML date input, it's much simpler. The value is set in ISO format (yyyy-mm-dd) and the browser uses the locale to display it as appropriate. So, it comes in and goes out in the universal date format but each user only ever sees their expected format.

## What's involved in switching?

Firstly, remove the datepicker function, which is where the additional functionality gets added. You should be able to find `.datepicker(` in your code. It should now be back to a simple text input. You should still be able to use it as before but you have to type the date in the correct format, and it's not obvious what this will be, probably yyyy-mm-dd, which is odd and not really guessable for users.

Change the input type from `"text"` to `"date"`, or add `type="date"` if there was no type attribute. Text is the default type so it's possible it's been omitted.

If you're very lucky, that's it. It'll now automatically adapt to the user's browser locale and display dates in the correct format. It'll read in the data in the yyyy-mm-dd format and send that out.

## Troubleshooting

If things are not quite as expected you'll need to look at how data is formatted coming in and how it is processed on its way out. Depending on your stack, you may need to set the format in a model or interface and check that there is no conversion when it is received after submission.

You may also need to add CSS for the `input[type=date]` if you only has `input[type=text]` or `.datepicker` previously.

### Very specific ASP.NET MVC use case

This is beyond niche, so I won't be offended if you stop reading, but my particular code used `Html.TextBoxFor()` syntax to add the textbox to the UI. In order to get it to read the value in the correct format I had to swap this out for `Html.EditorFor` which allows more options on the model and then update the model to include this line:

`[DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]`

This, confusingly, doesn't actually set the display format at all but the format of the input's value string.
