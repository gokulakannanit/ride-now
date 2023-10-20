const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const path = require(`path`);
const zlib = require("zlib");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 0,
      minRatio: 0.7,
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      threshold: 0,
      minRatio: 0.7,
    }),
  ],
};
