import webpack from 'webpack';
import path from 'path';



export default {

  debug: true,

  devtool: 'inline-source-map',

  noInfo: false,

  entry: [

    path.resolve(__dirname, 'srs/index')

  ],

  target: 'web',

  output: {

    path: path.resolve(__dirname, 'srs'),

    publicPath: '/',

    filename: 'bundle.js'

  },

  plugins: [],

  module: {

    loaders: [

      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},

      {test: /\.css$/, loaders: ['style','css']}

    ]

  }

}