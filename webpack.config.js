const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexFiles = glob.sync(path.join(__dirname, './src/**/*/index.js'));
const indexHtmls = glob.sync(path.join(__dirname, './src/**/*/index.html'));
const pageNames = indexFiles.map((filePath) => filePath.match(/src\/.*\/(.*)\/index\.js$/)[1]);

const mpaConfig = indexFiles.reduce((mpa, indexFilePath, curIndex) => {
  const pageName = indexFilePath.match(/src\/.*\/(.*)\/index\.js$/)[1];
  mpa.entry[pageName] = indexFilePath;

  const plugin = new HtmlWebpackPlugin({
    template: indexHtmls[curIndex],// indexFilePath.replace(/\.js$/, '.html')
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
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-hot-loader/babel')],
              cacheDirectory: true,
              include: path.resolve(__dirname, 'src')
            }
          }
        ]
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