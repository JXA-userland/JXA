var Acrobat = Application("Adobe Acrobat Pro");
var ver = Acrobat.version(); // バージョンを取得する
Acrobat.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Acrobat.displayAlert(ver); // アラートダイアログを表示する
