# jamnight2026

jamnight2026のMT化に使うCSSの作成用

====================================
HGT-2026-v6 は DartSass を活用する形に変更しています。
====================================

★ 最初にこれやって
git config http.postBuffer 524288000

★node_moduleのインストール
npm install を実行
package.jsonをベースに、必要なファイルをインストールします。

sass、pug、js の自動コンパイル監視と、assetフォルダの同期は「$ npm run dev」、ctrl+C で停止

リリース時は「$ npm run build」を実行。（余計なファイルを掃除して出力します）

★ 自動キャッシュごまかし追加
pug コンパイル時に自動で CSS や js の読み込み部分に「?(unixtime)」をつけます。
