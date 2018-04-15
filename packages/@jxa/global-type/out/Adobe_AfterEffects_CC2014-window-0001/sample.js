"use strict";
var AE = Application("Adobe After Effects CC 2014");
var win = AE.windows[0]; // ウィンドウを取得する
var bounds = win.bounds(); // ウィンドウサイズを取得する
var x = bounds.x; // X座標
var y = bounds.y; // Y座標
var w = bounds.width; // 横幅
var h = bounds.height; // 縦幅
var txt = x + "\n" + y + "\n" + w + "\n" + h;
AE.includeStandardAdditions = true; // 標準コマンドを使用可能にする
AE.displayAlert(txt); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map