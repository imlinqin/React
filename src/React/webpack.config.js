module.exports = {

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
    },
        resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
