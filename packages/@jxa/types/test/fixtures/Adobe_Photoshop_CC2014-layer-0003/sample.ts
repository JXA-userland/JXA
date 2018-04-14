var PS = Application("Adobe Photoshop CC 2014");
var doc = PS.documents[0]; // ドキュメントを取得する
var text = (doc.layers[0].appName = "黒マット"); // レイヤー名を変更する
