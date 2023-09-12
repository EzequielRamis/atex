import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Enables you to build the search result page using its three children blocks: `search-result-layout.desktop`, `search-result-layout.mobile`, and `search-not-found-layout` .
       * It must be used in the `store.search` template since it uses the context provided by the VTEX Search API.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-result-layout': Block<
        | { $type?: undefined }
        | {
            /**
             * Builds the search result page structure for desktop mode.
             */
            $type: 'desktop'
            /**
             * Indicates which filters should be hidden.
             *
             * @default undefined
             */
            hiddenFacets?: {
              /**
               * Determines whether Brand filters should be hidden (`true`) or not (`false`).
               *
               * @default false
               */
              brands?: boolean
              /**
               * Determines whether Category filters should be hidden (`true`) or not (`false`).
               *
               * @default false
               */
              categories?: boolean
              /**
               * Determines whether Price filters should be hidden (`true`) or not (`false`).
               *
               * @default false
               */
              priceRange?: boolean
              /**
               * Indicates which specification filters should be hidden.
               *
               * @default undefined
               */
              specificationFilters?: {
                /**
                 * Determines whether specification filters should be hidden (`true`) or not (`false`).
                 *
                 * @default false
                 */
                hideAll?: boolean
                /**
                 * Object array of specification filters that should be hidden.
                 *
                 * @default undefined
                 */
                hiddenFilters?: {
                  /**
                   * Name of the specification filter that you want to hide.
                   *
                   * @default undefined
                   */
                  name: string
                }[]
              }
            }
            /**
             * Determines whether the resulting amount in each filter should appear beside its name on the `filter-navigator.v3` block as (`true`) or (`false`)
             *
             * @default false
             */
            showFacetQuantity?: boolean
            /**
             * Whether the facet title should appear on selected filters section on the `filter-navigator.v3` block as (`true`) or (`false`)
             *
             * @default false
             */
            showFacetTitle?: boolean
            /**
             * ID to be used in Google Analytics to track store metrics based on the Search Result block.
             *
             * @default "Search result"
             */
            trackingId?: string
            /**
             * Controls how the search results page will be displayed to users using the mobile layout.
             *
             * @default undefined
             */
            mobileLayout?: {
              /**
               * Defines the default layout for the mobile search results page.
               * Possible values are: `normal`, `small` or `inline`.
               *
               * @default "normal"
               */
              mode1?: 'normal' | 'small' | 'inline'
              /**
               * Defines which layout will be set for the mobile search results page when users click on the layout selector button.
               * Possible values also are `normal`, `small`, or `inline`.
               *
               * @default "small"
               */
              mode2?: 'normal' | 'small' | 'inline'
            }
            /**
             * Name of the gallery layout to be used by default in the search results page.
             * This prop is required when several layouts are explicitly defined by the `gallery` block.
             * This prop's value must match the layout name defined in the `name` prop from `layouts` object.
             *
             * @default undefined
             */
            defaultGalleryLayout?: string
            /**
             * The minimum number of facets must be displayed on the interface for a search bar to be displayed.
             * If you declare `0`, the search bar will always be displayed.
             *
             * @default undefined
             */
            thresholdForFacetSearch?: number
            /**
             * Keeps page customizations even when the user applies new filters.
             * This prop will only change the URL’s query string rather than the entire URL, preventing a full page reload whenever filters are applied.
             *
             * @default false
             */
            preventRouteChange?: boolean
          }
        | {
            /**
             * Builds the search result page structure for mobile mode.
             * If the `search-result-layout.mobile` is not provided, the `search-result-layout.desktop` will be used instead.
             */
            $type: 'mobile'
            /**
             * Indicates which filters should be hidden.
             *
             * @default undefined
             */
            hiddenFacets?: {
              /**
               * Determines whether Brand filters should be hidden (`true`) or not (`false`).
               *
               * @default false
               */
              brands?: boolean
              /**
               * Determines whether Category filters should be hidden (`true`) or not (`false`).
               *
               * @default false
               */
              categories?: boolean
              /**
               * Determines whether Price filters should be hidden (`true`) or not (`false`).
               *
               * @default false
               */
              priceRange?: boolean
              /**
               * Indicates which specification filters should be hidden.
               *
               * @default undefined
               */
              specificationFilters?: {
                /**
                 * Determines whether specification filters should be hidden (`true`) or not (`false`).
                 *
                 * @default false
                 */
                hideAll?: boolean
                /**
                 * Object array of specification filters that should be hidden.
                 *
                 * @default undefined
                 */
                hiddenFilters?: {
                  /**
                   * Name of the specification filter that you want to hide.
                   *
                   * @default undefined
                   */
                  name: string
                }[]
              }
            }
            /**
             * Determines whether the resulting amount in each filter should appear beside its name on the `filter-navigator.v3` block as (`true`) or (`false`)
             *
             * @default false
             */
            showFacetQuantity?: boolean
            /**
             * Whether the facet title should appear on selected filters section on the `filter-navigator.v3` block as (`true`) or (`false`)
             *
             * @default false
             */
            showFacetTitle?: boolean
            /**
             * ID to be used in Google Analytics to track store metrics based on the Search Result block.
             *
             * @default "Search result"
             */
            trackingId?: string
            /**
             * Controls how the search results page will be displayed to users using the mobile layout.
             *
             * @default undefined
             */
            mobileLayout?: {
              /**
               * Defines the default layout for the mobile search results page.
               * Possible values are: `normal`, `small` or `inline`.
               *
               * @default "normal"
               */
              mode1?: 'normal' | 'small' | 'inline'
              /**
               * Defines which layout will be set for the mobile search results page when users click on the layout selector button.
               * Possible values also are `normal`, `small`, or `inline`.
               *
               * @default "small"
               */
              mode2?: 'normal' | 'small' | 'inline'
            }
            /**
             * Name of the gallery layout to be used by default in the search results page.
             * This prop is required when several layouts are explicitly defined by the `gallery` block.
             * This prop's value must match the layout name defined in the `name` prop from `layouts` object.
             *
             * @default undefined
             */
            defaultGalleryLayout?: string
            /**
             * The minimum number of facets must be displayed on the interface for a search bar to be displayed.
             * If you declare `0`, the search bar will always be displayed.
             *
             * @default undefined
             */
            thresholdForFacetSearch?: number
            /**
             * Keeps page customizations even when the user applies new filters.
             * This prop will only change the URL’s query string rather than the entire URL, preventing a full page reload whenever filters are applied.
             *
             * @default false
             */
            preventRouteChange?: boolean
          }
        | {
            /**
             * Used instead of `search-result-layout` in scenarios in which the search result will be declared in a template that doesn't fetch Search context, such as Home.
             * It accepts a querySchema prop that executes search custom queries.
             * It also supports three children blocks: `search-result-layout.desktop`, `search-result-layout.mobile` and `search-not-found-layout`.
             */
            $type: 'customQuery'
            /**
             * You need to define how the search results will be fetched before declaring the blocks into the search results layout.
             */
            querySchema: {
              /**
               * Query string of the search URL that defines the results that should be fetched in the custom query.
               * For example: `Blue`.
               * This prop only works if the `mapField` prop is declared as well.
               *
               * @default undefined
               */
              queryField?: string
              /**
               * Search URL's `map` parameter to define which results should be fetched in the custom query, for example `specificationFilter_100`.
               * This prop only works if the `queryField` prop is declared as well.
               *
               * @default undefined
               */
              mapField?: string
              /**
               * Maximum number of items per search page.
               * The maximum value of this prop is `50`.
               * If a higher number is added, the query will fail.
               *
               * @default 10
               */
              maxItemsPerPage?: number
              /**
               * Determines which order products must follow when displayed.
               * The possible values are named after the sorting type: `OrderByReleaseDateDESC`, `OrderByBestDiscountDESC`, `OrderByPriceDESC`, `OrderByPriceASC`, `OrderByNameASC`, `OrderByNameDESC`, `OrderByScoreDESC` ([relevance Score](https://help.vtex.com/en/tutorial/how-does-the-score-field-work--1BUZC0mBYEEIUgeQYAKcae)), or `OrderByTopSaleDESC`.
               * `ASC` and `DESC` stand for ascending order and descending order, respectively.
               * The last option (`OrderByTopSaleDESC`) considers the number of sold units of the product in the past 90 days, taking into account only ecommerce orders (no physical stores orders) from `order-placed` events (e.g. without checking if the payment was approved).
               * If the store has an app, it is possible to consider the events from the app as long as they are implemented on the store's side, they aren't implemented by default.
               * In case the shopper has an ad-blocking extension or a browser restriction that disables sending events, their navigation will not be counted.
               *
               * @default "OrderByScoreDESC"
               */
              orderByField?:
                | 'OrderByReleaseDateDESC'
                | 'OrderByBestDiscountDESC'
                | 'OrderByPriceDESC'
                | 'OrderByPriceASC'
                | 'OrderByNameASC'
                | 'OrderByNameDESC'
                | 'OrderByScoreDESC'
                | 'OrderByTopSaleDESC'
              /**
               * Determines whether the search result should hide unavailable items (`true`) or not (`false`).
               *
               * @default false
               */
              hideUnavailableItems?: boolean
              /**
               * Defines the filters' behavior.
               * When set to `Dynamic`, it restricts the results according to the filters that the user has already selected.
               * If set to `Static`, all filters will continue to be displayed to the user, even if there are no results.
               *
               * @default "Static"
               */
              facetsBehavior?: 'Dynamic' | 'Static'
              /**
               * Refines the SKUs returned for each product in the query.
               * The fewer returned SKUs, the more performant your shelf query will be.
               * Available value options: `FIRST_AVAILABLE` (returns only the first available SKU), `ALL_AVAILABLE` (returns all available SKUs), and `ALL` (returns all product's SKUs).
               *
               * @default "ALL_AVAILABLE"
               */
              skusFilter?: 'FIRST_AVAILABLE' | 'ALL_AVAILABLE' | 'ALL'
              /**
               * Defines whether the search data will be up-to-date (`default`) or fetched using the Cache (`skip`).
               * You should only use the last option if you prefer faster queries than the most up-to-date prices or inventory.
               *
               * @default "default"
               */
              simulationBehavior?: 'default' | 'skip'
              /**
               * Defines which price should be displayed when different installments are available.
               * Possible values are: `MAX_WITHOUT_INTEREST` (displays the maximum installment option with no interest attached to it) or `MAX_WITH_INTEREST` (displays the maximum installment option whether it has interest attached to it or not).
               *
               * @default "MAX_WITHOUT_INTEREST"
               */
              installmentCriteria?: 'MAX_WITHOUT_INTEREST' | 'MAX_WITH_INTEREST'
              /**
               * List of payment systems that should not be considered when displaying the installment options to users.
               * This prop configuration only works if the `installmentCriteria` prop was also declared.
               * In case it was not, all available payment systems will be displayed regardless.
               *
               * @default undefined
               */
              excludedPaymentSystems?: string
              /**
               * List of payment systems that should be considered when displaying the installment options to users.
               * This prop configuration only works if the `installmentCriteria` prop was also declared.
               * In case it was not, all available payment systems will be displayed regardless.
               *
               * @default undefined
               */
              includedPaymentSystems?: string
            }
          }
      >
      /**
       * Enables mobile users to switch between the available layout modes.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-layout-switcher': Block
      /**
       * Builds the whole search result page structure for scenarios in which no result was fetched.
       * It is rendered whenever users search for a term that doesn't return a product.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-not-found-layout': Block<{
        /**
         * Indicates which filters should be hidden.
         *
         * @default undefined
         */
        hiddenFacets?: {
          /**
           * Determines whether Brand filters should be hidden (`true`) or not (`false`).
           *
           * @default false
           */
          brands?: boolean
          /**
           * Determines whether Category filters should be hidden (`true`) or not (`false`).
           *
           * @default false
           */
          categories?: boolean
          /**
           * Determines whether Price filters should be hidden (`true`) or not (`false`).
           *
           * @default false
           */
          priceRange?: boolean
          /**
           * Indicates which specification filters should be hidden.
           *
           * @default undefined
           */
          specificationFilters?: {
            /**
             * Determines whether specification filters should be hidden (`true`) or not (`false`).
             *
             * @default false
             */
            hideAll?: boolean
            /**
             * Object array of specification filters that should be hidden.
             *
             * @default undefined
             */
            hiddenFilters?: {
              /**
               * Name of the specification filter that you want to hide.
               *
               * @default undefined
               */
              name: string
            }[]
          }
        }
        /**
         * Determines whether the resulting amount in each filter should appear beside its name on the `filter-navigator.v3` block as (`true`) or (`false`)
         *
         * @default false
         */
        showFacetQuantity?: boolean
        /**
         * Whether the facet title should appear on selected filters section on the `filter-navigator.v3` block as (`true`) or (`false`)
         *
         * @default false
         */
        showFacetTitle?: boolean
        /**
         * ID to be used in Google Analytics to track store metrics based on the Search Result block.
         *
         * @default "Search result"
         */
        trackingId?: string
        /**
         * Controls how the search results page will be displayed to users using the mobile layout.
         *
         * @default undefined
         */
        mobileLayout?: {
          /**
           * Defines the default layout for the mobile search results page.
           * Possible values are: `normal`, `small` or `inline`.
           *
           * @default "normal"
           */
          mode1?: 'normal' | 'small' | 'inline'
          /**
           * Defines which layout will be set for the mobile search results page when users click on the layout selector button.
           * Possible values also are `normal`, `small`, or `inline`.
           *
           * @default "small"
           */
          mode2?: 'normal' | 'small' | 'inline'
        }
        /**
         * Name of the gallery layout to be used by default in the search results page.
         * This prop is required when several layouts are explicitly defined by the `gallery` block.
         * This prop's value must match the layout name defined in the `name` prop from `layouts` object.
         *
         * @default undefined
         */
        defaultGalleryLayout?: string
        /**
         * The minimum number of facets must be displayed on the interface for a search bar to be displayed.
         * If you declare `0`, the search bar will always be displayed.
         *
         * @default undefined
         */
        thresholdForFacetSearch?: number
        /**
         * Keeps page customizations even when the user applies new filters.
         * This prop will only change the URL’s query string rather than the entire URL, preventing a full page reload whenever filters are applied.
         *
         * @default false
         */
        preventRouteChange?: boolean
      }>
      /**
       * Displays the gallery with all the products found in the search.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      gallery: Block<{
        /**
         * @see {@link https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-building-a-search-results-page-with-multiple-layouts}
         */
        layouts?: Layout[]
        /**
         * @see {@link https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-building-a-search-results-page-with-multiple-layouts}
         */
        ListSummary?: string
        /**
         * @see {@link https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-building-a-search-results-page-with-multiple-layouts}
         */
        GridSummary?: string
      }>
      /**
       * Logical block that allows users to switch between the available gallery`s layouts.
       * To know how to build your search results with multiple layouts, access the [documentation](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-building-a-search-results-page-with-multiple-layouts).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'gallery-layout-switcher': Block<{
        /**
         * List of layouts used to arrange and display the items on the search results page.
         * If no value is provided, the `gallery` block must receive a `product-summary-shelf` block instead as a child.
         *
         * @default undefined
         */
        layouts?: Layout[]
        /**
         * Defines which blocks should be rendered per layout.
         * The prop name is not `undefined`, you must include the value passed on the `component` prop.
         * This prop's value must match the block name of your choosing to be rendered in that specific layout.
         *
         * @default undefined
         */
        undefined?: string
        /**
         * Defines the item interval at which the **Gallery** should render a custom product-summary` block.
         * For example, declaring `5` would render a custom block at every four items rendered, as shown [on this image](https://user-images.githubusercontent.com/1207017/101687291-0cff1780-3a49-11eb-9c00-678b70001c8a.jpg).
         * It is important to know that this prop doesnt support `layouts` yet.
         *
         * @default undefined
         */
        customSummaryInterval?: number
        /**
         * Defines a block to be rendered according to the interval defined by the `customSummaryInterval` prop.
         *
         * @default undefined
         */
        CustomSummary?: string
      }>
      /**
       * Defines how each layout option should be rendered for users.
       * To know how to build your search results with multiple layouts, access the [documentation](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-building-a-search-results-page-with-multiple-layouts).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'gallery-layout-option': Block<{
        /**
         * Name of the layout option.
         *
         * @default undefined
         */
        name: string
      }>
      /**
       * Contains a text and a description for the page that was not found in the search.
       * It must be declared as a child of `search-not-found-layout`.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'not-found': Block
      /**
       * Decides, behind the scenes, which block will be displayed: either the `gallery` block (if products are found) or the `not-found` block (if the selected filters lead to an empty search results page).
       * This means that both `gallery` and `not-found` must be declared as `search-content` children.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-content': Block
      /**
       * Displays the total number of products being displayed on the search results page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-products-count-per-page': Block
      /**
       * Displays a progress bar of products being displayed on the search results page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-products-progress-bar': Block
      /**
       * Allows users to choose the product ordination on the search results page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'order-by': Block<{
        $type: 'v2'
        /**
         * Indicates which sorting options by specification will be displayed.
         * This only works for stores using `vtex.search-resolver@1.x`.
         *
         * @default undefined
         */
        specificationOptions?: {
          /**
           * Value that will be sent for sorting in the API.
           * It must be in the format `{specification key}:{asc/desc}`.
           * For example: `"size:desc"` or `"priceByUnit:asc"`.
           *
           * @default undefined
           */
          value: string
          /**
           * Label that will be displayed in the sorting options.
           * E.g.: `"Price by unit, ascending"`.
           *
           * @default undefined
           */
          label: string
        }[]
        /**
         * Indicates which sorting options will be hidden.
         * (e.g. `["OrderByNameASC", "OrderByNameDESC"]`)
         *
         * @default undefined
         */
        hiddenOptions?: (
          | 'OrderByTopSaleDESC'
          | 'OrderByReleaseDateDESC'
          | 'OrderByBestDiscountDESC'
          | 'OrderByPriceDESC'
          | 'OrderByPriceASC'
          | 'OrderByNameASC'
          | 'OrderByNameDESC'
          | 'OrderByCollection'
        )[]
        /**
         * Determines whether the selected order value (e.g. `Relevance`) will be displayed (`true`) or not (`false`).
         *
         * @default true
         */
        showOrderTitle?: boolean
      }>
      /**
       * Allows users to apply different filters to the search.
       * On mobile, renders a button that, when clicked on, displays all available filters in a sidebar.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'filter-navigator': Block<{
        $type: 'v3'
        /**
         * Determines whether the category filters should use the `href` attribute with the category pages' URLs (`href`) or not (`default`).
         * By default, the filters use HTML divs with `role="link"`.
         * You may change this behavior by setting this prop's value to `href`, thereby creating a link building to improve the SEO ranking of your category pages.
         *
         * @default "default"
         */
        categoryFiltersMode?: 'href' | 'default'
        /**
         * Determines whether the **Filter Navigator** layout should be responsive (`responsive`) or not (`desktop`).
         * You may use `desktop` when the **Filter Navigator** is configured to display in a [drawer](https://developers.vtex.com/docs/guides/vtex-store-drawer).
         *
         * @default "responsive"
         */
        layout?: 'responsive' | 'desktop'
        /**
         * Maximum number of departments to be displayed before the **See More** button is triggered.
         *
         * @default 8
         */
        maxItemsDepartment?: number
        /**
         * Maximum number of category items to be displayed before the **See More** button is triggered.
         *
         * @default 8
         */
        maxItemsCategory?: number
        /**
         * Makes the search filters start out collapsed (`true`) or open (`false`).
         *
         * @default false
         */
        initiallyCollapsed?: boolean
        /**
         * Defines how many filters can be opened simultaneously on the **Filter Navigator** component.
         * The possible values are `many` (more than one filter can be opened simultaneously) and `one` (only one filter can be opened).
         * Notice that if `one` is declared, all filters will collapse before user interaction, regardless of the value passed to the `initiallyCollapsed` prop.
         *
         * @default "many"
         */
        openFiltersMode?: 'many' | 'one'
        /**
         * HTML tag for the filter's title.
         *
         * @default "h5"
         */
        filtersTitleHtmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
        /**
         * Scrolls the page to the top (`auto` or `smooth`) or not (`none`) when selecting a facet.
         *
         * @default "none"
         */
        scrollToTop?: 'auto' | 'smooth' | 'none'
        /**
         * Determines whether a filter selector with more than 10 filter options should shorten the list and display a `See more` button (`true`) or not (`false`).
         *
         * @default false
         */
        truncateFilters?: boolean
        /**
         * Determines whether the **Filter Navigator** component should be closed when users click outside of it (`true`) or not (`false`).
         * This prop only works if the `openFiltersMode` prop is set as `one`.
         *
         * @default false
         */
        closeOnOutsideClick?: boolean
        /**
         * Determines whether an overview of the applied filters should be displayed (`show`) or not (`hide`).
         *
         * @default "hide"
         */
        appliedFiltersOverview?: 'show' | 'hide'
        /**
         * Determines whether the **Filter Navigator** should display the total number of products on mobile devices (`show`) or not (`hide`).
         *
         * @default "hide"
         */
        totalProductsOnMobile?: 'show' | 'hide'
        /**
         * Determines whether the `filter-navigator.v3` will be rendered on mobile using the full screen width (`true`) or not (`false`).
         *
         * @default false
         */
        fullWidthOnMobile?: boolean
        /**
         * Defines how mobile users should navigate on the filter selector component.
         * The possible values are `page` (only one list of options can be seen at a time) or `collapsible` (all lists of options can be seen simultaneously).
         *
         * @default "page"
         */
        navigationTypeOnMobile?: 'page' | 'collapsible'
        /**
         * Determines whether the search results on mobile should be updated according to filter selection (`true`) or not (`false`).
         * This prop only works if the `preventRouteChange` prop is declared as `true`.
         *
         * @default false
         */
        updateOnFilterSelectionOnMobile?: boolean
        /**
         * Determines whether the search filters on mobile opens to the left (`drawerLeft`) or to the right (`drawerRight`)
         *
         * @default "drawerLeft"
         */
        drawerDirectionMobile?: 'drawerLeft' | 'drawerRight'
        /**
         * Determines whether a clear button (responsible for erasing all filter options selected by the user) should be displayed alongside the filter name (`true`) or not (`false`).
         *
         * @default false
         */
        showClearByFilter?: boolean
        /**
         * Determines whether a clear button should be displayed (`true`) or not (`false`).
         * This button will reset all selected filters.
         *
         * @default false
         */
        showClearAllFiltersOnDesktop?: boolean
        /**
         * Determines whether a text field enters the desired price range should be displayed (`inputAndSlider`) or not (`slider`).
         *
         * @default "slider"
         */
        priceRangeLayout?: 'inputAndSlider' | 'slider'
        /**
         * Array of objects that applies custom sorting rules for filters.
         * The default behavior sorts the items by quantity, in descending order.
         *
         * @default undefined
         */
        facetOrdering?: {
          /**
           * Facet key that will be sorted.
           * Possible values are `category-1`, `category-2`, `category-3` (for department, category and subcategory), `brand` or a product specification name.
           *
           * @default undefined
           */
          key: string
          /**
           * Field from facets that should be used when sorting the entries.
           * Possible values are `name` and `quantity`.
           *
           * @default undefined
           */
          orderBy: 'name' | 'quantity'
          /**
           * Determines whether the filter should be sorted by ascending (`ASC`) or descending (`DESC`) order.
           *
           * @default "ASC"
           */
          order: 'ASC' | 'DESC'
        }[]
        /**
         * Displays a badge for mobile users indicating how many active filters there are.
         *
         * @default false
         */
        showQuantityBadgeOnMobile?: boolean
      }>
      /**
       * Displays the total amount of products found for that search.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'total-products': Block<{
        $type: 'v2'
      }>
      /**
       * Displays a title for the search that was done.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-title': Block<{
        $type: 'v2'
      }>
      /**
       * Displays the **Show More** button.
       * This button is not rendered when the user is on the last page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-fetch-more': Block<{
        /**
         * Which HTML element will be displayed for `Show more` button component.
         * Possible values are: `a` (displays a `<a>` element with `href` and `rel` attributes) or `button` (displays a `<button>` element without `href` and `rel` attributes).
         *
         * @default "button"
         */
        htmlElementForButton?: 'a' | 'button'
      }>
      /**
       * Displays the **Show Previous** button.
       * This button is not rendered when the user is on the first page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'search-fetch-previous': Block<{
        /**
         * Which HTML element will be displayed for `Show previous` button component.
         * Possible values are: `a` (displays a `<a>` element with `href` and `rel` attributes) or `button` (displays a `<button>` element without `href` and `rel` attributes).
         *
         * @default "button"
         */
        htmlElementForButton?: 'a' | 'button'
      }>
      /**
       * Displays an `X` button on the filter sidebar on mobile.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.search-result}
       */
      'sidebar-close-button': Block<{
        /**
         * Size of the button icon.
         *
         * @default 30
         */
        size?: number
        /**
         * Type of the button icon.
         *
         * @default "line"
         */
        type?: string
      }>
    }
  }
}

