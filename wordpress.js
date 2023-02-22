// https://heydonworks.com/article/wordpress-to-eleventy/
// run with 'node wordpress.js'

const transformAndWriteToFile = require("json-to-frontmatter-markdown").default;
const wordpressData = require(__dirname + "/wp-revisions.json");
const slugify = require("slugify");

const posts = wordpressData;

Object.keys(posts).forEach((p, i) => {
  let post = posts[p];
  transformAndWriteToFile({
    frontmatterMarkdown: {
      frontmatter: [
        { layout: "layouts/blog.njk" },
        { title: post.post_title },
        { date: post.post_date },
        {
          description: post.post_content ? post.post_content.split(".")[0] : "",
        },
        { tags: ["blog", "archive"] },
        {
          eleventyNavigation: { key: post.post_title },
        },
        { wpid: post.ID },
      ],
      body:
        post.post_content &&
        post.post_content.replace(
          /http:\/\/chrissmith.xyz\/wp-content\/uploads/g,
          "/img"
        ),
    },
    path: "./src/revised-posts",
    fileName: `${slugify(post.post_title).toLowerCase()}.md`,
  });
});
