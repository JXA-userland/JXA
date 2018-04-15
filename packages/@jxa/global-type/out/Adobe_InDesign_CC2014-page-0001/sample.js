"use strict";
var InD = Application("Adobe Indesign CC 2014");
var doc = InD.documents[0]; // ドキュメントを取得する
var n = doc.pages.length; // 総ページ数を取得する
InD.includeStandardAdditions = true;
InD.displayDialog(n.toString());
//# sourceMappingURL=sample.js.map