module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    return {
        dir: {
            input: ".", // The root directory for your Eleventy files
            includes: "_includes", // The directory where your includes (like 'base.njk') are located
            // ... other configuration properties
        },
    };
};
