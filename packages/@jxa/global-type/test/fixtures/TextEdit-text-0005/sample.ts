var TextEdit = Application("TextEdit");
var doc = TextEdit.documents[0]; //　ドキュメントオブジェクトを取得する
for (var i = 0; i < doc.text.paragraphs.length; i++) {
    // 段落の数だけ繰り返す
    doc.text.paragraphs[i].characters[0].size = 24; // 段落の先頭の文字サイズを指定する
}
