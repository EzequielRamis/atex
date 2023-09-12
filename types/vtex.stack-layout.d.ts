import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Renders blocks on top of other blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.stack-layout}
       */
      'stack-layout': Block<{
        /**
         * An offset to be passed to the zIndex of the children of the stack layout.
         * If you pass 3, the first children will have zIndex of 3 and the next layer will have zIndex of 4, and so on.
         *
         * @default 0
         */
        zIndexOffset?: number
      }>
    }
  }
}
