var map = Application("マップ");
var appName:string = map.name(); // アプリケーション名を取得する
map.includeStandardAdditions = true; // 標準コマンドを使用可能にする
map.displayAlert(appName); // アラートダイアログを表示する
