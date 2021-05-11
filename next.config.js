const withCSS = require('@zeit/next-css')
// const withLess = require('@zeit/next-less')

const withImages = require('next-images')

module.exports = withImages(
  // withLess({
  //   cssModules: true,
  //   cssLoaderOptions: {
  //     importLoaders: 1,
  //     localIdentName: "[local]___[hash:base64:5]",
  //   },
  //   lessLoaderOptions: {
  //     javascriptEnabled: true
  //   }
  // })
  {
    env: {
      mongodburl: "mongodb://localhost/SAMarketplace",
    }
  }
)

