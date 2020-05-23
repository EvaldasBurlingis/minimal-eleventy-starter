module.exports = eleventyConfig => {

  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))

  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  // Include our static assets
  eleventyConfig.addPassthroughCopy("site/css")
  eleventyConfig.addPassthroughCopy("site/js")
  eleventyConfig.addPassthroughCopy("site/images")
  eleventyConfig.addPassthroughCopy("site/robots.txt")

  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passtroughFileCopy: true,

    dir: {
      input: 'site',
      output: 'dist',
      includes: 'includes',
      data: 'globals'
    }
  }
}