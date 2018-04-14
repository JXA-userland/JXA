var sys = Application("System Events");
var pic = sys.users[0].picturePath();	// ユーザーの画像のパスを取得
var app = Application.currentApplication();	// 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
app.displayDialog(pic);
