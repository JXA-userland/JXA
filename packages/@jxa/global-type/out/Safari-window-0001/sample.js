"use strict";
var Safari = Application("Safari");
var win = Safari.windows; // ウィンドウを取得する
var n = win.length; // ウィンドウの総数を取得する
Safari.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Safari.displayAlert(n.toString()); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map