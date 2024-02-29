---
layout: "layouts/blog.njk"
title: "Print CSS Tips"
date: 2020-01-17 16:00:00
description: "A collection of Print CSS problems and tips, learned the hard way"
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Print CSS Tips"
---

A collection of Print CSS problems and tips, learned the hard way...

A common use of print CSS is for reporting, either printing HTML directly or using a tool to generate a PDF from HTML. HTML being written to PDF will be treated as print media rather than screen.

## Page Breaks

We can control page breaks by setting rules on page elements, setting whether they should break before, after or avoid breaking - keep the content together. These are useful for starting a new section on a new page, keeping headings with their content or keeping related data together on a single page.

Nice simple explanation:
[https://css-tricks.com/almanac/properties/p/page-break/](https://css-tricks.com/almanac/properties/p/page-break/)

The way this works is fairly straightforward but browser support is not consistent and different elements with different display types (e.g. block, inline, table, flex) are treated differently.

Avoid complex layouts like display: grid, display: flex or display: table and use display: block wherever possible. It's worth considering an alternate, simplified, single stack layout for print.

## Tables

Tables generally work as expected but some more advanced formatting can cause problems. If your table has `border-collapse: collapse` set, which means cells are touching and sharing a border rather than spaced out with a gap between, then using rowspan or colspan to merge cells can lead to some of these shared borders going missing when printed.

If you have to use spanning of rows or columns you can manually put borders back in by using CSS pseudo elements. You can create thin inner elements to act as borders, like this example (below) which adds a left border to all but the first cell.

```
th[rowspan] + th[rowspan],
td[rowspan] + td[rowspan] {
    position: relative;
}

th[rowspan] + th[rowspan]:before,
td[rowspan] + td[rowspan]:before {
    border-left: solid 1px #000;
    bottom: 0;
    content: "";
    left: -1px;
    position: absolute;
    top: 0;
    width: 1px;
}
```

## Page Breaks and Tables

It's common for a table to exceed the length of a print page and need to break. If not handled right it can split rows or cells, which looks untidy and makes content difficult to read.

To prevent this we would expect to use `page-break-inside: avoid` on the `tr` or `td` elements but (at the time of writing, Jan 2020) this is not supported in most browsers. It is also not supported on the `thead` or `tbody` elements.

We can also get an almost empty first page. The table content is so long that after the title it moves onto the second page leaving the first page with just the title. The solutions to both these issues are the same.

Page break rules are supported on the table element or by wrapping the table element in a parent div element. So, rather than having lots of rows repeating within a single table we can use multiple tables, grouping rows in smaller tables or even using a new table for each row if absolutely necessary.

Tables which are potentially very long need to dynamically split their content into smaller tables, e.g. table 1: rows 1-10; table 2: rows 11-20, etc.

If you don’t have borders, just using spacing, then you can prevent your content from splitting over the page by wrapping the cell content in a div element, example below.

```
<tr>
  <td>
    <div>your cell content</div>
  </td>
</tr>
```

## Further Reading

This article gives a great explanation of print stylesheets:
[https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)

This article explains fragmentation - handling breaks in pages and columns:
[https://www.smashingmagazine.com/2019/02/css-fragmentation/](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
