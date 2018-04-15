"use strict";
var Safari = Application("Safari");
var ver = Safari.version(); // バージョンを取得する
Safari.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Safari.displayAlert(ver); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map