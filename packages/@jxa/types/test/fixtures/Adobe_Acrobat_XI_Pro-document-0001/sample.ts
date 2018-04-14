var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.documents;	// ドキュメントを取得する
var n = doc.length;	// 開かれているドキュメントの総数を取得する
Acrobat.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
Acrobat.displayAlert(n.toString());	// アラートダイアログを表示する
