import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Navigation scheme that shows a user's browsing history up to their current location in your store.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.breadcrumb}
       */
      breadcrumb: Block<{
        $type?: 'search'
        /**
         * It determines whether Breadcrumb should also be displayed on mobile.
         *
         * @default false
         */
        showOnMobile?: boolean
        /**
         * Controls the `size` property of `IconHome`.
         *
         * @default 26
         */
        homeIconSize?: number
        /**
         * Controls the `size` property of `IconCaret`.
         *
         * @default 8
         */
        caretIconSize?: number
      }>
    }
  }
}
