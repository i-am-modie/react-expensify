const path = require("path");

module.exports = {
    entry: "./src/app.js",
    mode: "production",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "public"),
        allowedHosts: ["localhost"]
    }
};