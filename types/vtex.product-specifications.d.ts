import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Renders the product specification group.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-specifications}
       */
      'product-specification-group': Block<{
        /**
         * Filters the specifications that should be displayed by the block.
         *
         * @default undefined
         */
        filter?: {
          /**
           * Array of specification group names to be hidden or shown (according to what is defined in the `type` property) by the `product-specification-group` block.
           *
           * @default undefined
           */
          specificationGroups?: string[]
          /**
           * Whether the specification group names passed to the `specificationGroups` prop should be displayed or hidden on the UI.
           * Possible values are: `hide` (hides specification groups declared in the `specificationGroups` prop) or `show` (only shows the specification groups declared in the `specificationGroups` prop).
           *
           * @default undefined
           */
          type?: 'hide' | 'show'
        }
      }>
      /**
       * Renders the product specification.
       * It should be declared as a children of `product-specification-group`.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-specifications}
       */
      'product-specification': Block
      /**
       * Renders the product specification value.
       * It should be declared as a children of `product-specification`.
       * It is possible to render with `HTML`.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-specifications}
       */
      'product-specification-values': Block
      /**
       * Mandatory children of `product-specification-group`, `product-specification` and `product-specification-value`.
       * Depending on which block it is declared, the `product-specification-text` renders data regarding a specification group, a specification, or a specification value.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-specifications}
       */
      'product-specification-text': Block<{
        /**
         * Defines the block's default text message to be rendered on the UI.
         * You can also define which text message a block will render on the UI using the admin's Site Editor and the `markers` prop.
         *
         * @default undefined
         */
        message?: string
        /**
         * IDs of your choosing to identify the block's rendered text message and customize it using the admin's Site Editor.
         * Learn how to use them accessing the documentation on [Using the Markers prop to customize a block's message](https://vtex.io/docs/recipes/style/using-the-markers-prop-to-customize-a-blocks-message).
         * Notice the following: a block's message can also be customized in the Store Theme source code using the `message` prop.
         *
         * @default []
         */
        markers?: string[]
      }>
    }
  }
}
