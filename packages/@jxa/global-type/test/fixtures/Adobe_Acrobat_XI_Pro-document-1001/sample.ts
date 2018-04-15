var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.pdfWindows; // ドキュメントを取得する
var n = doc[0].pages.length; // ページ総数を取得する
Acrobat.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Acrobat.displayAlert(n.toString()); // アラートダイアログを表示する
