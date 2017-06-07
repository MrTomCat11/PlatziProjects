const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const nodeModules = fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce(
    (modules, module) => Object.assign(modules, { [module]: `commonjs ${module}` }),
    {}
  );

const config = {
  entry: './source/server.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://javialej-react-sfs.now.sh/'
      : 'http://localhost:3001/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /(node_modules)/,
        enforce: 'pre',
      },
      {
        test: /\.html?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: ['transform-es2015-template-literals'],
          },
        },
        enforce: 'post',
      },
      {
        test: /\.html$/,
        use: 'template-string-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest-minimal', 'react'],
            env: {
              production: {
                plugins: ['transform-regenerator', 'transform-runtime'],
                presets: ['es2015'],
              },
              development: {
                presets: ['latest-minimal'],
              },
            },
          },
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules',
        }),
      },
    ],
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json', '.html'],
  },
  externals: nodeModules,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin('../statics/styles.css'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    })
  );
}

module.exports = config;
