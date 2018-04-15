"use strict";
var TextEdit = Application("TextEdit");
TextEdit.includeStandardAdditions = true;
var desktop = TextEdit.pathTo("desktop", { from: "user domain" }); // デスクトップフォルダの取得
var filepath = Path(desktop + "/sample.txt"); // ファイルパスを指定する
TextEdit.open(filepath); // ファイルを開く
//# sourceMappingURL=sample.js.map