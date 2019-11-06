const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const files = glob.sync(path.join(__dirname, './src/*/index.js'));
const pageNames = files.map((filePath) => filePath.match(/src\/(.*)\/index\.js$/)[1]);
const mpaConfig = files.reduce((mpa, filePath) => {
  const pageName = filePath.match(/src\/(.*)\/index\.js$/)[1];
  mpa.entry[pageName] = filePath;

  const plugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, `src/${pageName}/index.html`),
    filename: `${pageName}.html`,
    // chunks: [pageName],
    excludeChunks: pageNames.filter((page) => page !== pageName),
    inject: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      minifyCSS: true,
      minifyJS: true,
      removeComments: false,
    },
  });
  mpa.htmlWebpackPlugins.push(plugin);

  return mpa;
}, {
  entry: {},
  htmlWebpackPlugins: []
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: mpaConfig.entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ].concat(mpaConfig.htmlWebpackPlugins),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
};