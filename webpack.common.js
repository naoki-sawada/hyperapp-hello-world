const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputFolder = 'www';

module.exports = {
  entry: path.join(__dirname, 'src/js/app.jsx'),
  output: {
    path: path.join(__dirname, outputFolder),
    filename: 'js/bundle.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, "src/js"),
      "node_modules",
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputFolder]),
    new CopyWebpackPlugin(
      [
        { from: 'src/css', to: 'css' },
        { from: 'src/index.html', to: '.' },
      ], 
      { debug: true }
    ),
  ],
};
