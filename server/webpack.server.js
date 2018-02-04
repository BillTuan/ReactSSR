const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webNodeExternals()]
};

module.exports = merge(baseConfig, config);
