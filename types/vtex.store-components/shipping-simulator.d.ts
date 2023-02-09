import { AtexBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `shipping-simulator` block estimates the shipping fee based on a zip code input.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/shippingsimulator}
       */
      'shipping-simulator': AtexBlock<{
        /**
         * If the product has gifts or attachments, for example, you can choose whether the shipping information will be grouped (`grouped`) by shipping type or showing the shipping prices for each of the items individually (`individualItems`).
         *
         * @default "individualItems"
         */
        pricingMode?: 'grouped' | 'individualItems'
        /**
         * ID of the product seller.
         *
         * @default undefined
         */
        seller?: string
        /**
         * Whether interacting with the simulator should update the shopper's address in their `orderForm`.
         *
         * @default true
         */
        shouldUpdateOrderForm?: boolean
        /**
         * ID of the current product SKU.
         *
         * @default undefined
         */
        skuId?: string
      }>
    }
  }
}
