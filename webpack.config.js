const webpack = require('webpack')

const path = require('path')

const version = require('./package.json').version
var banner = '/**\n' + ' * vue-formly v' + version + '\n' + ' * https://github.com/acacha/adminlte-vue\n' + ' * Released under the MIT License.\n' + ' */\n'

var isProd = (process.env.NODE_ENV === 'production')

var outputFile = 'acacha-adminlte-vue.js'

if (isProd) {
  outputFile = 'acacha-adminlte-vue.min.js'
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: outputFile,
    libraryTarget: 'umd',
    library: 'AcachaAdminlteVue',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: false,
      mangle: false
    }),
    new webpack.BannerPlugin({banner: banner, raw: true})
  ],
  externals: {
    'axios': {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios'
    }
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.vue?$/,
      exclude: /node_modules/,
      loader: 'vue-loader'
    }
    ]
  }
}
