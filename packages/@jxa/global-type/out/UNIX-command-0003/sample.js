"use strict";
var app = Application.currentApplication(); // 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
var text = app.doShellScript("cd ~/;pwd");
app.displayDialog(text);
//# sourceMappingURL=sample.js.map