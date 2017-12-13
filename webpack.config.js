const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version
const MinifyPlugin = require('babel-minify-webpack-plugin')
const merge = require('webpack-merge')

const banner = '/**\n' + ' * Acacha adminlte-vue ' + version + '\n' + ' * https://github.com/acacha/adminlte-vue\n' + ' * Released under the MIT License.\n' + ' */\n'

const isProd = (process.env.NODE_ENV === 'production')

let outputFile = 'acacha-adminlte-vue.js'
let outputFileNode = 'acacha-adminlte-vue.node.js'

if (isProd) {
  outputFile = 'acacha-adminlte-vue.min.js'
  outputFileNode = 'acacha-adminlte-vue.node.min.js'
}

function getPlugins () {
  const plugins = []

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': process.env.NODE_ENV
    }
  }))

  plugins.push(new webpack.BannerPlugin({banner: banner, raw: true}))

  // Conditionally add plugins for Production builds.
  if (isProd) {
    plugins.push(new MinifyPlugin())
  }

  return plugins
}

const shared = merge([
  {
    entry: './src/index.js',
    plugins: getPlugins(),
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
])

const umdOnly = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: outputFile,
    libraryTarget: 'umd',
    library: 'AcachaAdminlteVue',
    umdNamedDefine: true
  }
}

const umd = merge(shared, umdOnly)

const nodeOnly = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: outputFileNode
  }
}

const node = merge(shared, nodeOnly)

module.exports = [umd, node]
