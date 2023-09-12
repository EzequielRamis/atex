import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Layout block that provides a table to build the Seller Selector page with other blocks.
       * It is possible to build the page using three main blocks: `seller-simulate-shipping`, `seller-head` and `seller-body` (declared as children of `seller-head`).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-table': Block<{
        /**
         * Max number of shipping options to be displayed.
         *
         * @default 3
         */
        limitShownShippingInformation?: number
      }>
      /**
       * Builds a form so users can add a postal code and then simulate the shipping costs to the desired address.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-simulate-shipping': Block
      /**
       * Builds a header to be used on the Seller Selector table.
       * You can pass to it the `seller-head-cell` block as children.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-head': Block
      /**
       * Defines a title for each column in the table header.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-head-cell': Block<{
        /**
         * Text displayed on the table header for each column.
         *
         * @default undefined
         */
        title?: string
      }>
      /**
       * Defines the page main content.
       * It is responsible for displaying all sellers' data in the table body.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-body': Block
      /**
       * Used inside the Seller Selector table to separate seller's data into columns.
       * You can use the blocks listed below (`seller-name`, `seller-price`, `seller-shipping`, `seller-price-with-shipping`, `seller-add-to-cart`) as seller-row's children in order to provide all needed seller's data.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-row': Block
      /**
       * Displays the seller name.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-name': Block
      /**
       * Displays the seller price for a given product.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-price': Block
      /**
       * Displays shipping cost considering the sellers' data.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-shipping': Block
      /**
       * Displays the purchase final cost (shipping cost + product price).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-price-with-shipping': Block
      /**
       * Displays a Buy button that adds a given seller's product to the shopping cart.
       * It is possible to use two different blocks inside of it `buy-button` or `add-to-cart-button`.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.seller-selector}
       */
      'seller-add-to-cart': Block<{
        /**
         * Defines if users will keep navigating in the same page once the Buy button was clicked on (`true`) or if they will be redirected (`false`)
         *
         * @default false
         */
        inOneClickBuy?: boolean
      }>
    }
  }
}
