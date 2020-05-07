const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
});
const hotModulePlugin = new webpack.HotModuleReplacementPlugin();
module.exports = {
    mode: "development",
    entry: {
        index: [
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
            "./src/index.js",
        ],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    plugins: [htmlPlugin, hotModulePlugin],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: { name: "/static/[name].[ext]" },
            },
        ],
    },
    devServer: {
        overlay: true,
        contentBase: path.join(__dirname, "dist"),
    },
    devtool: "cheap-module-eval-source-map",
};
