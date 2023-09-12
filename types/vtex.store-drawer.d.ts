import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The Drawer component is a sliding panel that displays additional options and menus when expanded.
       * It is typically used in mobile layouts and responsive web designs where screen space is limited.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-drawer}
       */
      drawer: Block<{
        /**
         * Defines the maximum width of the open drawer.
         *
         * @default 450
         */
        maxWidth?: number | string
        /**
         * Controls whether the open drawer should occupy the full available width.
         *
         * @default false
         */
        isFullWidth?: boolean
        /**
         * Controls the direction of the opening animation for the drawer.
         *
         * @default "horizontal"
         */
        slideDirection?:
          | 'horizontal'
          | 'vertical'
          | 'rightToLeft'
          | 'leftToRight'
        /**
         * Controls whether the backdrop should be displayed when the drawer is open.
         *
         * @default undefined
         */
        backdropMode?: 'default' | 'none'
        /**
         * Controls the rendering strategy for the children of the drawer component.
         * It determines whether the children should be rendered only when the drawer is clicked (`lazy`) or immediately when the page loads (`eager`).
         * Enabling the `eager` strategy may improve SEO performance.
         * However, it may also result in slower page rendering.
         *
         * @default "lazy"
         */
        renderStrategy?: 'lazy' | 'eager'
        /**
         * Defines the store event ID responsible for triggering the `drawer` to automatically open on the interface.
         *
         * @default undefined
         */
        customPixelEventId?: string
        /**
         * Defines the store event name responsible for triggering the `drawer` to automatically open on the interface.
         * Some examples are: `'addToCart'` and `'removeFromCart'` events.
         * Note that if no `customPixelEventId` is set, using this prop will cause the drawer to open in every event with the specified name.
         *
         * @default undefined
         */
        customPixelEventName?: string
      }>
      /**
       * Use the `drawer-close-button` block to customize the button that closes the drawer.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-drawer}
       */
      'drawer-close-button': Block<{
        /**
         * Defines the size of the icon inside the button.
         *
         * @default 30
         */
        size?: number
        /**
         * Defines the type of the icon.
         *
         * @default "line"
         */
        type?: 'filled' | 'line'
        /**
         * Defines the text inside the button.
         * The icon will not be rendered if `text` is defined.
         *
         * @default undefined
         */
        text?: string
      }>
      /**
       * Use the `drawer-trigger` block to customize the icon that triggers the opening of the drawer.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-drawer}
       */
      'drawer-trigger': Block<{
        /**
         * Defines the event ID to be sent whenever users interact with the Drawer component.
         *
         * @default undefined
         */
        customPixelEventId?: string
      }>
      /**
       * Use the `drawer-header` block to customize the header containing the button that closes the drawer.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-drawer}
       */
      'drawer-header': Block
    }
  }
}
