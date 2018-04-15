"use strict";
var Finder = Application("Finder");
var win = Finder.finderWindows; // ウィンドウを全て取得する
var flag = win[0].statusbarVisible(); // ステータスバーが表示されているか調べる
Finder.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Finder.displayAlert(flag.toString()); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map