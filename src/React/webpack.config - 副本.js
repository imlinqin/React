module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
              test: /\.js[x]?$/,
              exclude: '/node_modules/',
              loader: 'babel',
          },
        ]
    }
};
