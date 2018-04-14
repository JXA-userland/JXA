var TextEdit = Application("TextEdit");
var doc = TextEdit.Document(); // 新規にドキュメントを作成
TextEdit.documents.push(doc); //　画面に表示する
doc.text = "JavaScript\nサンプル\nです。"; // 文字を出力する
doc.text.size = 24;
doc.text.characters[3].size = 12;
