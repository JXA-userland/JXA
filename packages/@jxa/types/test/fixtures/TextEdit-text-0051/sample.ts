var TextEdit = Application("TextEdit");
var doc = TextEdit.documents[0]; //　画面に表示する
var s = doc.text.characters[0].size();
TextEdit.includeStandardAdditions = true; // 標準コマンドを使用可能にする
TextEdit.displayAlert(s.toString()); // アラートダイアログを表示する
