const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  sassOptions: {
    prependData: '@import "./src/assets/styles/_global.scss";'
  }
}
