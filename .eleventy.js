module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
