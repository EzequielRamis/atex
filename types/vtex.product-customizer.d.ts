import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Add the `product-assembly-options` block as a child of the `store.product` template (PDP template).
       * This is enough to enable the subscription form.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'product-assembly-options': AtexBlock<{
        /**
         * Defines whether the customization box will be opened even if an attachment is not required (`always`) or if the customization box will be opened only if the attachment is required (`required`).
         *
         * @default "required"
         */
        initiallyOpened?: 'always' | 'required'
      }>
      /**
       * To display attachments of a product on the Product Detail Page (PDP), declare the `product-assembly-options` block and add the `assembly-option-input-values` block as its child.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-input-values': AtexBlock<{
        /**
         * Defines whether a checkbox (`box`) or a dropdown list (`select`) will be used to select the attachment pre-defined options.
         *
         * @default "select"
         */
        optionsDisplay?: 'box' | 'select'
      }>
      /**
       * Displays the attachment image.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-item-image': AtexLooseBlock
      /**
       * Displays a quantity selector.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-item-quantity-selector': AtexLooseBlock
      /**
       * Displays the attachment name.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-item-name': AtexLooseBlock
      /**
       * Displays the attachment price.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-item-price': AtexLooseBlock
      /**
       * Displays the `Customize` button.
       * When clicked, it opens a modal that allows customers to customize the attachment.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-item-customize': AtexBlock<{
        /**
         * Defines the behavior of the `Customize` button.
         * In addition to the `collapse` prop, the `buttonProps` object can include child blocks to build the content of the modal triggered when the button is clicked.
         *
         * @default undefined
         */
        buttonProps?: {
          /**
           * `Customize` button positioning.
           * Possible values are: `left` or `right`.
           *
           * @default "left"
           */
          collapse?: 'left' | 'right'
        }
      }>
      /**
       * Displays a summary with all selected attachments.
       *
       * @see {@link https://vtex.io/docs/components/product/vtex.product-customizer}
       */
      'assembly-option-item-children-description': AtexLooseBlock
    }
  }
}
