const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        index: './index_html2pdf.js'        
    }

    , output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    , module: {
        rules: [
            {// first rule
                test: /\.js$/, // check for files that end with .js
                exclude: /node_modules/, //dont check here
                use: { loader: 'babel-loader' }// use these to process matched files
            }
        ]
    }
}