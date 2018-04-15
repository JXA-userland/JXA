"use strict";
var Safari = Application("Safari");
var doc = Safari.documents; // ドキュメントを取得する
var url = doc[0].url(); // ドキュメントのURLを取得する
Safari.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Safari.displayAlert(url); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map