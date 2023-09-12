import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Top level block that must be declared in the `minicart-product-list` block to render a default detailed list with all products added to the shopping cart.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-list': Block<{
        /**
         * Quantity badge behavior when displaying the number of total items added in Minicart.
         * Possible values are: `total` (quantity badge displays the number of items added to the cart), `distinct` (quantity badge only displays the number of different products added to the cart), `totalAvailable` (quantity badge displays the number of available items added to the cart), and `distinctAvailable` (quantity badge only displays the number of different and available products added to the cart).
         *
         * @default "distinct"
         */
        itemCountMode?:
          | 'total'
          | 'distinct'
          | 'totalAvailable'
          | 'distinctAvailable'
        /**
         * The height (px) of each item's loading element.
         *
         * @default 100
         */
        lazyRenderHeight?: number
        /**
         * The distance (px) to the bottom of the viewport that each item should be at the moment of it's render.
         *
         * @default 300
         */
        lazyRenderOffset?: number
      }>
      /**
       * Creates the product list layout for desktop devices.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-list-content-desktop': Block
      /**
       * Creates the product list layout for mobile devices.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-list-content-mobile': Block
      /**
       * Renders a message text about the product availability.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      message: Block<{
        /**
         * Availability message position on the list.
         * Possible values are: `rows` (displaying the message in the product row) or `cols` (displaying in the product column).
         *
         * @default "cols"
         */
        layout?: 'rows' | 'cols'
      }>
      /**
       * Renders the product reference information.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-reference': Block<{
        /**
         * Text label to be displayed to the left of the product reference value.
         *
         * @default undefined
         */
        identifierLabel?: string
        /**
         * Desired product reference data i.e. product identifier to be displayed.
         * Possible options are: `ProductId`, `ProductSkuItemId`, `ProductReferenceId`, and `ProductSkuReferenceId`.
         *
         * @default "ProductReferenceId"
         */
        identifierOption?:
          | 'ProductId'
          | 'ProductSkuItemId'
          | 'ProductReferenceId'
          | 'ProductSkuReferenceId'
      }>
      /**
       * Renders the product prices.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      price: Block<{
        /**
         * Product price position on the list.
         *
         * @default "left"
         */
        textAlign?: 'left' | 'center' | 'right'
        /**
         * Whether the product prices should be displayed on the list (`true`) or not (`false`).
         *
         * @default true
         */
        showListPrice?: boolean
      }>
      /**
       * Renders the price for each product unit added to the cart.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'unit-price': Block<{
        /**
         * Product unit prices position on the list.
         *
         * @default "left"
         */
        textAlign?: 'left' | 'center' | 'right'
        /**
         * Defines whether the price type should be displayed.
         * Possible values are: `sellingPrice` or `price`
         *
         * @default "price"
         */
        unitPriceType?: 'sellingPrice' | 'price'
        /**
         * Defines when the unit price should be displayed.
         * Possible values are: `always` (unit price is always displayed) or `default` (unit price is only displayed when the number of products is greater than one).
         *
         * @default "default"
         */
        unitPriceDisplay?: 'always' | 'default'
        /**
         * Defines whether the product list price should be displayed or not.
         * Possible values are: `showWhenDifferent` (list price is displayed when it is different from the regular price) or `notShow` (list price is never displayed).
         *
         * @default "notShow"
         */
        displayUnitListPrice?: 'showWhenDifferent' | 'notShow'
      }>
      /**
       * Renders the product images.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-list-image': Block<{
        /**
         * Product image width (in pixels).
         *
         * @default 96
         */
        width?: number
      }>
      /**
       * Renders the product variations.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-variantions': Block
      /**
       * Renders a product label that displays a sua quantidade de unidades added to the cart.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'product-quantity-label': Block
      /**
       * Renders a selector that allows users to add a chosen number of a product in their cart.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'quantity-selector': Block<{
        /**
         * Mode of the quantity selector input.
         * Possible values are `default` and `stepper`.
         * On the default mode, the quantity stepper will initially render a dropdown component, and after the quantity exceeds 10, it will switch to an input.
         * In the stepper mode it will always render a numeric stepper component.
         *
         * @default "default"
         */
        mode?: 'default' | 'stepper'
        /**
         * Defines how the number of products that have unitMultiplier will works.
         * Possible values are: `singleUnit` (the quantity will be not affected with the unitMultiplier) and `unitMultiplier` (the quantity will be affected with the unitMultiplier).
         *
         * @default "unitMultiplier"
         */
        quantitySelectorStep?: 'singleUnit' | 'unitMultiplier'
      }>
      /**
       * Renders a button that allows users to remove a product from the list.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-list}
       */
      'remove-button': Block<{
        /**
         * Variation for the button visual proeminence based on the [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms/Button).
         * Possible values are: `primary`, `secondary`, `tertiary`, `inverted-tertiary`, `danger` and `danger-tertiary`.
         *
         * @default "danger"
         */
        variation?:
          | 'primary'
          | 'secondary'
          | 'tertiary'
          | 'inverted-tertiary'
          | 'danger'
          | 'danger-tertiary'
        /**
         * Defines how the remove button should be displayed.
         * Possible values are: `icon-button` (to render an icon button) and `text-button` (to render a text message button).
         * If you desire to [create a modal in the remove button](https://vtex.io/docs/recipes/templates/creating-modals-using-icons/), use the `icon-button` value.
         *
         * @default "icon-button"
         */
        displayMode?: 'icon-button' | 'text-button'
      }>
    }
  }
}
