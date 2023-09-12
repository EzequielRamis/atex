import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `product-name` block is responsible for displaying a product name along with other information about the product, such as the SKU or brand.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/productname}
       */
      'product-name': Block<{
        /**
         * Displays the product name (`plainText`) or the link to the product page (`linkToProductPage`).
         *
         * @default "plainText"
         */
        displayMode?: 'plainText' | 'linkToProductPage'
        /**
         * Displays the brand name.
         *
         * @default false
         */
        showBrandName?: boolean
        /**
         * Displays the product reference code.
         *
         * @default false
         */
        showProductReference?: boolean
        /**
         * Displays the SKU value.
         *
         * @default false
         */
        showSku?: boolean
        /**
         * Defines the HTML tag of the product container.
         * Possible values are: `div`, `h1`, `h2`, `h3`.
         *
         * @default "div"
         */
        tag?: 'div' | 'h1' | 'h2' | 'h3'
      }>
    }
  }
}
