var pv = Application("プレビュー");
var ver = pv.version(); // バージョンを取得する
var Finder = Application("Finder");
Finder.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Finder.displayAlert(ver); // アラートダイアログを表示する
