const { merge } = require("webpack-merge");
const common = require("./webpack.config.js")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: "./src",
        hot: true
    },
    watchOptions: {
        poll: 500
    },
    devtool: "inline-source-map"
})