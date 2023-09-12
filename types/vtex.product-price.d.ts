import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Renders the product list price.
       * If it is equal or lower than the product selling price, this block will not be rendered.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-list-price': Block<{
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
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * Renders the product selling price.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-selling-price': Block<{
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
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * Renders the product spot price (in case it equals the product selling price, the block is not rendered).
       * This block finds the spot price by looking for the cheapest price of all installments options.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-spot-price': Block<{
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
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * Renders the product installments.
       * If more than one option is available, the one with the biggest number of installments will be displayed by default.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-installments': Block<{
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
        /**
         * When set to `max-quantity`, the block will render the installments plan with the biggest number of installments.
         * When set to `max-quantity-without-interest`, the block will render the installments plan with the biggest number of installments and **zero interest**.
         * Notice that, if this prop is set to `max-quantity-without-interest`, and no installments plan matches the 'without interest' criteria, the component will fallback the default behavior.
         *
         * @default "max-quantity"
         */
        installmentsCriteria?: 'max-quantity' | 'max-quantity-without-interest'
        /**
         * Allows you to define two filtering rules that will narrow down the possible installments plans the component might render.
         *
         * @default undefined
         */
        installemntOptionsFilter?: {
          paymentSystemName?: string
          installmentsQuantity?: number
        }
      }>
      /**
       * Renders all the installments of the payment system with the biggest amount of installments options by default.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-installments-list': Block<{
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
        /**
         * This prop enables you to filter the listed installments options by a certain payment system.
         * If not passed, the installments of the payment system with the biggest amount of installments options will be rendered.
         *
         * @default undefined
         */
        paymentSystemName?: string
        /**
         * Which installments options you want to show the user, in terms of the number of installments.
         * For example, if `[1, 3]` is passed as a value for this prop, only the installments options with `NumberOfInstallments` equal to 1 and 3 will be rendered.
         * If not passed, all options will be rendered.
         *
         * @default undefined
         */
        installmentsToShow?: number[]
      }>
      /**
       * Renders an installments option of the `product-installments-list-item`.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-installments-list-item': Block<{
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
      /**
       * Renders the product price savings, if there is any.
       * It can show the percentage of the discount or the value of the absolute saving.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-price-savings': Block<{
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
        /**
         * Set to `compact` if you want to remove the white space between the number and the percent sign.
         * It uses pattern provided by the current locale as default.
         *
         * @default "locale"
         */
        percentageStyle?: 'locale' | 'compact'
        /**
         * Set the minimum value for the percentage value display.
         * If not informed, it always appears.
         * Example: `10`, savings under or equal 10% will not show up.
         *
         * @default 0
         */
        minimumPercentage?: number
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * Renders the product spot price savings, if there is any.
       * It can show the percentage of the discount or the value of the absolute saving.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-spot-price-savings': Block<{
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
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * Renders the product list price range.
       * It follows the same logic applied to the `ListPrice`: if its value is equal to the product selling price, this block is not rendered.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-list-price-range': Block<{
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
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * The product selling price range.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-selling-price-range': Block<{
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
        /**
         * Renders the block even when the product is unavailable.
         *
         * @default false
         */
        alwaysShow?: boolean
      }>
      /**
       * Renders the name of the product's seller.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-seller-name': Block<{
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
      /**
       * Renders a fallback component when the price is loading and its children blocks when the price is not loading.
       * This block is extremely useful when the store works with asynchronous prices.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-price}
       */
      'product-price-suspense': Block<{
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
        /**
         * Name of the block that will be rendered when the price is loading.
         *
         * @default "rich-text#loading"
         */
        Fallback?: string
      }>
    }
  }
}
