var InD = Application("Adobe InDesign CC 2014");
var ver = InD.version();	// バージョンを取得する
InD.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
InD.displayAlert(ver);	// アラートダイアログを表示する
