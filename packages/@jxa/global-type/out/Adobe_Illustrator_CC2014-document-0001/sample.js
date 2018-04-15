"use strict";
var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents; // ドキュメントを取得する
var n = doc.length; // ドキュメントの総数を取得する
AI.includeStandardAdditions = true;
AI.displayDialog(n.toString());
//# sourceMappingURL=sample.js.map