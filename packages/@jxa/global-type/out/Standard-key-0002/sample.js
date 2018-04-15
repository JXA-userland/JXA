"use strict";
var TextEdit = Application("TextEdit");
TextEdit.activate(); // アクティブにする
delay(1); // アクティブになり切り替わるのを少し待つ
sys = Application("System Events");
sys.keystroke("a", { using: "command down" }); // Command+Aを入力
sys.keystroke("p", { using: ["command down", "shift down"] }); // Command+Shift+Pを入力
//# sourceMappingURL=sample.js.map