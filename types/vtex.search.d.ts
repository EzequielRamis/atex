import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Provides customized autocomplete features in the search bar component, such as top searches, search history, product suggestions, or term suggestions.
       * You can read more about the Intelligent [Search autocomplete](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4gXFsEWjF7QF7UtI2GAvhL) feature in the VTEX Help Center.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search}
       */
      'autocomplete-result-list': AtexBlock<{
        $type: 'v2'
        /**
         * Maximum number of items in the top searches list.
         *
         * @default 10
         */
        maxTopSearches?: number
        /**
         * Maximum number of items in the search history list.
         *
         * @default 5
         */
        maxHistory?: number
        /**
         * Maximum number of items in the suggested products list.
         *
         * @default 3
         */
        maxSuggetedProducts?: number
        /**
         * Maximum number of items in the suggested terms list.
         *
         * @default 3
         */
        maxSuggestedTerms?: number
        /**
         * Autocomplete list width (percentage).
         * This value must be between `0` and `100`.
         *
         * @default undefined
         */
        autocompleteWidth?: number
        /**
         * Determines the layout the suggested products list will have when rendered.
         * Possible values are `HORIZONTAL` and `VERTICAL`.
         *
         * @default undefined
         */
        productLayout?: 'HORIZONTAL' | 'VERTICAL'
        /**
         * Determines whether all component titles will be hidden when rendered (`true`) or not (`false`).
         *
         * @default false
         */
        hideTitles?: boolean
        /**
         * Determines whether autocomplete should hide unavailable items (`true`) or not (`false`).
         *
         * @default false
         */
        hideUnavailableItems?: boolean
        /**
         * Determines whether the search history list should be prioritized over the other lists (`true`) or not (`false`).
         *
         * @default false
         */
        historyFirst?: boolean
        /**
         * Determines the maximum number of recommended products per breakpoints.
         * Possible values are `md`, `lg`, or `xlg`.
         *
         * @default undefined
         */
        customBreakpoints?: {
          /**
           * Defines the maximum number of recommended products for the `md` breakpoint.
           *
           * @default undefined
           */
          md: Breakpoint
          /**
           * Defines the maximum number of recommended products for the `lg` breakpoint.
           *
           * @default undefined
           */
          lg: Breakpoint
          /**
           * Defines the maximum number of recommended products for the `xlg` breakpoint.
           *
           * @default undefined
           */
          xlg: Breakpoint
        }
        /**
         * If you want faster searches and are not so concern about having the most up-to-date prices and promotions, use `"skip"`.
         *
         * @default "default"
         */
        simulationBehavior?: 'skip' | 'default'
        /**
         * By default, the mobile autocomplete uses the `CustomListItem` component to render the suggested products using a horizontal layout.
         * But sending a `product-summary` block here will render your customized Product Summary component.
         * Read our documentation to learn [how to build a horizontal Product Summary](https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-horizontal-product-summary) component.
         *
         * @default undefined
         */
        HorizontalProductSummary?: string
      }>
      /**
       * Renders a customized banner based on the search query.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search}
       */
      'search-banner': AtexBlock<{
        /**
         * Area where the banner will be displayed in the store.
         * This needs to match the predefined area value in the banner configuration.
         *
         * @default undefined
         */
        area?: string
        /**
         * Defines the horizontal alignment of the banner.
         * Possible values are `left`, `center`, or `right`.
         *
         * @default "center"
         */
        horizontalAlignment?: 'left' | 'center' | 'right'
      }>
      /**
       * Helps users with possible misspelling corrections for the current search query.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search/didyoumean}
       */
      'did-you-mean': AtexLooseBlock
      /**
       * Renders a list of similar search terms for the current search query.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search/suggestions}
       */
      'search-suggestions': AtexBlock<{
        /**
         * Defines a custom page to the link of a suggestion.
         * Example: `store.search.custom`.
         * Defaults to `store.search`.
         *
         * @default "store.search"
         */
        customPage?: string
      }>
    }
  }
}

type Breakpoint = {
  /**
   * Breakpoint minimum width.
   *
   * @default undefined
   */
  width?: number
  /**
   * Maximum number of suggested products.
   *
   * @default undefined
   */
  maxSuggestedProducts?: number
}
