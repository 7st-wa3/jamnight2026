const path = require("path");

module.exports = {
  // モード: 'development' (開発用) か 'production' (圧縮される本番用)
  mode: "production",
  // エントリポイント（まとめ始めるファイル）
  entry: "./js/app.js",
  // 出力設定
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "app.js",
  },
};
