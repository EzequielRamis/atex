import { AtexBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `notification` component displays text content in a bar style (`notification.bar`) or inline (`notification.inline`).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/notification}
       */
      notification: AtexBlock<{
        $type: 'bar' | 'inline'
        /**
         * Text to be used in the bar.
         *
         * @default ""
         */
        content?: string
      }>
    }
  }
}
