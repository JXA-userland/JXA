var TextEdit = Application("TextEdit");
var doc = TextEdit.Document(); // 新規にドキュメントを作成
TextEdit.documents.push(doc); //　画面に表示する
doc.text = "MacをJavaScriptで制御できます。"; // 文字を出力する
