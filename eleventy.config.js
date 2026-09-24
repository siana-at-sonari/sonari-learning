module.exports = function (eleventyConfig) {
  ["src/styles.css", "src/main.js", "src/favicon.svg", "src/images", "src/admin"].forEach((p) =>
    eleventyConfig.addPassthroughCopy(p)
  );
  eleventyConfig.ignores.add("src/admin/**");
  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: "njk",
  };
};
