const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");
const context = path.resolve(__dirname);

process.traceDeprecation = true; //https://github.com/webpack/loader-utils/issues/56

module.exports = {
	entry: [
		"react-hot-loader/patch",
		"webpack-hot-middleware/client",
		path.join(__dirname, "src/js/main.jsx")
	],

	output: {
		path: path.join(__dirname, "build/js/"),
		filename: "bundle.js",
		publicPath: "/js/"
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],

	resolve: {
		modules: [path.resolve(__dirname), path.resolve(__dirname, "node_modules")],

		alias: {
			js: path.resolve(__dirname, "src", "js")
		},

		extensions: [".js", ".jsx", ".css", ".scss"]
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "node_modules", "react-icons")
				],

				use: [
					{
						loader: "react-hot-loader/webpack"
					},
					{
						loader: "babel-loader",
						options: {
							presets: ["es2015", "es2016", "es2017", "react"],
							plugins: [
								"transform-object-rest-spread",
								"transform-class-properties",
								[
									"react-css-modules",
									{
										filetypes: {
											".scss": {
												syntax: "postcss-scss"
											}
										},
										context: context,
										webpackHotModuleReloading: true
									}
								]
							]
						}
					}
				]
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, "src")],

				use: [
					{
						loader: "style-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: true,
							localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
						}
					}
				]
			},
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, "src")],

				use: [
					{
						loader: "style-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: true,
							localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
						}
					},
					{
						loader: "resolve-url-loader"
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
};
