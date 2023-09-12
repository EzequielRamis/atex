import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Provides layout structures to help build elements that should have a fixed position.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.sticky-layout}
       */
      'sticky-layout': Block<
        | {
            /**
             * Indicates where the component should stick.
             *
             * @default undefined
             */
            position?: 'top' | 'bottom'
            /**
             * Indicates the distance in pixels from the position chosen in the `position` prop.
             *
             * @default 0
             */
            verticalSpacing?: number
          }
        | {
            /**
             * The `sticky-layout.stack-container` block can be used to orchestrate multiple `sticky-layouts` to have a stack behavior instead of one being on top of the other.
             */
            $type: 'stack-container'
            /**
             * Indicates where the component should stick.
             * *It overrides the `position` of its children `sticky-layout`.*
             *
             * @default undefined
             */
            position?: 'top' | 'bottom'
          }
      >
    }
  }
}