type Layout = {
  /**
   * Layout name.
   * This value must be unique i.e. not equal to other layout names declared in the `gallery` block.
   *
   * @default undefined
   */
  name: string
  /**
   * Names the `undefined` prop from the `gallery` block, which is responsible for declaring the block to be rendered in this layout.
   * This prop's value can be any of your choosing as long as it is PascalCased i.e. has the first letter of each word in its name capitalized.
   * **Caution**: For this to work, the chosen value must be named after the `gallery` block's `undefined` prop.
   * *Do not use the `component` prop's value to directly pass the desired block name itself.*
   * Check out the example below in order to understand the underlying logic behind this prop.
   *
   * @default undefined
   */
  component: string
  /**
   * Number of items to be displayed in each row of this layout.
   * This prop works with [responsive values](https://developers.vtex.com/docs/apps/vtex.responsive-values/), therefore it also accepts an object with different numbers for desktop, tablet or phone screen sizes.
   *
   * @default undefined
   */
  itemsPerRow:
    | number
    | {
        /**
         * Number of slides to be shown on desktop devices.
         *
         * @default undefined
         */
        desktop?: number
        /**
         * Number of slides to be shown on tablet devices.
         *
         * @default undefined
         */
        tablet?: number
        /**
         * Number of slides to be shown on phone devices.
         *
         * @default undefined
         */
        phone?: number
      }
  /**
   * Controls which SKU will be initially selected in the product summary.
   *
   * @default "FIRST_AVAILABLE"
   */
  preferredSKU?:
    | 'FIRST_AVAILABLE'
    | 'LAST_AVAILABLE'
    | 'PRICE_ASC'
    | 'PRICE_DESC'
}
