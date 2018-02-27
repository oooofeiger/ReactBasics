var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry:'./src/js/index.js',
	module:{
		rules:[
			{
				test:/\.js?$/,
				exclude:path.resolve(__dirname,'./node_modules/'),
				use:
				[
					{
						loader:'babel-loader',
						options:{presets:['react','env']}
					}
				]
				// loader:'babel-loader',
				// query:{
				// 	presets:['react','env']
				// }
			}
		]
	},
	output:{
		path:__dirname+'/src/',
		filename:'bundle.js'
	}
}