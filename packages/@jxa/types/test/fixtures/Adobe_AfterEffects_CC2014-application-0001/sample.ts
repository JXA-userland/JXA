var AE = Application("Adobe After Effects CC 2014");
var ver = AE.version();	// バージョンを取得する
AE.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
AE.displayAlert(ver);	// アラートダイアログを表示する
