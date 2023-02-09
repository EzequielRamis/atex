import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Renders external iframes on your store.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.iframe}
       */
      iframe: AtexBlock<
        | {
            $type?: undefined
            /**
             * Source address the iframe should render.
             *
             * @default null
             */
            src?: string
            /**
             * Width attribute of the iframe.
             *
             * @default null
             */
            width?: number
            /**
             * Height attribute of the iframe.
             *
             * @default null
             */
            height?: number
            /**
             * Allow attribute of the iframe.
             *
             * @default null
             */
            allow?: string
          }
        | {
            $type: 'dynamic-src'
            /**
             * iframe src with dynamic parameters from page URL enclosed in '{}'.
             *
             * @default null
             */
            dynamicSrc?: string
            /**
             * Width attribute of the iframe.
             *
             * @default null
             */
            width?: number
            /**
             * Height attribute of the iframe.
             *
             * @default null
             */
            height?: number
            /**
             * Title attribute of the iframe.
             *
             * @default null
             */
            title?: string
            /**
             * Allow attribute of the iframe.
             *
             * @default null
             */
            allow?: string
            /**
             * ID attribute of the iframe.
             *
             * @default null
             */
            id?: string
            /**
             * Class attribute of the iframe.
             *
             * @default null
             */
            className?: string
            /**
             * onLoad attribute of the iframe.
             *
             * @default null
             */
            onLoad?: string
          }
      >
    }
  }
}
