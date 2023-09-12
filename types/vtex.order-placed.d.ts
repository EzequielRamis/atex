import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Main block, responsible for rendering the whole order placed page.
       * It accepts the following blocks:
       * - `op-header`
       * - `op-order`
       * - `op-footer`
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'order-placed': Block
      /**
       * Splits your page into separate and semantic sections.
       * Accepts an array of any kind of children blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-section': Block<{
        /**
         * Remove the bottom border of the section.
         *
         * @default false
         */
        borderless?: boolean
        /**
         * Margin space below the section.
         *
         * @default 0
         */
        marginBottom?: number
        /**
         * Padding space below the section.
         *
         * @default 0
         */
        paddingBottom?: number
        /**
         * Width of the section.
         *
         * @default "100%"
         */
        width?: string
        /**
         * Name of the section.
         * Use it to have custom css handles for it.
         *
         * @default undefined
         */
        name?: string
      }>
      /**
       * Defines the header content of the page.
       * Accepts an array of any kind of children blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-header': Block
      /**
       * Defines the footer content of the page.
       * Accepts an array of any kind of children blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-footer': Block
      /**
       * Renders the confirmation icon.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-confirmation-icon': Block
      /**
       * Renders the confirmation title.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-confirmation-title': Block
      /**
       * Renders the confirmation message, containing the clients email.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-confirmation-message': Block
      /**
       * Renders a button that triggers a full page print.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-print-button': Block
      /**
       * Renders a list of important informations relevant to the currently placed order.
       * The messages may vary according to the type of order.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-notices': Block
      /**
       * If a placed order is split between delivery and pickup, renders a summary of all pickup and delivery packages with informations such as number of items, packages, pickup/delivery address and pickup/delivery SLA.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-summary-section': Block
      /**
       * Renders the bank invoice section if payment method chosen was bank invoice.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-bank-invoice-section': Block
      /**
       * Defines an order context to be able to render its meta information and packages.
       * Must be used to display order data.
       * Accepts an array of any kind of children blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order': Block
      /**
       * Renders the order id number.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-number': Block
      /**
       * Renders the date and time an order was placed.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-datetime': Block
      /**
       * Renders the seller of an order.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-seller': Block
      /**
       * Renders a message with the number of packages of an order if the order was split in more than one package.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-split-notice': Block
      /**
       * Renders the customer information.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-customer': Block
      /**
       * Renders the customer information.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-options': Block<{
        /**
         * Make the options wrapper take full horizontal space.
         *
         * @default false
         */
        fullWidth?: boolean
        /**
         * The path to redirect a user to their profile page (rendered by the `vtex.my-account` app).
         *
         * @default "/account"
         */
        myAccountPath?: string
      }>
      /**
       * Renders the customer information.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-payment': Block
      /**
       * Renders an order delivery packages information and product list.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-delivery-packages': Block
      /**
       * Renders an order pickup packages information and product list.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-pickup-packages': Block
      /**
       * Renders an order delivery packages information and product list.
       * Must be placed inside an `op-order` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.order-placed}
       */
      'op-order-total': Block
    }
  }
}
