"use strict";
var Fx = Application("Firefox");
var ver = Fx.version(); // バージョンを取得する
Fx.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Fx.displayAlert(ver); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map