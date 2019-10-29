var InD = Application("Adobe InDesign CC 2014");
var doc = InD.documents; // ドキュメントを取得する
var docLength:number = doc.length; // ドキュメントの総数を取得する
InD.includeStandardAdditions = true;
InD.displayDialog(docLength.toString());
