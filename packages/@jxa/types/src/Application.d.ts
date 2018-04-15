import { StandardAdditions } from "./core/StandardAdditions";
import { TextEdit } from "./core/TextEdit";
import { VoiceOver } from "./core/VoiceOver";
import { Terminal } from "./core/Terminal";
import { SystemEvents } from "./core/SystemEvents";
import { SpeechRecognitionServer } from "./core/SpeechRecognitionServer";
import { ScriptEditor } from "./core/ScriptEditor";
import { Calendar } from "./core/Calendar";
import { Contacts } from "./core/Contacts";
import { DatabaseEvents } from "./core/DatabaseEvents";
import { Finder } from "./core/Finder";
import { FontBook } from "./core/FontBook";
import { ImageEvents } from "./core/ImageEvents";
import { Keynote } from "./core/Keynote";
import { Mail } from "./core/Mail";
import { Messages } from "./core/Messages";
import { Notes } from "./core/Notes";
import { Numbers } from "./core/Numbers";
import { Pages } from "./core/Pages";
import { Photos } from "./core/Photos";
import { QuickTimePlayer } from "./core/QuickTimePlayer";
import { Reminders } from "./core/Reminders";
import { Safari } from "./core/Safari";
import { DVDPlayer } from "./core/DVDPlayer";
import { iTunes } from "./core/iTunes";

export = Application;
export as namespace Application;


/**
 * bundle ID or name or path or remote machine
 */
declare function Application(name: string): typeof Application & Application._StandardAdditions & Application.AnyValue;
declare function Application(name: "Calendar"): typeof Application & Application._StandardAdditions & Application._Calendar;
declare function Application(name: "Contacts"): typeof Application & Application._StandardAdditions & Application._Contacts;
declare function Application(name: "Database Events"): typeof Application & Application._StandardAdditions & Application._DatabaseEvents;
declare function Application(name: "DVD Player"): typeof Application & Application._StandardAdditions & Application._DVDPlayer;
declare function Application(name: "Finder"): typeof Application & Application._StandardAdditions & Application._Finder;
declare function Application(name: "Font Book"): typeof Application & Application._StandardAdditions & Application._FontBook;
declare function Application(name: "Image Events"): typeof Application & Application._StandardAdditions & Application._ImageEvents;
declare function Application(name: "iTunes"): typeof Application & Application._StandardAdditions & Application._iTunes;
declare function Application(name: "Keynote"): typeof Application & Application._StandardAdditions & Application._Keynote;
declare function Application(name: "Mail"): typeof Application & Application._StandardAdditions & Application._Mail;
declare function Application(name: "Messages"): typeof Application & Application._StandardAdditions & Application._Messages;
declare function Application(name: "Notes"): typeof Application & Application._StandardAdditions & Application._Notes;
declare function Application(name: "Numbers"): typeof Application & Application._StandardAdditions & Application._Numbers;
declare function Application(name: "Pages"): typeof Application & Application._StandardAdditions & Application._Pages;
declare function Application(name: "Photos"): typeof Application & Application._StandardAdditions & Application._Photos;
declare function Application(name: "QuickTime Player"): typeof Application & Application._StandardAdditions & Application._QuickTimePlayer;
declare function Application(name: "Reminders"): typeof Application & Application._StandardAdditions & Application._Reminders;
declare function Application(name: "Safari"): typeof Application & Application._StandardAdditions & Application._Safari;
declare function Application(name: "Script Editor"): typeof Application & Application._StandardAdditions & Application._ScriptEditor;
declare function Application(name: "SpeechRecognitionServer"): typeof Application & Application._StandardAdditions & Application._SpeechRecognitionServer;
declare function Application(name: "System Events"): typeof Application & Application._StandardAdditions & Application._SystemEvents;
declare function Application(name: "Terminal"): typeof Application & Application._StandardAdditions & Application._Terminal;
declare function Application(name: "TextEdit"): typeof Application & Application._StandardAdditions & Application._TextEdit;
declare function Application(name: "VoiceOver"): typeof Application & Application._StandardAdditions & Application._VoiceOver;
/**
 * process ID
 */
declare function Application(id: number): typeof Application & Application._StandardAdditions & Application.AnyValue;

declare namespace Application {
    // FIXME: very hack to avoid the Error
    // Error:(10, 5) TS4023: Exported variable 'TextEdit' has or is using name 'TextEdit' from external module "...TextEdit" but cannot be named.
    export interface _StandardAdditions extends StandardAdditions{}
    export interface _Calendar extends Calendar{}
    export interface _Contacts extends Contacts{}
    export interface _DatabaseEvents extends DatabaseEvents{}
    export interface _DVDPlayer extends DVDPlayer{}
    export interface _Finder extends Finder{}
    export interface _FontBook extends FontBook{}
    export interface _ImageEvents extends ImageEvents{}
    export interface _iTunes extends iTunes{}
    export interface _Keynote extends Keynote{}
    export interface _Mail extends Mail{}
    export interface _Messages extends Messages{}
    export interface _Notes extends Notes{}
    export interface _Numbers extends Numbers{}
    export interface _Pages extends Pages{}
    export interface _Photos extends Photos{}
    export interface _QuickTimePlayer extends QuickTimePlayer{}
    export interface _Reminders extends Reminders{}
    export interface _Safari extends Safari{}
    export interface _TextEdit extends TextEdit{}
    export interface _ScriptEditor extends ScriptEditor{}
    export interface _SpeechRecognitionServer extends SpeechRecognitionServer{}
    export interface _SystemEvents extends SystemEvents{}
    export interface _Terminal extends Terminal{}
    export interface _VoiceOver extends VoiceOver{}
    // Any Value
    export interface AnyValue {
        [index: string]: any;

        [index: number]: any;
    }

    /**
     * Return current app
     */
    export function currentApplication<T = any>(): typeof Application &
        Application._StandardAdditions & Application.AnyValue

    /**
     * It should be true if you use StandardAdditions
     */
    export var includeStandardAdditions: boolean;
    // Add OS X 10.11
    // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1
    export function id(): number;

    export function name(): string;

    /**
     * Return true if the app is running
     * @returns {boolean}
     */
    export function running(): boolean;

    /**
     * active the app
     */
    export function activate(): void;

    /**
     * quit the app
     */
    export function quit(): void;

    /**
     * launch the app
     */
    export function launch(): void;

    // https://qiita.com/zakuroishikuro/items/a7def965f49a2ab55be4
    /**
     * get command names
     */
    export function commandsOfClass(): string[];

    /**
     * get element names
     */
    export function elementsOfClass(className: string): string[];

    /**
     * get property names
     */
    export function propertiesOfClass(className: string): string[];

    /**
     * get parent object name
     * @param {string} className
     * @returns {string}
     */
    export function parentOfClass(className: string): string;

    export var windows: ApplicationWindows;
    
    // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1
    export interface ApplicationWindow {
        [index: string]: any;
    }

    export interface ApplicationWindows {
        [index: number]: ApplicationWindow;

        [index: string]: ApplicationWindow;

        at(index: number): ApplicationWindow;

        byName(name: string): ApplicationWindow;

        byId(id: number): ApplicationWindow;
    }
}
