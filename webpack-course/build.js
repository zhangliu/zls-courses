const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

webpack(webpackConfig, (err, stats) => {
    if (err) console.error('failed!');
    else console.log('done!')
})