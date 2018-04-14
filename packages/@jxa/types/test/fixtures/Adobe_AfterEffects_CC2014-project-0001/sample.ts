var AE = Application("Adobe After Effects CC 2014");
AE.activate();	// アクティブにする
delay(1);	// アクティブになり切り替わるのを少し待つ
sys = Application("System Events");
sys.keystroke("n", { using : "command down"});	// cmd+Nで新規コンポジション作成
sys.keystroke("Main Comp");	// コンポジション名を入力
sys.keyCode(36);	// returnを入力
sys.keyCode(36);	// returnを入力
