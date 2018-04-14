var Fx = Application("Firefox");
var name = Fx.name();	// アプリケーション名を取得する
Fx.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
Fx.displayAlert(name);	// アラートダイアログを表示する
