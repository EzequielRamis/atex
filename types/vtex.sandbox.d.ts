import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Allows mounting arbitrary HTML content in extension points from the comfort and safety of an iframe.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.sandbox}
       */
      sandbox: AtexBlock<{
        width?: number
        height?: number
        initialContent?: string
        allowCookies?: boolean
      }>
    }
  }
}
