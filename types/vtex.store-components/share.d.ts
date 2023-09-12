import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `Share` component allows shoppers to share a product URL via social media.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/share}
       */
      share: Block<{
        /**
         * Button container classes.
         *
         * @default "true"
         */
        buttonContainerClass?: string
        /**
         * Main container classes.
         *
         * @default null
         */
        className?: string
        /**
         * Image url to share in social medias.
         *
         * @default undefined
         */
        imageUrl?: string
        /**
         * Share button options, such as `size`.
         *
         * @default {}
         */
        options?: {
          /**
           * The size of the share button in pixels.
           */
          size: number
        }
        /**
         * Share label classes.
         *
         * @default "true"
         */
        shareLabelClass?: string
        /**
         * Possible social media icons to be displayed.
         *
         * @default { Facebook: true, Twitter: true, Whatsapp: true, Pinterest: true }
         */
        social?: {
          /**
           * If Facebook social media will be shown.
           */
          Facebook: boolean
          /**
           * If Twitter social media will be shown.
           */
          Twitter: boolean
          /**
           * If WhatsApp social media will be shown.
           */
          WhatsApp: boolean
          /**
           * If Pinterest social media will be shown.
           */
          Pinterest: boolean
        }
      }>
    }
  }
}
