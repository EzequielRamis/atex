import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Parent block that enables you to build the disclosure layout using its 3 children blocks: `disclosure-trigger`, `disclosure-content`, and `disclosure-state-indicator`.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.disclosure-layout}
       */
      'disclosure-layout': AtexBlock<{
        /**
         * Defines the initial visibility of the layout content.
         * Possible values are: `visible` (content initially open) or `hidden` (content is only displayed with user interaction).
         *
         * @default "hidden"
         */
        initialVisibility?: 'visible' | 'hidden'
        /**
         * Whether or not the layout content should have animations.
         * When set as `true`, this prop will enable additional `data-\*` attributes on the content which you can use as selectors in CSS.
         * It will also ensure that the element will get hidden once the transition has ended.
         *
         * @default false
         */
        animated?: boolean
      }>
      /**
       * Declares the blocks that will be rendered as disclosure triggers i.e.
       * the blocks that when clicked on will open or close the disclosure content (defined by the `disclosure-content` block).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.disclosure-layout}
       */
      'disclosure-trigger': AtexBlock<{
        /**
         * Name of the block that will be rendered when prompt to show the content.
         *
         * @default undefined
         */
        Show?: string
        /**
         * Name of the block that will be rendered when prompt to hide the content.
         *
         * @default undefined
         */
        Hide?: string
        /**
         * HTML tag to be applied to the component when it is rendered on the UI.
         */
        as?: string
        /**
         * Name of the block that will be rendered in case no blocks are declared in the `Show` or `Hide` props.
         *
         * @default undefined
         */
        children?: string[]
      }>
      /**
       * Declares the blocks that are responsible for displaying the desired content when the disclosure trigger is clicked on.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.disclosure-layout}
       */
      'disclosure-content': AtexBlock<{
        /**
         * List of blocks that will render the desired disclosure content.
         *
         * @default undefined
         */
        children?: string[]
      }>
      /**
       * Optional block responsible for rendering chevron or other UI elements that change when the disclosure is opened or closed.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.disclosure-layout}
       */
      'disclosure-state-indicator': AtexBlock<{
        /**
         * Name of the block that will be rendered when prompt to show the content.
         *
         * @default undefined
         */
        Show?: string
        /**
         * Name of the block that will be rendered when prompt to hide the content.
         *
         * @default undefined
         */
        Hide?: string
      }>
      /**
       * Wraps many `disclosure-layouts` blocks at once.
       * You may use this block to control when each one of them should be displayed, making it possible to have only one `disclosure-layout` open at a time.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.disclosure-layout}
       */
      'disclosure-layout-group': AtexBlock<{
        /**
         * Defines how many `disclosure-layout` blocks should be displayed at time.
         * Possible values are: `one` (only one `disclosure-layout` block should have its content displayed at time) or `many` (different `disclosure-layout`'s contents can be displayed at time).
         */
        maxVisible?: 'one' | 'many'
      }>
      /**
       * Wraps many `disclosure-trigger` blocks at once.
       * You may use this block to control when and how the `disclosure-layouts` blocks declared inside the `disclosure-layout-group` should be displayed.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.disclosure-layout}
       */
      'disclosure-trigger-group': AtexBlock<{
        /**
         * Name of the block that will be rendered when prompt to show the content.
         *
         * @default undefined
         */
        Show?: string
        /**
         * Name of the block that will be rendered when prompt to hide the content.
         *
         * @default undefined
         */
        Hide?: string
        /**
         * HTML tag to be applied to the component when it is rendered on the UI.
         */
        as?: string
        /**
         * Name of the block that will be rendered in case no blocks are declared in the `Show` or `Hide` props.
         *
         * @default undefined
         */
        children?: string[]
      }>
    }
  }
}
