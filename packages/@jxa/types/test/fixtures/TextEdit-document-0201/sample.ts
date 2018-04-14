var TextEdit = Application("TextEdit");
var doc = TextEdit.documents[0]; // 最初のドキュメントを対象にする
var txt: string = doc.text(); // 文章全体を読み出す
TextEdit.includeStandardAdditions = true; // 標準コマンドを使用可能にする
TextEdit.displayAlert(txt); // アラートダイアログを表示する
