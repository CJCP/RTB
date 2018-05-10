const path = require('path');

const root = path.resolve();

/**
 *      INPUT / OUTPUT FILES     
 */

const index = root + '/src/index.tsx';
const dist = root + '/public';
const JS = '/js';

module.exports = {
    mode: 'development',
    entry: index,
    output: {
        filename: 'bundle.js',
        path: dist + JS
    },
    devServer: {
        contentBase: dist,
        publicPath: JS,
        port: 3000
    },
    devtool: "source-map",
    module: {
        rules : [{
            test: /\.tsx?$/, loader: "awesome-typescript-loader"
        }]
    }
}