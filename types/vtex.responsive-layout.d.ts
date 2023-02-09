import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Declares layout structures that will only be rendered in a specific screen-size breakpoint.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.responsive-layout}
       */
      'responsive-layout': AtexBlock<{
        $type: 'desktop' | 'mobile' | 'tablet' | 'phone'
      }>
    }
  }
}
