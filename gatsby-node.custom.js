const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        public: path.resolve(__dirname, '../public'),
        components: path.resolve(__dirname, '../src/components'),
      },
    },
  })
}
