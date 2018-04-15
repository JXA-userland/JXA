"use strict";
var sys = Application("System Events");
var usr = sys.currentUser().name(); // 現在のユーザーの名前を取得
var app = Application.currentApplication(); // 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
app.displayDialog(usr);
//# sourceMappingURL=sample.js.map