var path = require('path')
var webpack = require('webpack')

//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, './public'),
  //  publicPath: '/public/',
    filename: 'build.js',
      library: "scripts"
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'public': path.resolve(__dirname, './public')
    }
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.handlebars$/,
            loader: "handlebars-loader",
            exclude: /(node_modules|bower_components)/
        },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {

        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
          options: {
             // presets: ["babel-preset-env"]
          }

      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  //devtool: '#eval-source-map'
}

//if (process.env.NODE_ENV === 'production') {
 // module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
      new UglifyJsPlugin({
          uglifyOptions: {ecma: 8}
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
//}
