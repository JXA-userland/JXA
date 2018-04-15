var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.documents; // ドキュメントを取得する
var appName: string = doc[0].name(); // 開かれているドキュメントの名前を取得する
Acrobat.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Acrobat.displayAlert(appName); // アラートダイアログを表示する

Application("test").currentUser();
