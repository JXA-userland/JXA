var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents; // ドキュメントを取得する
var tf = doc[0].textFrames; // テキストフレームを取得する
var docLength:number = tf.length; // テキストフレームの総数を求める
AI.includeStandardAdditions = true;
AI.displayDialog(docLength.toString());
