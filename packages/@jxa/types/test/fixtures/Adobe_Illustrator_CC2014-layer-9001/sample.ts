// Illustrator側の処理
var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents[0];	// ドキュメントを取得する
var text = "";
for(var i=0; i<doc.layers.length; i++){
	var name = doc.layers[i].name();	// レイヤー名を読み出す
	text = text + name + "\n";
}
// TextEdit側の処理
var TextEdit = Application("TextEdit");
var teDoc = TextEdit.Document();	// 新規にドキュメントを作成する
TextEdit.documents.push(teDoc);	// 画面に表示する
teDoc.text = text;	// Illustratorのレイヤー名を出力
