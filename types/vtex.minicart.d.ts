import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-customizer}
       */
      minicart: AtexBlock<{
        $type: 'v2'
        /**
         * Minicart behavior when rendered.
         * Possible values for displaying the VTEX Minicart are: `popup` (appears as a pop-up window on the homepage), `drawer` (appears as a sidebar), `link` (redirects the user to the Checkout page when clicked), `popupWithLink` (combines `link` and `popup` functionalities), and `block` (displays the Minicart as a fixed block on the page).
         *
         * @default "drawer"
         */
        variation?: 'popup' | 'drawer' | 'link' | 'popupWithLink' | 'block'
        /**
         * Slide direction for the `drawer` Minicart opening.
         * Possible values are: `rightToLeft` or `leftToRight`.
         *
         * @default "rightToLeft"
         */
        drawerSlideDirection?: 'rightToLeft' | 'leftToRight'
        /**
         * Link associated with the `link` Minicart.
         *
         * @default undefined
         */
        linkVariationUrl?: string
        /**
         * Maximum width (in pixels) for the `drawer` Minicart when opened.
         *
         * @default 440
         */
        maxDrawerWidth?: number
        /**
         * Indicates whether the `popup` Minicart should open when the user hovers over it.
         *
         * @default false
         */
        openOnHover?: boolean
        /**
         * Shows the quantity badge even when the amount of products in the cart is zero.
         * Possible values are: `always` or `not-empty` or `never`.
         *
         * @default "not-empty"
         */
        quantityDisplay?: 'always' | 'not-empty' | 'never'
        /**
         * Quantity badge behavior when displaying the total items added to Minicart.
         * Possible values are: `total` (quantity badge displays the number of items added to the cart), `distinct` (only displays the number of different products added to the cart), `totalAvailable` (displays the number of available items added to the cart), and `distinctAvailable` (displays the number of different *and* available products added to the cart).
         *
         * @default "distinct"
         */
        itemCountMode?:
          | 'total'
          | 'distinct'
          | 'totalAvailable'
          | 'distinctAvailable'
        /**
         * Controls whether the backdrop should be displayed when the `drawer` Minicart is opened or not.
         * Possible values are: `visible` (renders the backdrop) or `none` (renders the `drawer` without backdrop).
         *
         * @default "none"
         */
        backdropMode?: 'visible' | 'none'
        /**
         * Icon displayed on the Minicart button.
         * This prop value must match the block name responsible for rendering the desired icon.
         *
         * @default "icon-cart" (from the [Store Icons](https://developers.vtex.com/docs/guides/vtex-store-icons/) app)
         */
        MinicartIcon?: string
        /**
         * Store event ID responsible for triggering the `minicart.v2` to automatically open on the interface.
         *
         * @default undefined
         */
        customPixelEventId?: string
        /**
         * Store event name responsible for triggering the `minicart.v2` to automatically open on the interface.
         * Some examples are: `'addToCart'` and `'removeFromCart'`.
         * Note that using this prop will make the `minicart.v2` open in every event with the specified name if no `customPixelEventId` is specified.
         *
         * @default undefined
         */
        customPixelEventName?: string
      }>
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-customizer}
       */
      'minicart-base-content': AtexLooseBlock
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-customizer}
       */
      'minicart-empty-state': AtexLooseBlock
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-customizer}
       */
      'minicart-product-list': AtexLooseBlock
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-customizer}
       */
      'minicart-summary': AtexLooseBlock
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-customizer}
       */
      'minicart-checkout-button': AtexLooseBlock
    }
  }
}
