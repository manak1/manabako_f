const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  }
}
