var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.documents; // ドキュメントを取得する
var docLength:number = doc.length; // 開かれているドキュメントの総数を取得する
Acrobat.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Acrobat.displayAlert(docLength.toString()); // アラートダイアログを表示する
