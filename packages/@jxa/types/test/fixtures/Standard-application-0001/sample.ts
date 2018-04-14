var app = Application.currentApplication(); // 現在実行しているアプリケーションを取得
app.includeStandardAdditions = true;
var appName: string = app.name();
app.displayDialog("JavaScript Sample" + appName);
