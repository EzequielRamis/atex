import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Parent block that merely defines the logic (via its children blocks) for the layout structure, declaring the desired list of tabs and its content.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.tab-layout}
       */
      'tab-layout': AtexBlock<{
        /**
         * ID of the desired tab to be rendered as the default one.
         * If no value is provided, the first tab declared in the theme will be used as default.
         *
         * @default undefined
         */
        defaultActiveTabId?: string
      }>
      /**
       * Defines the list of tabs to be rendered.
       * It only accepts the `tab-list.item` block as child.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.tab-layout}
       */
      'tab-list': AtexBlock<
        | {
            $type?: undefined
          }
        | {
            /**
             * Defines the rendering for a given tab.
             * Notice that it does not define the tab content, which is handled by the `tab-content.item` block.
             */
            $type: 'item'
            /**
             * Tab ID of your choosing.
             * It will be used to match the tab to its content (defined by the `tab-content.item` block).
             *
             * @default undefined
             */
            tabId?: string
            /**
             * Defines the tab's text label.
             *
             * @default undefined
             */
            label?: string
            /**
             * Defines the item as the default active tab.
             *
             * @default false
             */
            defaultActiveTab?: boolean
          }
        | {
            /**
             * Flexible alternative to tab-list.item.
             * Defines the rendering for a given tab and also accepts any array of blocks as its children.
             */
            $type: 'item.children'
            /**
             * Tab ID of your choosing.
             * It will be used to match the tab to a given content (defined by the `tab-content.item` block).
             *
             * @default undefined
             */
            tabId?: string
          }
      >
      /**
       * Defines the list of content to be rendered in each tab.
       * It only accepts the `tab-content.item` block as child.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.tab-layout}
       */
      'tab-content': AtexBlock<{
        /**
         * Defines the content for a given tab.
         */
        $type?: 'item'
        /**
         * Tab ID of your choosing.
         * It will be used to match the content to a given tab (defined by the `tab-list.item` / `tab-list.item.children` blocks).
         *
         * @default undefined
         */
        tabId?: string
      }>
    }
  }
}
