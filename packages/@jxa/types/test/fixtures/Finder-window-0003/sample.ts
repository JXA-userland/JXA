var Finder = Application("Finder");
var win = Finder.windows;	// 情報ウィンドウを全て取得する
var name = win[0].name();	// ウィンドウの名前を取得する
Finder.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
Finder.displayAlert(name);	// アラートダイアログを表示する
