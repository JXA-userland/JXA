var TextEdit = Application("TextEdit");
TextEdit.activate();	// アクティブにする
delay(1);	// アクティブになり切り替わるのを少し待つ
sys = Application("System Events");
sys.keystroke("JavaScript");	// 文字を入力する
sys.keyCode(36);	// returnキーを入力する
sys.keystroke("Sample Program");
