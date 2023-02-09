import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * A button for adding items into the shopping cart.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.add-to-cart-button}
       */
      'add-to-cart-button': AtexBlock<{
        /**
         * Controls what happens when users click on the button.
         * Possible values are: `go-to-product-page`, `add-to-cart`, and `ensure-sku-selection` (if multiple SKUs are available, users will be redirected to the product page to select the desired one.
         * If the product only has 1 SKU available, it will be added to the cart once the button is clicked on).
         *
         * @default "add-to-cart"
         */
        onClickBehavior?:
          | 'go-to-product-page'
          | 'add-to-cart'
          | 'ensure-sku-selection'
        /**
         * Controls whether the 'onClick' event (triggered upon user clicks) should be spread to the page's parent elements.
         * Possible values are: `disabled` and `enabled`.
         *
         * @default "disabled"
         */
        onClickEventPropagation?: 'disabled' | 'enabled'
        /**
         * Whether the user should be redirected to the checkout page (`true`) or not (`false`) when the Add To Cart Button is clicked on.
         *
         * @default false
         */
        isOneClickBuy?: boolean
        /**
         * Defines the link to where users will be redirected when the Add To Cart Button is clicked on and the `isOneClickBuy` prop is set to `true`.
         *
         * @default "/checkout/#/cart"
         */
        customOneClickBuyLink?: string
        /**
         * Defines the link to where users will be redirected when the Toast (pop-up notification displayed when adding an item to the minicart) is clicked on.
         *
         * @default "/checkout/#/cart"
         */
        customToastUrl?: string
        /**
         * Defines a custom text message to be displayed on the Add To Cart Button.
         *
         * @default "Add to cart" (automatic translation will be applied according to your store's default language)
         */
        text?: string
        /**
         * Defines a custom text message to be displayed on the Add To Cart Button when a product is unavailable.
         *
         * @default "Unavailable" (automatic translation will be applied according to your store's default language)
         */
        unavailableText?: string
        /**
         * Define the `id` for the event that will be sent by the the button upon user interaction.
         *
         * @default undefined
         */
        customPixelEventId?: string
      }>
    }
  }
}
