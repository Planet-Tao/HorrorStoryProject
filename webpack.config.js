module.exports = {
    mode: "development",
    entry: "./main.ts",
    resolve: {
        extensions: ['tsx', 'ts', 'js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}