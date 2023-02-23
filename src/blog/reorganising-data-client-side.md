---
layout: "layouts/blog.njk"
title: "Reorganising Data Client Side"
date: "2017-03-08 17:50:17"
description: "I just discovered how easy it can be to reorganise data in JavaScript before trying to use it"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Reorganising Data Client Side"
wpid: "555"
---
I just discovered how easy it can be to reorganise data in JavaScript before trying to use it.

I've been working with a third party API so there's no option to change the structure of the JSON which we receive. The data I had was organised by date, an object with object properties giving a new object for each new date. Something like:
<pre>{
  "2017-03-01": {
    "number": 2
  },
  "2017-03-02": {
    "number": 3
  }
}
</pre>
I wanted to bind this data to a list, iterating through it. I know it can be done with a "for in" loop but I was using Angular and wanted to use ng-repeat to iterate over an array. So, what I really wanted was this:
<pre>[
  {
    "date": "2017-03-01",
    "number": 2
  },
  {
    "date": "2017-03-02",
    "number": 3
  }
]  
</pre>
I don't know why but I'd always assumed that running a function to reformat the data would be a bad idea and would take a lot of time. I converted my data to the desired format. It worked. I then went further and actually broke down several of the original object properties into separate arrays. Each object got had its properties pushed into 7 separate arrays.

In my case, looking at a small set of data, under 100 objects, each with around 20 properties, it took about half a millisecond. I timed the reformatting function using console.time(). That's very fast. So fast that it's a no-brainer to reformat the data and have it as you want it. It seems that iterating over object properties and pushing items into arrays or renaming properties is trivial so it makes sense to format the data as soon as it is received.

Here's an example of a reformatting function, which changes a team object with player object properties into a series of arrays:
<pre>function reformatData(team) {
  var data = {
    playerNames: [],
    appearances: [],
    goals: [],
    assists: [],
    redCards: [],
    yellowCards: []
  };
  for (var player in team) {
    if (team.hasOwnProperty(player)) {
      data.playerNames.push(team[player].name);
      data.appearances.push(team[player].appearances);
      data.goals.push(team[player].goals);
      data.assists.push(team[player].assists);
      data.redCards.push(team[player].cards.red);
      data.yellowCards.push(team[player].cards.yellow);
    }
  }
  return data;
}
</pre>
The hasOwnProperty() check means that it will only iterate over the objects <em>own</em> properties, not <em>all</em> properties including those inherited from the object prototype. It's safer and keeps it faster.