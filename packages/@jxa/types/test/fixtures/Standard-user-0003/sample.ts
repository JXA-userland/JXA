var sys = Application("System Events");
var name = sys.users[0].name();	// ユーザー名を取得
var app = Application.currentApplication();	// 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
app.displayDialog(name);
