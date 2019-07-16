module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/follow-the-apollo-11/'
    : '/',
  pwa: {
    name: 'Follow the Apollo 11',
    manifestPath: 'manifest.json',
    themeColor: '#ff2d58',
    msTileColor: '#000000'
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
