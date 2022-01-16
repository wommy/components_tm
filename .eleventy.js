const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function(eleventyConfig){
	eleventyConfig.addPassthroughCopy({ '../tailwind/style/*': 'style/' })

	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	
	return {
		// dataTemplateEngine: 'njk',
		// markdownTemplateEngine: 'njk',
		// htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		}
	}
}
