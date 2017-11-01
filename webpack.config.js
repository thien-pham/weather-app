// const webpack = require('webpack');
// const myEnv = require('dotenv').config();
// require( 'dotenv' ).config( );
//
// // new webpack.DefinePlugin({
// //     API_KEY: JSON.stringify(myEnv.parsed.API_KEY)
// //   })
//
// exports.APP_KEY = process.env.API_KEY;

require('dotenv').config()
var webpack = require('webpack');

module.exports = {
		new webpack.DefinePlugin({
			API_KEY: JSON.stringify(process.env.API_KEY)
		})
};
