const { resolve } = require('path');
const { ProvidePlugin, optimize} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    }
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
        }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
        }
        }],
        // use style-loader in development
        fallback: 'style-loader'
      }),
    }, {
      test: /\.handlebars$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 100,
        name: './fonts/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        },
        {
          loader: 'image-webpack-loader',
        },
      ],
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        }
      }
    }]
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',
  plugins: [
    new ProvidePlugin({
      Sammy: 'sammy',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      firebase: 'firebase',
  }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    extractSass,
    new optimize.UglifyJsPlugin({
      parallel: 4,
      sourceMap: true
    })
  ]
}