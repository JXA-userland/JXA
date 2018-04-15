"use strict";
var Fx = Application("Firefox");
var appName = Fx.name(); // アプリケーション名を取得する
Fx.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Fx.displayAlert(appName); // アラートダイアログを表示する
//# sourceMappingURL=sample.js.map