---
layout: "layouts/blog.njk"
title: "To DOM or Not to DOM?"
date: "2017-10-15 12:00:11"
description: "I'm trying to work out when it's best to put attributes in the DOM and when it's best to just leave them in JavaScript objects"
tags: ["blog","archive"]
eleventyNavigation:
  key: "To DOM or Not to DOM?"
wpid: "670"
---
I'm trying to work out when it's best to put attributes in the DOM and when it's best to just leave them in JavaScript objects. This is going to be hard to explain so bear with me.

Let's suppose we have a list of users on a page. Each user has a number of properties, not things we'd display like name, age and gender but hidden things like permissions, e.g. isAdmin, canComment, isManager, etc. These properties are going to be used in logic to determine how things are displayed on screen - maybe an extra bit of detail or an icon. Just as an example, if canComment is true then a speech bubble icon will appear.

The basic HTML might look something like this:
<pre>&lt;ul&gt;
  &lt;li id="001" class="user"&gt;John&lt;/li&gt;
  &lt;li id="002" class="user"&gt;Paul&lt;/li&gt;
  &lt;li id="003" class="user"&gt;George&lt;/li&gt;
&lt;/ul&gt;
</pre>
Behind this is a JavaScript object, like this:
<pre>var users = [
  {
    id: '001',
    name: 'John',
    canComment: true
  },
  {
    id: '002',
    name: 'Paul',
    canComment: false
  },
  {
    id: '003',
    name: 'George',
    canComment: false
  }
];
</pre>
So, user John is allowed to comment and we want to show an icon. There are 2 approaches:
<ol>
 	<li>
<h3>Use the DOM</h3>
We could add the icon inside each &lt;li&gt; and then add a class (class="user can-edit") or a data-attribute (data-can-edit) to the &lt;li&gt; and use CSS to display it as appropriate, e.g. .user[data-can-edit] .icon { display: inline-block }.</li>
 	<li>
<h3>Use JavaScript</h3>
Or, we could write a JavaScript function to filter the objects to just those with canComment set to true, get their ids, and then loop through the list items adding the icon HTML when the ids match the filtered list.</li>
</ol>
The first approach puts the property into the DOM, puts the icon into the DOM and then uses CSS to show/hide it. It feels easy. The icon is always sat there waiting, like an unchecked checkbox, only shown when needed (checked). There is still logic but it's done up front. The DOM is actually human readable and it's easy to see which users can and can't edit for debugging purposes. I see this approach used a lot, including the hidden DOM elements, usually because of the way templates or components are used. It's easier to include it and pass a property to toggle whether or not it displays. It also means that if we want to change the property during the lifecycle of the page, e.g. take away John's commenting permission, it's minimal change to the DOM.

The second approach only touches the DOM to insert the icon where needed. It does all the logic in JavaScript and the output in the DOM reflects what the user actually sees on screen. There are no hidden elements. This has advantages when it's scaled up, in that it keeps the DOM lighter and there's no waste. The JavaScript is incredibly fast in modern browsers so the functions won't slow anything down, especially if using .filter(), map(), etc. The trick here is not to loop through and add the icons one at a time but to run through building the whole list and just doing the one insert or replace operation. This makes the DOM less readable as all the canComment data is in JavaScript.

So, is it better to use the DOM for data or keep it in JavaScript?

&nbsp;