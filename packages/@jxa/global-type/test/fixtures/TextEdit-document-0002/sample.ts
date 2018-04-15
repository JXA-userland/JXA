var TextEdit = Application("TextEdit");
var n = TextEdit.documents.length; // ドキュメント数を取得する
TextEdit.includeStandardAdditions = true; // 標準コマンドを使用可能にする
TextEdit.displayAlert(n.toString()); // アラートダイアログを表示する
