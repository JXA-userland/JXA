var AI = Application("Adobe Illustrator CC 2014");
var doc = AI.documents[0];	// ドキュメントを取得する
var text = doc.textFrames[0].contents();	// 最初のテキストフレームの内容を読み出す
AI.includeStandardAdditions = true;	// 標準コマンドを使用可能にする
AI.displayAlert(text);	// アラートダイアログを表示する
