var Finder = Application("Finder");
var selection = [].slice.call(Finder.selection()); // 選択項目を全て取得する
var docLength:number = selection.length; // 選択された項目数を求める
Finder.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Finder.displayAlert(docLength.toString()); // アラートダイアログを表示する
