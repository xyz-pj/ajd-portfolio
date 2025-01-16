const { defineConfig } = require('@vue/cli-service')
module.exports = {
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/ajd-portfolio/' : '/'
}