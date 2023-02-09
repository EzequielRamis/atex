import { AtexBlock, AtexLooseBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Renders a default Product Gifts block implementation.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-gifts}
       */
      'product-gifts': AtexBlock<{
        /**
         * Maximum number of gifts that will be displayed at once.
         *
         * @default "showAll"
         */
        maxVisibleItems: number | 'showAll'
      }>
      /**
       * Reads Catalog data regarding the product's gifts and provides it to its children.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-gifts}
       */
      'gift-text': AtexBlock<{
        /**
         * A translatable string (according to [ICU pattern](https://formatjs.io/guides/message-syntax/)) that has variables that might be used to render any desired text regarding the gifts.
         *
         * @default "{exceedingItems, plural, =0{ } one {+ # gift} other {+ # gifts}}"
         */
        text?: string
      }>
      /**
       * Renders the available gifts in a list format.
       * It also provides context for its 3 children listed below.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-gifts}
       */
      'product-gift-list': AtexLooseBlock
      /**
       * Renders the product's gift name.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-gifts}
       */
      'gift-name': AtexBlock<{
        /**
         * Whether or not the `gift-name` block should be a link to the gift's product page.
         *
         * @default false
         */
        linkToProductPage?: boolean
        /**
         * Name type to be displayed alongside the gift.
         * Possible values are: `productName` (displays the gift's product name) and `skuName` (displays the gift's SKU name).
         *
         * @default "skuName"
         */
        nameType?: 'productName' | 'skuName'
      }>
      /**
       * Renders the product's gift image.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-gifts}
       */
      'gift-image': AtexBlock<{
        /**
         * Gift image maximum width.
         *
         * @default 125
         */
        maxWidth?: number | string
        /**
         * Gift image maximum height.
         *
         * @default 125
         */
        maxHeight?: number | string
        /**
         * Gift image minimum width.
         *
         * @default 125
         */
        minWidth?: number | string
        /**
         * Gift image minimum height.
         *
         * @default 125
         */
        minHeight?: number | string
        /**
         * The label of the image that should be rendered.
         *
         * @default undefined
         */
        imageLabel?: string
      }>
      /**
       * Renders the gift's description provided by the `product-gift-list` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-gifts}
       */
      'gift-description': AtexLooseBlock
    }
  }
}
