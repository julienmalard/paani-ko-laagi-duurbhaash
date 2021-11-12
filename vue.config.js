const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        constants: require.resolve("constants-browserify"),
        assert: require.resolve("assert/"),
        process: require.resolve("process/"),
        fs: false,
      },
    },
  },
};
