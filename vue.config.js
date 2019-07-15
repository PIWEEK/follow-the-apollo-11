module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/follow-the-apollo-11/'
    : '/',
  pwa: {
    name: 'Follow the Apollo 11',
    manifestPath: 'manifest.json',
    themeColor: '#ff2d58',
    msTileColor: '#000000'
  }
}
