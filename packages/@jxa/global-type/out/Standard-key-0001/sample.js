"use strict";
var TextEdit = Application("TextEdit");
TextEdit.activate(); // アクティブにする
delay(1); // アクティブになり切り替わるのを少し待つ
sys = Application("System Events");
sys.keystroke("JavaScript Sample"); // 文字を入力
//# sourceMappingURL=sample.js.map