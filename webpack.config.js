// Filename:	webpack.config.js
// Description:	The Webpack configuration file for the Login application
//				page.

const webpack = require('webpack');


module.exports = {
	entry: './scripts/main.js',
	output: {
		path: './',
		publicPath: '/scripts/',
		filename: 'index.js',
	},
	devServer: {
		inline: true,
		port: 8080
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.scss/,
			loaders: ['style', 'css', 'sass'],
		},
		{
			test: /\.html/,
			loader: 'html',
		}]
	},
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	}
}