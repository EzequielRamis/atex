import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The Media app allows you to display image and video assets using a single block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-media}
       */
      media: Block<{
        /**
         * Type of the media to be displayed.
         * Possible values are: `image` (behaves as an image block no matter the `src`), `video` (behaves as an video block no matter the `src`), and `imageOrVideo`.
         * Choosing imageOrVideo will make `media` automatically identify the type of the `src` based on its extension and behave accordingly.
         *
         * @default "imageOrVideo"
         */
        mediaType: 'image' | 'video' | 'imageOrVideo'
      }>
    }
  }
}
