import { BasicBlock, Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Parent block responsible for defining, according to its children blocks (`product-highlight-text` and `product-highlight-wrapper`) and props, how the Product Highlights component will be displayed.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-highlights}
       */
      'product-highlights': Block<{
        /**
         * Desired type of product highlight to be displayed.
         * Possible values are: `collection`, `promotion`, and `teaser`.
         * `collection` highlights the product's collection therefore it must be be used in conjuction with the [Collection Highlight](https://help.vtex.com/en/tutorial/collection-highlight-control--1tGdb2ndjqy6yWsk2YwKMu?locale=en) feature.
         * `promotion` and `teaser` should be used when the product is configured with a [promotion with highlights](https://help.vtex.com/en/tutorial/configuring-promotions-with-a-highlightflag--tutorials_2295?locale=en), but notice the following: `teaser` must only be used when the promotion presents restrictions.
         * `promotion`, in turn, when it does not.
         * *⚠️Be aware that nominal promotions will only be displayed in the cart, not on the shelf or product page.*
         *
         * @default "collection"
         */
        type?: 'collection' | 'promotion' | 'teaser'
        /**
         * Defines the highlights that should and should not be displayed by the block.
         *
         * @default undefined
         */
        filter?: {
          /**
           * Array of highlight names to be hidden or shown (according to what is defined in the `type` property) by the `product-highlights` block.
           *
           * @default undefined
           */
          highlightNames?: string[]
          /**
           * Whether the highlights names passed to the `highlightNames` prop should be displayed or hidden on the UI.
           * Possible values are: `hide` (hides highlights declared in the `highlightNames` prop) or `show` (only shows the highlights declared in the `highlightNames` prop).
           *
           * @default undefined
           */
          type?: 'hide' | 'show'
        }
      }>
      /**
       * Renders a `span` HTML tag with the hightlight name.
       * It also provides data attributes and CSS handles for style customizations.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-highlights}
       */
      'product-highlight-text': Block<{
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
        /**
         * If set, creates a link to the string passed.
         * You can interpolate the variables: `highlightText` and `highlightId`.
         * Example: `/collection/{highlightId}`.
         *
         * @default undefined
         */
        link?: string
      }>
      /**
       * If you need to render other blocks along side with the highlight name, you may use this block.
       * It renders a `div` HTML tag and its children blocks (if any).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-highlights}
       */
      'product-highlight-wrapper': BasicBlock
    }
  }
}
