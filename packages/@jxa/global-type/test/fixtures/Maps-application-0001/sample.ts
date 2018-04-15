var map = Application("マップ");
var ver = map.version(); // バージョンを取得する
map.includeStandardAdditions = true; // 標準コマンドを使用可能にする
map.displayAlert(ver); // アラートダイアログを表示する
