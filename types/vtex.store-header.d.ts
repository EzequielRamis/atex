import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Defines the Header layout through `header-row` blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-header}
       */
      'header-layout': Block<{
        $type: 'desktop' | 'mobile'
      }>
      /**
       * Create Header lines according to your store needs.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-header}
       */
      'header-row': Block<{
        /**
         * CSS property that controls the vertical stacking order of elements for overlapping.
         *
         * @default 0
         */
        zIndex?: number
        /**
         * Whether the Header margin should be fixed on the layout (`true`) or not (`false`).
         *
         * @default false
         */
        sticky?: boolean
        /**
         * Whether the Header should take the full width of the screen or not.
         *
         * @default true
         */
        fullWidth?: boolean
        /**
         * Whether the row will use the base color (`false`) or the inverted base color (`true`) as defined in `styles.json`.
         *
         * @default false
         */
        inverted?: boolean
      }>
      /**
       * Adds a `1px` margin to a Header row.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-header}
       */
      'header-border': Block<{
        /**
         * Whether the Header margin should be fixed in the layout or not.
         *
         * @default false
         */
        sticky?: boolean
      }>
      /**
       * Centralizes its children blocks in a Header row.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-header}
       */
      'header-force-center': Block
      /**
       * Adds spacing between blocks throughout a Header row.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-header}
       */
      'header-spacer': Block
    }
  }
}
