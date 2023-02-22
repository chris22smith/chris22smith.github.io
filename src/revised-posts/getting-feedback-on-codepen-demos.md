---
layout: "layouts/blog.njk"
title: "Getting Feedback on Codepen Demos"
date: "2016-05-27 16:55:27"
description: "At the software company where I work, we've started using <a href="http://codepen"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Getting Feedback on Codepen Demos"
wpid: "249"
---
At the software company where I work, we've started using <a href="http://codepen.io" target="_blank">Codepen</a> as a way of producing interactive demos or prototype pages. It's slowly replacing the use of static images or mock-ups. We've started sharing the URLs for these with customers to get their feedback on new features.

This could be done by sending them 2 URLs, one for the pen and one for the feedback form, but it's not as good as being able to complete the form whilst viewing the demo content at the same time. I came up with a way of requesting feedback within the pen.
<h3>SurveyMonkey</h3>
I embedded a <a href="https://www.surveymonkey.com/" target="_blank">SurveyMonkey</a> survey tracking script within the pen. I amended the pen design slightly to add a sidebar div and then added the SurveyMonkey embed JavaScript block within this, in the HTML pane of the pen. The script had to be here so that it rendered in the right place. I gave this sidebar a fixed width so that we could control how the survey contents appeared. We then had to write the survey in such a way that it didn't require much screen width and that all questions would fit into a sensible minimum screen height. In short, we kept questions short, no lists of 10 radio buttons.
<h3>CrazyEgg</h3>
I decided to also embed <a href="http://www.crazyegg.com/" target="_blank">CrazyEgg</a>. If you don't know it, it's a tool that allows you to track mouse clicks. It's a very useful way of knowing which parts of your screen get the most interaction. We added this script into the head content, within the HTML settings. This is a paid service but you can get a free trial for a short time.
<h3>Debug Mode</h3>
The 2 scripts seemed to get blocked when we tried using the pen in Editor or Full Screen modes but Debug mode, which runs the code as it is without any header or validation, worked like a dream. You need a PRO account to use this mode. Well worth it anyway in my view.
<h3>Feedback Ready</h3>
I'm now looking at building this out as a template ready for future feedback gathering.