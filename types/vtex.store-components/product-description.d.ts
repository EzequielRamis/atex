import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `product-description` block displays the description of a product.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/productdescription}
       */
      'product-description': Block<{
        /**
         * If `true`, whenever the product description is too big, it will collapse and show a "Show More" button.
         * When false, it will never collapse and will always show the whole description.
         *
         * @default true
         */
        collapseContent?: boolean
        /**
         * Define whether or not to show the title.
         *
         * @default true
         */
        showTitle?: boolean
        /**
         * Defines a custom title for the description section.
         *
         * @default undefined
         */
        title?: string
      }>
    }
  }
}
