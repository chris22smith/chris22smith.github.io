---
layout: "layouts/blog.njk"
title: "Simplifying dates in JavaScript"
date: 2024-09-04 16:15:00
description: "I've always found working with dates in JavaScript to be a horrible experience but it really doesn't have to be."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Simplifying dates in JavaScript"
---

I've always found working with dates in JavaScript to be a horrible experience but it really doesn't have to be. There's an easy way for most use cases.

JavaScript has a built-in `Date` object with its own constructor function and various methods for getting or setting different parts of the date object or formatting it in different ways. If you need to do more advanced things with manipulating dates then you'll probably have to use this but a lot of the time it's just not needed. Let's look at some of the most common use cases of working with dates and keep it as simple as possible.

## Use case 1: Input a date and submit it

Let's say we've got a form capturing personal details which includes a date of birth input. We can use a native input tag with type set to `"date"`. This will allow typing in the user's browser locale, e.g. `dd/MM/yyyy` format in the UK, `MM/dd/yyyy` in the US, and probably offer a nice UI for picking a date. From the user's point of view it's all as they would expect. Under the hood, the date is captured as a string in `yyyy-MM-dd` format. Sending this string to the server should be recognised as a date and handled appropriately. It can be stored as a string or will get cast to a `DateTime` type.

```
<input type="date" name="dob">
```

## Use case 2: Loading a date

If we stick with the example above but now want to edit the details then first we'll need to load them. If the date was stored as a string then it will load straight in with no additional steps needed.

If it was stored as a `DateTime` type then it will also include some blank time information not needed by the input so we'll need to get rid of that. There are a few ways of doing that but my preference is to slice the string to only the characters needed. Firstly we use the `toISOString()` date method to convert the datetime to ISO format, which starts with `yyyy-MM-dd` then we slice the string to keep only the first 10 characters - the 4 digit year, 2 digit month and 2 digit day plus the 2 delimiting dashes.

```
document.querySelector("input[name=dob]").value = dob.toISOString().slice(0, 10);
```

## Use case 3: Date comparison

If you have dates in a `yyyy-MM-dd` string format then it's easy to compare them as they are already in alphanumeric order. So we can do things like this:

```
const startDate = document.querySelector("input[name=start]");
const endDate = document.querySelector("input[name=end]");
if (startDate.value > endDate.value) {
  // tell the user that the start date can't be after the end date
}
```

Or, as another idea, we could sort a list of people by their date of birth. If we have an array called `people` with objects containing a `dob` property we can do this:

```
const peopleSortedbyDateOfBirth = people.sort((a, b) => a.dob - b.dob);
```

## Conversions

If you need to do something that requires the Date object then it's easy to convert from `yyyy-MM-dd` string to `Date`. The `Date` constructor can take the date string and convert it.

```
const dateOfBirthString = document.querySelector("input[name=dob]").value;
const dateOfBirthAsDate = new Date(dateOfBirthString);
```

And, as we've seen previously, if we have a `Date` object we can get it back into a `yyyy-MM-dd` string by doing this:

```
const dateOfBirthAsDate = new Date(1993, 9, 4); // 4th Oct 1993 - the month is zero indexed
const dateOfBirthString = dateOfBirthAsDate.toISOString().slice(0, 10);
```

If you need to output a date on screen the easiest way is to use the `Intl.DateTimeFormat` object. This allows you to set a preferred language or locale to use. Or, if you leave the locale blank it will use the browser locale, which will probably be right most of the time.

```
const eventDateString = "2024-09-15"; // yyyy-MM-dd
const eventDateAsDate = new Date(eventDate); // converted
const displayDate = new Intl.DateTimeFormat("en-US").format(eventDateAsDate); // 09/15/2024
```

## Tips

My advice would be to work with strings wherever possible. If not strings then the Date object. Keep human formatted dates like '09/15/2024' out of your code and convert between working and display date formats. Strings in the `yyyy-MM-dd` format are easiest for comparison and sorting.
