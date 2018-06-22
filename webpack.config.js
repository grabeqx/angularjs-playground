var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        vendor: path.join(__dirname, '/src/vendor.js'),     
        main: path.join(__dirname, '/src/main.js')
    },
    output: {
        path: path.join(__dirname, './dist/'),
        publicPath: '/',
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextWebpackPlugin("style.css"),
        new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
        }),
        new ngAnnotatePlugin({
            add: true
        })
    ],
    resolve: {
        extensions : ['.js']
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: 'vendors'
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader'
                })
            },
            {
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 80,
        historyApiFallback: true
    }

}