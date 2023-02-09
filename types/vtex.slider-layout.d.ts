import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Builds block sliders for your store through its `children` list blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.slider-layout}
       */
      'slider-layout': AtexBlock<{
        /**
         * `aria-label` attribute value to be used by the `<Slider/>` component when rendered.
         * The `aria-label` value should explicitly tell users what the inspected HTML element does.
         *
         * @default "slider"
         */
        label?: string
        /**
         * Indicates when navigation arrows should be rendered.
         * Possible values are: `mobileOnly`, `desktopOnly`, `always`, or `never`.
         *
         * @default "always"
         */
        showNavigationArrows?: 'mobileOnly' | 'desktopOnly' | 'always' | 'never'
        /**
         * Indicates when navigation dots should be rendered.
         * Possible values are: `mobileOnly`, `desktopOnly`, `always`, or `never`.
         *
         * @default "always"
         */
        showPaginationDots?: 'mobileOnly' | 'desktopOnly' | 'always' | 'never'
        /**
         * Determines whether the slider should be infinite (`true`) or not (`false`).
         * When this prop is set as `false`, the slider will have an explicit end for users.
         *
         * @default false
         */
        infinite?: boolean
        /**
         * Determines whether the slider should use slide pages (`true`) or not (`false`).
         * When this prop is set as `false`, the slider will use smooth scrolling for slide navigation instead of arrows.
         *
         * @default true
         */
        usePagination?: boolean
        /**
         * The number of slider items to be shown on each type of device.
         *
         * @default { desktop: 5, tablet: 3, phone: 1 }
         */
        itemsPerPage?: {
          /**
           * The number of slides to be displayed on desktop devices.
           *
           * @default 5
           */
          desktop: number
          /**
           * The number of slides to be displayed on tablet devices.
           *
           * @default 3
           */
          tablet: number
          /**
           * The number of slides to be displayed on phone devices.
           *
           * @default 1
           */
          phone: number
        }
        /**
         * The number of slider items that should be displayed when users click one of the slider arrows.
         * It is also possible to set this prop value as `page`, meaning that the number of slider items to be displayed when one of the arrows is clicked is equal to the number of slider items set per page (in the `itemsPerPage` prop).
         *
         * @default "page"
         */
        navigationStep?: number | 'page'
        /**
         * Controls the transition animation between slides based on CSS attributes.
         *
         * @default { speed: 400, delay: 0, timing: '' }
         */
        slideTransition?: {
          /**
           * Transition speed (in `ms`).
           *
           * @default 400
           */
          speed: number
          /**
           * Delay between slide transition (in `ms`).
           *
           * @default 0
           */
          delay: number
          /**
           * Timing function.
           *
           * @default ""
           */
          timing: string
        }
        /**
         * Controls the autoplay feature behavior.
         *
         * @default undefined
         */
        autoplay?: {
          /**
           * Timeout (in `ms`) between each slide.
           *
           * @default undefined
           */
          timeout: number
          /**
           * Determines whether the autoplay should stop when users are hovering over the slider (`true`) or not (`false`).
           *
           * @default undefined
           */
          stopOnHover: boolean
        }
        /**
         * Determines whether the slides should occupy the full page width, making the arrows appear on top of them (`true`) or not (`false`).
         *
         * @default true
         */
        fullWidth?: boolean
        /**
         * Slider arrows size (height and width) in pixels.
         * This is a responsive prop, which means you can pass to it an object with different values for each breakpoint (`desktop`, `mobile`, `tablet`, and `phone`).
         *
         * @default 25
         */
        arrowSize?: number
        /**
         * Defines positioning of the slider elements on the screen.
         * Possible values are: `center` (elements are centered, allowing users to see a peek of the previous and next slides), `to-the-left` (aligns elements to the left side, allowing users to see a peek of the next slide, but not the previous one), and `disabled` (disables the feature, rendering elements on the whole screen without showing a peek of the previous and next slides).
         * Note: This is a responsive prop, which means you can pass to it an object with different values for each breakpoint (`desktop`, `mobile`, `tablet`, and `phone`).
         *
         * @default "disabled"
         */
        centerMode?: 'center' | 'to-the-left' | 'disabled'
        /**
         * Number of pixels between slides when `centerMode` is set to `center` or `to-the-left`.
         *
         * @default undefined
         */
        centerModeSlidesGap?: number
      }>
      /**
       * Enables you to keep a group of slider-layout blocks synched with each other.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.slider-layout}
       */
      'slider-layout-group': AtexLooseBlock
    }
  }
}
