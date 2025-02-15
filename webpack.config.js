const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js", // エントリーポイント
  output: {
    path: path.resolve(__dirname, "build"), // 出力先ディレクトリ
    filename: "server.js", // 出力ファイル名
    libraryTarget: 'commonjs2',
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
      { // ts-loaderの追加
        test: /\.tsx?$/, // .ts または .tsx ファイルを対象とする
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      { // CSS Loaderの追加
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          } 
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  devServer: {
    static: path.join(__dirname, "build"), // contentBase を static に変更
    compress: true,
    port: 9001, // 9000と重複しないよう別のポート番号を指定
  },
};
