---
layout: "layouts/blog.njk"
title: "Making a selected value readable when the text is long"
date: 2024-06-06 16:15:00
description: "If a select list has options with long text, we can see the text when the options are all shown but not after the selection has been made."
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Making a selected value readable when the text is long"
---

If a select list has options with long text, we can see the text when the options are all shown but not after the selection has been made. Let's dig into it and look at possible solutions. It's not too hard but there's no simple one-size-fits-all answer.

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="oNRwyEZ" data-pen-title="Make selected value readable #3 Show full text on hover" data-user="chris22smith" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/chris22smith/pen/oNRwyEZ">
  Make selected value readable #3 Show full text on hover</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## The problem

The native HTML Select element has two states, "open" showing the options and "closed" showing just its value, the selected option.

### Open

In its open or expanded state the user is able to read the option text in full, even if very long. On some devices (typically desktop) the containing box showing the options expands to the width of its contents. If the text width is greater than the device width then it will get cut off but it's improbable that anyone would be writing this much in an option. On other devices (typically mobile) the text is allowed to wrap so is always readable in full.

### Closed

In its closed or collapsed state the text is contained within the Select element and only the portion of the text that fits the element's width is displayed, the rest is cut off.

This is not a problem for screen reader users as the text is read in full. It's a screen display issue.

If the user needs to read the full text they are able to open the Select and view the selected option with full text again but this is not possible when the element is read-only or disabled.

## Solutions

There are a few possible solutions. Which one works better will depend on your feature support and design.

### #1 Allow wrapping

We can change the appearance of the select so that its text is allowed to wrap. This solution is CSS only and doesn't require any JavaScript.

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="rNgwJVE" data-pen-title="Make selected value readable #1 Allow wrapping" data-user="chris22smith" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/chris22smith/pen/rNgwJVE">
  Make selected value readable #1 Allow wrapping</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

```
select {
  appearance: none;
  display: block;
  max-width: 100%;
  white-space: wrap;
}
```

First we add `appearance: none` to remove the default browser agent styling. Unfortunately this also loses the down arrow or caret so we would need to put that back in with CSS. Changing the appearance of the select element does not affect the appearance of the child options.

Adding `display: block` and `max-width: 100%` ensures that the height can vary but the width is constrained so it scales vertically. Finally, adding `white-space: wrap` allows the text to wrap onto a new line as needed.

This ensures that we can always read the selected text. The possible down side is that the select can now have variable height depending on how many lines of text there are, which may cause alignment issues and layout shift. It's generally good practice with forms to stack the controls so this may not be a problem but if you were to use this select in a header with fixed height then it would not work.

### #2 Show the selected option in a separate element

We can stop trying to show the selected value text in the select element and show it in another element instead. We use CSS to make the select so small it doesn't show the text and then use JavaScript to copy its value to another element.

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="wvbempv" data-pen-title="Make selected value readable #2 Show in a separate element" data-user="chris22smith" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/chris22smith/pen/wvbempv">
  Make selected value readable #2 Show in a separate element</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

We can make the select tiny, appearing more like a button, like this:

```
select {
  max-width: 1rem;
  padding: 0 .5rem;
}
```

This select button can then sit on its own or along side the label.

It may be preferable to use `appearance: none` and set everything expicitly for greater cross-browser consistency and to prevent any unexpected results as the default agent's appearance may change slightly over time.

We add an output element immediately after the select and use JavaScript to set its value.

```
const selects = [...document.querySelectorAll("select")];

const setOutputValue = (event) => {
  const output = event.target.nextElementSibling;
  if (output && output.tagName === "OUTPUT") {
    output.value = event.target.value;
  }
};

selects.forEach(s => {
  s.addEventListener("change", setOutputValue);
  const output = s.nextElementSibling;
  if (output && output.tagName === "OUTPUT") {
    output.value = s.value;
  }
});
```

The possible down side with this solution is that the pattern is unfamiliar. It may not be immediately obvious how it works. The output is also of variable height so may cause alignment issues or layout shifts.

### #3 Show the full text on hover

This is very similar to the previous solution in that we create a separate output element to show the full text but this time we only show it when the select element is hovered.

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="gOJRzeL" data-pen-title="Make selected value readable #3 Show full text on hover" data-user="chris22smith" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/chris22smith/pen/gOJRzeL">
  Make selected value readable #3 Show full text on hover</a> by Chris Smith (<a href="https://codepen.io/chris22smith">@chris22smith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

```
form {
  ...
  position: relative;
}

output {
  background-color: #fff;
  border: solid thin currentcolor;
  box-sizing: border-box;
  display: none;
  font-size: smaller;
  inset: auto 1rem;
  padding: .5rem;
  pointer-events: none;
  position: absolute;
  transform: translate(.5rem, -3rem);
  z-index: 1;
}

select:hover + output {
  display: block;
}
```

The form or a container needs to have positioning set. The output is positioned using `position: absolute`, `inset`, `transform` and `z-index` and hidden by default. It is then displayed when the select is hovered. Adding `pointer-events: none` ensures that hovering the output does not interfere with the hovering of the select.

The down side here is that not all devices support hover. So, it can't be relied upon but can be a nice enhancement for devices that do.

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
