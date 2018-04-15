var PS = Application("Adobe Photoshop CC 2014");
var doc = PS.documents[0]; // ドキュメントを取得する
var lay = doc.layers; // レイヤーオブジェクトを取得する
var n = lay.length; // レイヤー総数を取得する
PS.includeStandardAdditions = true;
PS.displayDialog(n.toString());
