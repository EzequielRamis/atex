import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `image` block renders images in the storefront.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/image}
       */
      image: Block<{
        /**
         * Alternate text for the image.
         *
         * @default undefined
         */
        alt?: string
        /**
         * The image hyperlink.
         *
         * @default undefined
         */
        link?: {
          /**
           * Guides the search engine not to track the link of the page indicated by the tag.
           * If `true`, sets the `rel=noFollow` attribute to the link.
           *
           * @default false
           */
          attributeNoFollow?: boolean
          /**
           * If `true` opens a new tab when you click the image.
           *
           * @default false
           */
          newTab?: boolean
          /**
           * Sets the URL to which the user will be redirected by clicking the image.
           *
           * @default undefined
           */
          url?: string
        }
        /**
         * Maximum height of the image.
         *
         * @default undefined
         */
        maxHeight?: string
        /**
         * Maximum width of the image.
         *
         * @default undefined
         */
        maxWidth?: string
        /**
         * Different image sizes for each page layout.
         *
         * @default undefined
         */
        sizes?: string
        /**
         * Source URL of the image.
         *
         * @default undefined
         */
        src?: string
        /**
         * URL of the image to use in different situations.
         *
         * @default undefined
         */
        srcSet?: string
        /**
         * Image title displayed on hover.
         *
         * @default undefined
         */
        title?: string
      }>
    }
  }
}
