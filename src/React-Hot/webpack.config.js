var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './yqf/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'yqf/js')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
