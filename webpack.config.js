const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 0,
      minRatio: 0.7,
    }),
    new CompressionPlugin({
      filename: "[path][base].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 0,
      minRatio: 0.7,
    })
  ],
};