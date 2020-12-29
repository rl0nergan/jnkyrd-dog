const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "jnkyrd dog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "jnkyrd dog", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "http://jnkyrd.dog",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "ryan lonergan",
  authorTwitterAccount: "ryantlonergan",
  // info
  infoTitle: "jnkyrd dog",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "ryan.tlonergan@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/rl0nergan" },
    { name: "twitter", url: "https://twitter.com/ryantlonergan" }
  ]
};
