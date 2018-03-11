const Path  = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: `[name].js`,
        path: Path.resolve(__dirname , './production'),
        publicPath: './production'
    },
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]?[hash]'
                }
            }
        ]
    },    
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}