module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
