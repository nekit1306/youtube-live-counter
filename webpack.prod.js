/**
 * Created by Kasutaja on 07.03.2017.
 */
/**
 * Created by Kasutaja on 07.03.2017.
 */
var poststylus = require('poststylus');
var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'source-maps',
    entry: './src/index.js',
    output: { path: __dirname + '/public', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                stylus: {
                    use: [poststylus([ 'autoprefixer' ])]
                }
            }
        })
    ],

    devServer: {
        contentBase: './public',
        inline: true,
        historyApiFallback: true
    }
};
