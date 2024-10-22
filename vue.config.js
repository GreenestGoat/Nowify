// vue.config.js
module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true, // Enables the minimization
      minimizer: [
        // Use TerserPlugin for JS minification
        new TerserPlugin({
          parallel: true,
        }),
        // Use OptimizeCSSAssetsPlugin for CSS minification
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  }
};