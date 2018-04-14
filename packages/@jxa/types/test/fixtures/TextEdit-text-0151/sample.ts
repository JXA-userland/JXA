var TextEdit = Application("TextEdit");
var doc = TextEdit.documents[0]; //　画面に表示する
var c = doc.text.characters[0].color(); // 先頭の文字の色情報を取得する
var r = c.red; // 赤の輝度を読み出す
var g = c.green; // 緑の輝度を読み出す
var b = c.blue; // 青の輝度を読み出す
var txt = r + "\n" + g + "\n" + b;
TextEdit.includeStandardAdditions = true; // 標準コマンドを使用可能にする
TextEdit.displayAlert(txt); // アラートダイアログを表示する
