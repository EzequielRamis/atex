import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Displays a quantity selector on the product details page.
       * This block must be declared in the theme's `store.product` page template.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-quantity}
       */
      'product-quantity': Block<{
        /**
         * Displays the quantity of remaining items in stock if the available quantity is less than or equal to the value given to this property.
         *
         * @default 0
         */
        warningQuantityThreshold?: number
        /**
         * Whether the unit of measurement should be displayed (`true`) or not (`false`).
         *
         * @default true
         */
        showUnit?: boolean
        /**
         * Preset size values for font-size and padding.
         * You can check these value measures by accessing the [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms/NumericStepper).
         * Possible values are: `small`, `regular`, and `large`.
         *
         * @default "small"
         */
        size?: 'small' | 'regular' | 'large'
        /**
         * Whether a label should be displayed (`true`) or not (`false`).
         *
         * @default true
         */
        showLabel?: boolean
        /**
         * Defines how the quantity selector should initially behave.
         * Possible values are: `stepper` (displays an input field where the quantity can be directly defined, in addition to side buttons to increase or decrease the value) and `dropdown` (shows a list of predefined-quantity options.
         * In case the last quantity option is selected by users, the component is replaced with an input).
         *
         * @default "stepper"
         */
        selectorType?: 'stepper' | 'dropdown'
        /**
         * Defines how the number of products that have unitMultiplier will works.
         * Possible values are: `singleUnit` (the quantity will be not affected with the unitMultiplier) and `unitMultiplier` (the quantity will be affected with the unitMultiplier).
         *
         * @default "unitMultiplier"
         */
        quantitySelectorStep?: 'singleUnit' | 'unitMultiplier'
      }>
      /**
       * Displays a quantity selector on [Product Summary](https://vtex.io/docs/components/all/vtex.product-summary/)'s blocks.
       * This block must be declared as a children of the `product-summary.shelf` block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-quantity}
       */
      'product-summary-quantity': Block<{
        /**
         * Displays the quantity of remaining items in stock if the available quantity is less than or equal to the value given to this property.
         *
         * @default 0
         */
        warningQuantityThreshold?: number
        /**
         * Whether the unit of measurement should be displayed (`true`) or not (`false`).
         *
         * @default true
         */
        showUnit?: boolean
        /**
         * Preset size values for font-size and padding.
         * You can check these value measures by accessing the [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms/NumericStepper).
         * Possible values are: `small`, `regular`, and `large`.
         *
         * @default "small"
         */
        size?: 'small' | 'regular' | 'large'
        /**
         * Whether a label should be displayed (`true`) or not (`false`).
         *
         * @default true
         */
        showLabel?: boolean
        /**
         * Defines how the quantity selector should initially behave.
         * Possible values are: `stepper` (displays an input field where the quantity can be directly defined, in addition to side buttons to increase or decrease the value) and `dropdown` (shows a list of predefined-quantity options.
         * In case the last quantity option is selected by users, the component is replaced with an input).
         *
         * @default "stepper"
         */
        selectorType?: 'stepper' | 'dropdown'
        /**
         * Defines how the number of products that have unitMultiplier will works.
         * Possible values are: `singleUnit` (the quantity will be not affected with the unitMultiplier) and `unitMultiplier` (the quantity will be affected with the unitMultiplier).
         *
         * @default "unitMultiplier"
         */
        quantitySelectorStep?: 'singleUnit' | 'unitMultiplier'
      }>
    }
  }
}
