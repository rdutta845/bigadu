const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:'./app/index.js',
    output:{
        filename:'main.js',
        path: __dirname + '/dist'
    },
    module: {
        rules:[{
            test:/\.(jsx|js)$/,
            exclude:'/node-modules/',
            use:['babel-loader']
        },
        {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        },
        {
            test:/\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: ['url-loader']
        }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./app/index.html',
          
        })
    ]
}