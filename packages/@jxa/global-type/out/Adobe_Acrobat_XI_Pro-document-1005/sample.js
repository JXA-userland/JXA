"use strict";
var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.pdfWindows; // ドキュメントを取得する
var type = doc[0].zoomType(); // 表示方法を取得する
Acrobat.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Acrobat.displayAlert(type.toString()); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map