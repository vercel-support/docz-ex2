const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Myntelligence Website',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './src',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/emiliano/Desktop/projects/myntelligence_website/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Myntelligence Website',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/emiliano/Desktop/projects/myntelligence_website',
          templates:
            '/Users/emiliano/Desktop/projects/myntelligence_website/node_modules/docz-core/dist/templates',
          docz: '/Users/emiliano/Desktop/projects/myntelligence_website/.docz',
          cache:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/.cache',
          app:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/app',
          appPackageJson:
            '/Users/emiliano/Desktop/projects/myntelligence_website/package.json',
          appTsConfig:
            '/Users/emiliano/Desktop/projects/myntelligence_website/tsconfig.json',
          gatsbyConfig:
            '/Users/emiliano/Desktop/projects/myntelligence_website/gatsby-config.js',
          gatsbyBrowser:
            '/Users/emiliano/Desktop/projects/myntelligence_website/gatsby-browser.js',
          gatsbyNode:
            '/Users/emiliano/Desktop/projects/myntelligence_website/gatsby-node.js',
          gatsbySSR:
            '/Users/emiliano/Desktop/projects/myntelligence_website/gatsby-ssr.js',
          importsJs:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/app/imports.js',
          rootJs:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/app/root.jsx',
          indexJs:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/app/index.jsx',
          indexHtml:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/app/index.html',
          db:
            '/Users/emiliano/Desktop/projects/myntelligence_website/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
