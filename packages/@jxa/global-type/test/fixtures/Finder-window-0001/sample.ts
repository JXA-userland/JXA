var Finder = Application("Finder");
var win = Finder.windows; // ウィンドウを全て取得する
var n = win.length; // ウィンドウの総数を取得する
Finder.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Finder.displayAlert(n.toString()); // アラートダイアログを表示する
