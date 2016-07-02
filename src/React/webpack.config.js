module.exports = {
    //devtool: 'eval',
    //entry: [
    //  'webpack-dev-server/client?http://localhost:3000',
    //  'webpack/hot/only-dev-server',
    //  './mui/index.jsx'
    //],
  //  entry: './mui/index.jsx',
    output: {
        filename: 'bundle.js'
    },
  //  plugins: [
  //new webpack.HotModuleReplacementPlugin()
  //  ],
    module: {
        loaders: [
          {
              test: /\.js[x]?$/,
              exclude: '/node_modules/',
              //  loader: 'babel',
              loaders: ['react-hot', 'babel'],
          },
        ]
    }
};
