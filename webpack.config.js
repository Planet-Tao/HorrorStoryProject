const path = require("path");
const {
    VueLoaderPlugin
} = require("vue-loader/dist/index");



module.exports = {
    mode: "production",
    entry: "./main.ts",
    output: {
        filename: "test.bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['tsx', 'ts', 'js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
            },
            exclude: /node_modules/
        }, {
            test: /\.(css|scss|sass)$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpeg|jpg|gif)$/i,
            type: 'asset/resource'
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    plugins: [new VueLoaderPlugin()]
}