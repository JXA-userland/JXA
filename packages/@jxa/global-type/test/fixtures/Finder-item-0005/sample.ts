var Finder = Application("Finder");
var selection = [].slice.call(Finder.selection()); // 選択項目を全て取得する
selection.map(function(item: any) {
    var flag = item.locked(); // 選択された項目のロック状態を取得する
    var appName: string = item.displayedName(); // 選択された項目名を取得する
    Finder.includeStandardAdditions = true; // 標準コマンドを使用可能にする
    Finder.displayAlert(appName + " : " + flag.toString()); // アラートダイアログを表示する
});
