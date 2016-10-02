module.exports = {

    // entry: [
    //     'webpack-dev-server/client?http://localhost:8000',
    //     'webpack/hot/only-dev-server',
    //     './src/main.js'
    // ],

    entry: {
      devServerClient: 'webpack-dev-server/client?http://localhost:8000',
      dashboard: ['./src/dashboard.page.js', 'webpack/hot/only-dev-server'],
      catalog: ['./src/catalog.page.js', 'webpack/hot/only-dev-server']
    },

    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8000/static'
    },

    module: {
        loaders: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                loaders: ['react-hot','babel?presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=transform-decorators-legacy']
            }
        ]
    }

}
