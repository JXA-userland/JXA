var sys = Application("System Events");
var docLength:number = sys.users.length; // ユーザー数・アカウント数を取得
var app = Application.currentApplication(); // 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
app.displayDialog(docLength.toString());
