const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js", // エントリーポイント
  output: {
    path: path.resolve(__dirname, "build"), // 出力先ディレクトリ
    filename: "server.js", // 出力ファイル名
  },
  target: "node", // Node.js 実行環境用
  externals: [nodeExternals()], // node_modules をバンドルから除外
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"), // contentBase を static に変更
    compress: true,
    port: 9001,
  },
};
