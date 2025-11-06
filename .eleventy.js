
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("itemNames", function(itemName, itemBrand) {
    return `<div class="itemNames">
  <div class="item_name">${itemName}</div>
  <div class="item_brand">${itemBrand}</div>
  </div>`;
    });
};