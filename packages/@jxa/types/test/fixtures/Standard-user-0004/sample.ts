var sys = Application("System Events");
var dir = sys.users[0].homeDirectory();	// ホームディレクトリを取得
var app = Application.currentApplication();	// 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
app.displayDialog(dir);
