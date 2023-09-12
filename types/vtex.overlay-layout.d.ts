import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Declares a renderable children block responsible for triggering the `overlay-layout` content.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.overlay-layout}
       */
      'overlay-trigger': Block<{
        /**
         * Defines whether the popover-layout will be opened by click (`click`) or hover (`hover`).
         *
         * @default "click"
         */
        trigger?: 'click' | 'hover'
      }>
      /**
       * Declares a renderable children block responsible for building the Overlay Layout content.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.overlay-layout}
       */
      'overlay-layout': Block<{
        /**
         * Defines the Overlay Layout content placement when it is triggered according to the Trigger component positioning.
         * Possible values are: `bottom`, `left`, `right` or `top`.
         * If there is no page space in the placement that you choose, it will fit in a fallback position.
         *
         * @default "bottom"
         */
        placement?: 'bottom' | 'left' | 'right' | 'top'
        /**
         * Defines the Overlay Layout content behavior when users try to scroll the page.
         * Possible values are: `lock-page-scroll` (in which users can't scroll), `close-on-scroll` (the block is closed when users start scrolling) or `default` (Scroll does not affect the Overlay Layout content).
         *
         * @default "default"
         */
        scrollBehavior?: 'lock-page-scroll' | 'close-on-scroll' | 'default'
        /**
         * Once the Overlay Layout content is rendered, it defines whether a backdrop overlay will be displayed (`visible`) or not (`none`).
         * When set as visible, the backdrop will close Overlay Layout content when clicked on.
         * Otherwise, the content will be closed only if any component from the page is clicked on.
         *
         * @default "none"
         */
        backdrop?: 'visible' | 'none'
        /**
         * Whether an arrow pointing to the `overlay-trigger` component should be displayed on UI (`true`) or not (`false`).
         *
         * @default false
         */
        showArrow?: boolean
        /**
         * Defines the `overlay-layout` component positioning when compared to the `overlay-trigger` (unit used is `px`).
         * For more details, check out the `offsets` object table stated below.
         *
         * @default { skidding: 0, distance: 0 }
         */
        offsets?: {
          /**
           * Defines the `overlay-layout` component positioning side by side with the `overlay-trigger`.
           */
          skidding: number
          /**
           * Defines the distance between the `overlay-layout` and the `overlay-trigger` components in the UI.
           * A positive number places the `overlay-layout` component farther, while a negative number lets it overlap the `overlay-trigger`.
           */
          distance: number
        }
      }>
    }
  }
}
