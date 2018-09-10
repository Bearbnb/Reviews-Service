var path = require('path');
var webpack = require('webpack');

module.exports = {
   entry: __dirname + '/client/index.jsx',
   output: {
       path: path.resolve(__dirname, 'public'),
       filename: 'bundle.js'
   },
   module: {
       rules: [
           {
               test: [/\.jsx$/],
               loader: 'babel-loader',
               query: {
                   presets: ['@babel/preset-env', '@babel/preset-react']
               }
           }
       ]
   },
};
