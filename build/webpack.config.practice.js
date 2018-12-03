const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new HTMLPlugin({
        template: path.join(__dirname, 'template.html')
    })
]

const devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    headers: { 'Access-Control-Allow-Origin': '*'},
    historyApiFallback: {
        index: '/public/index.html'
    },
    proxy: {
        '/api': 'http://127.0.0.1:3333',
        '/user': 'http://127.0.0.1:3333'
    },
    hot: true
}

let config = merge(baseConfig, {
    entry: path.join(__dirname, '../practice/index.js'),
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.less/,
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'less-loader'
                    ]
                })
            }
        ]
    },
    devServer,
    // import from vue
    resolve: {
        alias: {
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ])
})

module.exports = config
