function getProdExternals() {
  return {
    axios: 'axios',
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? getProdExternals() : {},
  },
}
