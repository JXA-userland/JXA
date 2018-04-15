"use strict";
var TextEdit = Application("TextEdit");
var doc = TextEdit.Document(); // 新規にドキュメントを作成
TextEdit.documents.push(doc); //　画面に表示する
doc.text = "JavaScript\nサンプル\nです。"; // 文字を出力する
doc.text.size = 12;
doc.text.paragraphs[0].characters[0].size = 20;
doc.text.paragraphs[1].characters[0].size = 24;
doc.text.paragraphs[2].characters[0].size = 28;
//# sourceMappingURL=sample.js.map