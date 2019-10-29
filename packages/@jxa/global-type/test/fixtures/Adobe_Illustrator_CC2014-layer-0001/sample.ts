var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents[0]; // ドキュメントを取得する
var lay = doc.layers; // レイヤーオブジェクトを取得する
var docLength:number = lay.length; // レイヤー総数を取得する
AI.includeStandardAdditions = true;
AI.displayDialog(docLength.toString());
