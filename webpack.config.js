const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "main.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
	],

	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
				exclude: /node_modules/,
			},
		],
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},

	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
};
