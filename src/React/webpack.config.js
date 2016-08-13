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
              
          },{test:/\.css$/,loader:"style-loader!css-loader"},

        ]
    },
        resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
