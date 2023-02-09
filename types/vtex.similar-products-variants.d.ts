import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The Similar Products Variants app returns similar products related to an SKU so users can select other colors or types of the same product.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.similar-products-variants}
       */
      'similar-products-variants': AtexBlock<{
        /**
         * The identifier of the image thumbnail displayed for each variant.
         * The identifier is set in the Admin’s Catalog.
         * If the label does not exist or is not defined, the first image is used.
         *
         * @default null
         */
        imageLabel?: string
      }>
    }
  }
}
