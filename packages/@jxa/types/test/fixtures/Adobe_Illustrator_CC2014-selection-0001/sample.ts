var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents[0];	// ドキュメントを取得する
var sel = doc.selection();	// 選択されたオブジェクトを取得する
var n = sel.length;	// 選択した数を取得する
AI.includeStandardAdditions = true;
AI.displayDialog(n.toString());
