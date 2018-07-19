/*Created by SmallFour on 2018/7/2*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }
                    , {
                        loader: "css-loader",
                        options: {
                            module: true,
                            localIdentName: '[local]--[hash:base64:6]'
                        }
                    }, {
                        loader: "sass-loader"
                    },]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{loader: 'url-loader'}]
            }
        ]
    }
};