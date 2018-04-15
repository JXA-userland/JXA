var TextEdit = Application("TextEdit");
var appName: string = TextEdit.name();
TextEdit.includeStandardAdditions = true; // 標準コマンドを使用可能にする
TextEdit.displayAlert(appName); // アラートダイアログに表示する
