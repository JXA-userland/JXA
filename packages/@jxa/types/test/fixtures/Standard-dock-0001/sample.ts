var sys = Application("System Events");
var dock = sys.dockPreferences();	// ドックの情報を取得
var flag = dock.autohide();	// ドックが自動的に隠されるかどうか
var app = Application.currentApplication();	// 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
app.displayDialog(flag.toString());
