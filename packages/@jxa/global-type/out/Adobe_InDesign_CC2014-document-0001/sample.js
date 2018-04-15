"use strict";
var InD = Application("Adobe InDesign CC 2014");
var doc = InD.documents; // ドキュメントを取得する
var n = doc.length; // ドキュメントの総数を取得する
InD.includeStandardAdditions = true;
InD.displayDialog(n.toString());
//# sourceMappingURL=sample.js.map