var Finder = Application("Finder");
var selection = [].slice.call(Finder.selection());	// 選択項目を全て取得する
selection.map(function(item){
	var name = item.nameExtension();	// 選択された項目の拡張子を取得する
	Finder.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
	Finder.displayAlert(name);	// アラートダイアログを表示する
});
