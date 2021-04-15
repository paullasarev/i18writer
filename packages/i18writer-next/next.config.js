const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  // webpack: (config) => {
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: path.join(
  //             __dirname,
  //             'node_modules/ionicons/dist/ionicons/svg'
  //           ),
  //           to: path.join(__dirname, 'public/svg'),
  //         },
  //       ],
  //     })
  //   )
  //   return config
  // },
  pwa: {
    dest: 'public',
    runtimeCaching,
    modifyURLPrefix: {
      '../public': ''
    },
  },
})
