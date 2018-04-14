var map = Application("マップ");
var name = map.name();	// アプリケーション名を取得する
map.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
map.displayAlert(name);	// アラートダイアログを表示する
