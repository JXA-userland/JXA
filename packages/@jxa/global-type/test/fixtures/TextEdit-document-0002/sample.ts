var TextEdit = Application("TextEdit");
var docLength:number = TextEdit.documents.length; // ドキュメント数を取得する
TextEdit.includeStandardAdditions = true; // 標準コマンドを使用可能にする
TextEdit.displayAlert(docLength.toString()); // アラートダイアログを表示する
