import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.checkout-summary}
       */
      'checkout-summary': AtexBlock<{
        $type?: 'compact'
        /**
         * @default undefined
         */
        totalizers?: {
          id: string
          name: string
          value?: number
        }[]
        /**
         * Id of the totalizers that should be displayed inside this component.
         *
         * @default ["Items"]
         */
        totalizersToShow?: string[]
        /**
         * @default undefined
         */
        total?: number
        /**
         * Controls how the `Total` shown in the bottom of the summary is calculated.
         * Possible values are: `visibleTotalizers`, which means that the `Total` shown will only take into account visible totalizers (the ones included in the `totalizersToShow` array), and `allTotalizers`, which will take into account all totalizers from `orderForm`, even if they're not being displayed.
         *
         * @default "visibleTotalizers"
         */
        totalCalculation?: 'visibleTotalizers' | 'allTotalizers'
      }>
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.checkout-summary}
       */
      'summary-totalizers': AtexLooseBlock
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.checkout-summary}
       */
      'summary-coupon': AtexLooseBlock
      /**
       * Renders the product installments.
       * If more than one option is available, the one with the biggest number of installments will be displayed.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.checkout-summary}
       */
      'summary-installments': AtexBlock<{
        /**
         * IDs of your choosing to identify the block's rendered message and customize it using the admin's Site Editor.
         * Learn how to use them accessing the documentation on [Using the Markers prop to customize a block's message](https://vtex.io/docs/recipes/style/using-the-markers-prop-to-customize-a-blocks-message).
         * Notice the following: a block's message can also be customized in the Store Theme source code using the `message` prop.
         *
         * @default []
         */
        markers?: string[]
        /**
         * Defines the block's default text i.e. the block message.
         * You can also define which text message a block will render on the UI using the admin's Site Editor.
         *
         * @default undefined
         */
        message?: string
      }>
    }
  }
}
