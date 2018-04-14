
export namespace Reminders {
    // Records

    // Function options


}
export interface Reminders {
    // Functions

     /**
      * Open a Reminder in the UI
      * @param directParameter the Reminders URL
      * 
      */
     getURL(directParameter: string, ): void;

     /**
      * Show an object in the UI
      * @param directParameter The object to be shown
      * @return The object shown.
      */
     show(directParameter: {}, ): void;
}
