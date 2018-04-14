var Finder = Application("Finder");
var win = Finder.windows;	// 情報ウィンドウを全て取得する
var id = win[0].id();	// ウィンドウのIDを取得する
Finder.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
Finder.displayAlert(id.toString());	// アラートダイアログを表示する
