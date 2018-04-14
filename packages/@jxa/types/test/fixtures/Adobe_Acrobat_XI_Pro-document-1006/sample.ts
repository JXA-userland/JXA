var Acrobat = Application("Adobe Acrobat Pro");
var doc = Acrobat.pdfWindows;	// ドキュメントを取得する
doc[0].zoomType = "fit page";	// 表示倍率をページにフィットさせる