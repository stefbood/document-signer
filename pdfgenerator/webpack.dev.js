const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
	template: './index.html'
})

module.exports = {
	entry:{
		// index_html2canvas : './index_html2canvas.js',
		index_jspdf : './index_jspdf.js'
	}
	,output:{
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist')
	}
	,module:{
		rules:[
			{//first rule
				test: /\.js$/, //check for files that end with '.js'
				exclude: /node_modules/, //dont check here
				use: { loader: 'babel-loader'} //use these to process matched files
			}
		]
	}
	,plugins:[
		htmlPlugin,
		new webpack.HotModuleReplacementPlugin()
	]
	,mode: 'development'
	,devtool: 'inline-source-map'
	,devServer:{
		host: 'localhost',
		port: 3000,
		hot:true
	}
}
