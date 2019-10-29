var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents; // ドキュメントを取得する
var docLength:number = doc.length; // ドキュメントの総数を取得する
AI.includeStandardAdditions = true;
AI.displayDialog(docLength.toString());
