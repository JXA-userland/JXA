var AI = Application("Adobe Illustrator CC 2014");
var ver = AI.version();	// バージョンを取得する
AI.includeStandardAdditions = true;
AI.displayDialog(ver);
