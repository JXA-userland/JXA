var Safari = Application("Safari");
var win = Safari.windows; // ウィンドウを取得する
var url = win[0].currentTab.url(); // 最前面のウィンドウのアクティブタブのURLを取得する
Safari.includeStandardAdditions = true; // 標準コマンドを使用可能にする
Safari.displayAlert(url); // アラートダイアログを表示する
