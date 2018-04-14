var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents[0];	// ドキュメントを取得する
doc.textFrames[0].contents = "JXA!";	// 最初のテキストフレームの内容を書き換える
