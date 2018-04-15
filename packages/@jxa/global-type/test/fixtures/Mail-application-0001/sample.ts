var Mail = Application("Mail");
var ver = Mail.version(); // バージョンを取得
Mail.includeStandardAdditions = true;
Mail.displayDialog(ver.toString());
