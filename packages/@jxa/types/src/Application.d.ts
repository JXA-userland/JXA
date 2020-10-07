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
import { DVDPlayer } from "./core/DvdPlayer";
import { iTunes } from "./core/ITunes";

export = Application;
export as namespace Application;

type App = typeof Application & Application._StandardAdditions & Application.AnyValue;

/**
 * bundle ID or name or path or remote machine
 */
declare function Application(name: string): typeof Application & Application._StandardAdditions & Application.AnyValue;
/**
 * Pass custom Application type as generics
 * Return Application's StandardAdditions & T type
 */
declare function Application<T>(name: string): typeof Application & Application._StandardAdditions & Application.AnyValue & T;
declare function Application(name: "Calendar"): App & Application._Calendar;
declare function Application(name: "Contacts"): App & Application._Contacts;
declare function Application(name: "Database Events"): App & Application._DatabaseEvents;
declare function Application(name: "DVD Player"): App & Application._DVDPlayer;
declare function Application(name: "Finder"): App & Application._Finder;
declare function Application(name: "Font Book"): App & Application._FontBook;
declare function Application(name: "Image Events"): App & Application._ImageEvents;
declare function Application(name: "iTunes"): App & Application._iTunes;
declare function Application(name: "Keynote"): App & Application._Keynote;
declare function Application(name: "Mail"): App & Application._Mail;
declare function Application(name: "Messages"): App & Application._Messages;
declare function Application(name: "Notes"): App & Application._Notes;
declare function Application(name: "Numbers"): App & Application._Numbers;
declare function Application(name: "Pages"): App & Application._Pages;
declare function Application(name: "Photos"): App & Application._Photos;
declare function Application(name: "QuickTime Player"): App & Application._QuickTimePlayer;
declare function Application(name: "Reminders"): App & Application._Reminders;
declare function Application(name: "Safari"): App & Application._Safari;
declare function Application(name: "Script Editor"): App & Application._ScriptEditor;
declare function Application(name: "SpeechRecognitionServer"): App & Application._SpeechRecognitionServer;
declare function Application(name: "System Events"): App & Application._SystemEvents;
declare function Application(name: "Terminal"): App & Application._Terminal;
declare function Application(name: "TextEdit"): App & Application._TextEdit;
declare function Application(name: "VoiceOver"): App & Application._VoiceOver;
/**
 * process ID
 */
declare function Application(id: number): typeof Application & Application._StandardAdditions & Application.AnyValue;
declare function Application<T>(id: number): typeof Application & Application._StandardAdditions & Application.AnyValue & T;

declare namespace Application {
    // FIXME: very hack to avoid the Error
    // Error:(10, 5) TS4023: Exported variable 'TextEdit' has or is using name 'TextEdit' from external module "...TextEdit" but cannot be named.
    export interface _StandardAdditions extends StandardAdditions {
    }

    export interface _Calendar extends Calendar {
    }

    export interface _Contacts extends Contacts {
    }

    export interface _DatabaseEvents extends DatabaseEvents {
    }

    export interface _DVDPlayer extends DVDPlayer {
    }

    export interface _Finder extends Finder {
    }

    export interface _FontBook extends FontBook {
    }

    export interface _ImageEvents extends ImageEvents {
    }

    export interface _iTunes extends iTunes {
    }

    export interface _Keynote extends Keynote {
    }

    export interface _Mail extends Mail {
    }

    export interface _Messages extends Messages {
    }

    export interface _Notes extends Notes {
    }

    export interface _Numbers extends Numbers {
    }

    export interface _Pages extends Pages {
    }

    export interface _Photos extends Photos {
    }

    export interface _QuickTimePlayer extends QuickTimePlayer {
    }

    export interface _Reminders extends Reminders {
    }

    export interface _Safari extends Safari {
    }

    export interface _TextEdit extends TextEdit {
    }

    export interface _ScriptEditor extends ScriptEditor {
    }

    export interface _SpeechRecognitionServer extends SpeechRecognitionServer {
    }

    export interface _SystemEvents extends SystemEvents {
    }

    export interface _Terminal extends Terminal {
    }

    export interface _VoiceOver extends VoiceOver {
    }

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

    export var windows: any;
    // https://developer.apple.com/library/content/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-10.html#//apple_ref/doc/uid/TP40014508-CH109-SW1
    // TODO :should be define ApplicationWindow
    // export interface ApplicationWindows {
    //     [index: number]: any;
    //
    //     [index: string]: any;
    //
    //     at(index: number): any;
    //
    //     byName(name: string): any;
    //
    //     byId(id: number): any;
    // }
}
