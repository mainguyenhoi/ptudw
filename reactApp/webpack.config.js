const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'production';

module.exports = {

    entry: ['./src/index.tsx'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".js", ".jsx", ".json", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s*)css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     loader: "source-map-loader",
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader?name=[name].[ext]',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            title: 'test',
            // template: 'src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        open: 'chrome',
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        hot: true,
    },
    optimization: {
        splitChunks: { chunks: 'all' },
        // minimizer: [new CssMinimizerPlugin()],

    },
};
