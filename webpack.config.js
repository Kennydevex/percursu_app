// webpack.config.js
var path = require('path')
// var webpack = require('webpack')
require('webpack')
module.exports = {
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    rules: [
        {
            test: /\.s(c|a)ss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    // Requires sass-loader@^7.0.0
                    options: {
                        implementation: require('sass'),
                        fiber: require('fibers'),
                        indentedSyntax: true // optional
                    }
                }
            ]
        }
    ]
}