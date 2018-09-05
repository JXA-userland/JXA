import { Application } from "../src/index";
import { GoogleChrome } from "./fixtures/GoogleChrome";

const chrome = Application<GoogleChrome>("Google Chrome");
// chrome is typeof Application & Application._StandardAdditions & Application.AnyValue & GoogleChrome;
console.log(chrome.version());
const frontWindow: GoogleChrome.Window = chrome.app.windows[0];
const activeTab: GoogleChrome.Tab = frontWindow.activeTab();
const activeTabTitle = activeTab.title();
console.log(activeTabTitle);
