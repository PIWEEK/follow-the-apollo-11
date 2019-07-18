module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/follow-the-apollo-11/'
    : '/',
  pwa: {
    name: 'El viaje del Apolo',
    manifestPath: 'manifest.json',
    themeColor: '#050e2397',
    msTileColor: '#050e2397'
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
