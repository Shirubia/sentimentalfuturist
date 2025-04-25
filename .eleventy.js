const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy({ "pages/links/img": "assets/img" });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy(".htaccess");

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addGlobalData("now", () => new Date());

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/assets/css/**/*.css",
  });

  // Custom date filter: ISO format for <time datetime="">
  eleventyConfig.addFilter("date", (value, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Date format filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd/LL/yyyy");
  });

  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromISO(dateObj).toFormat("dd/MM/yyyy");
  });

  eleventyConfig.addFilter(
    "readableCreatedDate",
    (value, format = "dd/MM/yyyy") => {
      if (!value) return "Missing date";

      let date;
      if (value instanceof Date) {
        date = DateTime.fromJSDate(value);
      } else if (typeof value === "string") {
        date = DateTime.fromISO(value, { zone: "utc" });
      } else if (typeof value === "number") {
        date = DateTime.fromMillis(value);
      } else {
        return "Unrecognized date format";
      }

      return date.isValid
        ? date.toFormat(format)
        : `Invalid DateTime: ${value}`;
    }
  );

  // Shuffle links
  eleventyConfig.addFilter("shuffle", function (arr) {
    return arr.sort(() => Math.random() - 0.5);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
      // Enable file data such as page.date and page.modifiedTime
      dataTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      templateFormats: ["njk", "html", "md"],
    },
  };
};
