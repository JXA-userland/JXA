
export namespace DvdPlayer {
    // Records

    // Function options



















}
export interface DvdPlayer {
    // Functions

     /**
      * Start fast forwarding a DVD disc

      * @return returns DVD Player error code
      */
     fastForwardDvd(): number;

     /**
      * Start playback of a DVD disc

      * @return returns DVD Player error code
      */
     playDvd(): number;

     /**
      * Pause the playback of a DVD disc

      * @return returns DVD Player error code
      */
     pauseDvd(): number;

     /**
      * Start rewinding a DVD disc

      * @return returns DVD Player error code
      */
     rewindDvd(): number;

     /**
      * Stop the playback of a DVD disc

      * @return returns DVD Player error code
      */
     stopDvd(): number;

     /**
      * Step the dvd movie to the next frame

      * @return returns DVD Player error code
      */
     stepDvd(): number;

     /**
      * Go to the specified place
      * @param directParameter undefined
      * @return returns DVD Player error code
      */
     go(directParameter: any, ): number;

     /**
      * Press a key in a menu
      * @param directParameter undefined
      * @return returns DVD Player error code
      */
     press(directParameter: any, ): number;

     /**
      * open a VIDEO_TS folder for playing dvd from file
      * @param directParameter file reference to VIDEO_TS folder
      * @return returns DVD Player error code
      */
     openVIDEOTs(directParameter: any, ): number;

     /**
      * open a dvd video folder (VIDEO_TS or HVDVD_TS) folder for playing dvd from file
      * @param directParameter file reference to VIDEO_TS or HVDVD_TS folder
      * @return returns DVD Player error code
      */
     openDvdVideoFolder(directParameter: any, ): number;

     /**
      * Play the previous chapter of the current title

      * @return returns DVD Player error code
      */
     playPreviousChapter(): number;

     /**
      * Play the next chapter of the current title

      * @return returns DVD Player error code
      */
     playNextChapter(): number;

     /**
      * Specify the bookmark to play by index
      * @param directParameter The index of the bookmark
      * @return returns DVD Player error code
      */
     playBookmark(directParameter: number, ): number;

     /**
      * Specify the bookmark to play by name
      * @param directParameter The name of the bookmark
      * @return returns DVD Player error code
      */
     playNamedBookmark(directParameter: string, ): number;

     /**
      * Specify the video clip to play by index
      * @param directParameter The index of the video clip
      * @return returns DVD Player error code
      */
     playVideoClip(directParameter: number, ): number;

     /**
      * Specify the video clip to play by name
      * @param directParameter The name of the video clip
      * @return returns DVD Player error code
      */
     playNamedVideoClip(directParameter: string, ): number;

     /**
      * Exit video clip mode if currently playing a video clip

      * @return returns DVD Player error code
      */
     exitClipMode(): number;

     /**
      * obscure the mouse cursor

      * @return returns DVD Player error code
      */
     obscureCursor(): number;

     /**
      * eject the dvd we are using

      * @return returns DVD Player error code
      */
     ejectDvd(): number;
}
