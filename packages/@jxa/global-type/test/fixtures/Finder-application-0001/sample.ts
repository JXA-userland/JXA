var Finder = Application("Finder");
var version = Finder.version(); // バージョンを取得する
Finder.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Finder.displayAlert(version); // アラートダイアログを表示する
