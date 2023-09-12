import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * This store component block displays messages to users regarding the product availability in the store.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-availability}
       */
      'product-availability': Block<{
        /**
         * Minimum product quantity that makes the low stock message to be displayed (if any message is set in the `lowStockMessage` prop).
         *
         * @default 0
         */
        threshold?: number
        /**
         * Message text to be displayed when the in-stock quantity is lower than the quantity defined in the `threshold` prop.
         * This prop value must have `{quantity}` inside the string text in order to properly display the stock quantity according to the threshold.
         * For example: `"Only {quantity} left!"`.
         * Notice: if this prop's value is left empty, no message will be shown.
         *
         * @default ""
         */
        lowStockMessage?: string
        /**
         * Message text to be displayed when the in-stock quantity is higher or equal than the quantity defined in the `threshold` prop.
         * Notice: if this prop's value is left empty, no message will be shown.
         *
         * @default ""
         */
        highStockMessage?: string
      }>
    }
  }
}
