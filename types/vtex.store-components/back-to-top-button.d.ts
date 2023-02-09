import { AtexBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `back-to-top-button` component is a button that redirects users to the top of the page when clicked.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/backtotopbutton}
       */
      'back-to-top-button': AtexBlock<{
        /**
         * Defines the component rendering.
         * Possible values are: `button` to display a button with a `Back To Top` label text or `caret-icon` to display just an icon.
         *
         * @default "button"
         */
        display?: 'button' | 'caret-icon'
        /**
         * Defines the window Y pixel in which the button will be displayed.
         *
         * @default 600
         */
        displayThreshold?: number
      }>
    }
  }
}
