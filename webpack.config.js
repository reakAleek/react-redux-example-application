var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const uglifyjs = new UglifyJsPlugin({
  sourceMap: true,
  uglifyOptions: {
    output: { 
      comments: false
    },
  }
});

const extractText = new ExtractTextPlugin('style.css');

const definePlugin = new webpack.DefinePlugin({
  'process.env':{
    'NODE_ENV': JSON.stringify('production'),
  }
});

module.exports = () => {  
  return {
    plugins: [ extractText, uglifyjs, definePlugin ],
    entry: {
      app: [
        './src/index.js'
      ]
    },
    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: '[name].js',
    },
    // devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                  loader: 'css-loader',
                  options: {
                      // If you are having trouble with urls not resolving add this setting.
                      // See https://github.com/webpack-contrib/css-loader#url
                      url: false,
                      minimize: true,
                      sourceMap: false
                  }
              }, 
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: false
                  }
              }
            ]
          })
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_module/,
          query: {
            presets: ['react', 'es2015'],
            plugins: [
              ['transform-object-rest-spread', { useBuiltIns: true }]
            ]
          }
        },
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test:    /\.html$/,
          exclude: /node_modules/,
          loader:  'file-loader?name=[name].[ext]',
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      inline: true,
      stats: { colors: true },
      port: 3030
    }
  }
};