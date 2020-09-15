const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/emiliano/Desktop/projects/myntelligence_website/.docz/.cache/dev-404-page.js"))),
  "component---src-components-featured-platform-featured-platform-mdx": hot(preferDefault(require("/Users/emiliano/Desktop/projects/myntelligence_website/src/components/FeaturedPlatform/FeaturedPlatform.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/emiliano/Desktop/projects/myntelligence_website/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/emiliano/Desktop/projects/myntelligence_website/.docz/src/pages/404.js")))
}

