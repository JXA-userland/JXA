var PS = Application("Adobe Photoshop CC 2014");
var ver = PS.version();	// バージョンを取得する
PS.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
PS.displayAlert(ver);	// アラートダイアログを表示する
