"use strict";
var TextEdit = Application("TextEdit");
TextEdit.activate(); // アクティブにする
delay(1); // アクティブになり切り替わるのを少し待つ
sys = Application("System Events");
sys.keyCode(126, { using: "command down" }); // ↑を入力
sys.keystroke("2014 Copyright K.F"); // 文字を入力
sys.keyCode(36); // returnを入力
//# sourceMappingURL=sample.js.map