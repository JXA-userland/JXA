var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.documents;	// ドキュメントを取得する
var name = doc[0].name();	// 開かれているドキュメントの名前を取得する
Acrobat.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
Acrobat.displayAlert(name);	// アラートダイアログを表示する
