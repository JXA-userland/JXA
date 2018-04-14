var Mail = Application("Mail");
// メール本体を生成
var sendMsg = Mail.OutgoingMessage({
	subject : "test mail",	// サブジェクト（題名）
	content : "テストメールです",	// 本文
	visible : true	// 表示
});
// 送信先を用意
Mail.outgoingMessages.push(sendMsg);	// ウィンドウを表示
var rec = Mail.ToRecipient({
	address : "openspc@alpha.ocn.ne.jp"	// 送信先を指定
});
sendMsg.toRecipients.push(rec);	// 宛先を追加
