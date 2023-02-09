import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Renders a list of retail stores and a map with all their locations marked.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-list': AtexBlock<{
        /**
         * Filter fetched Pickup Points by this tag.
         *
         * @default undefined
         */
        filterByTag?: string
        /**
         * Icon used to display store location in map.
         * Input icon URL (`svg` or `png`).
         *
         * @default Google's default
         */
        icon?: string
        /**
         * Icon width in pixels (`px`).
         *
         * @default Image default width
         */
        iconWidth?: number
        /**
         * Icon height in pixels (`px`).
         *
         * @default Image default height
         */
        iconHeight?: number
        /**
         * Map zoom as a number.
         *
         * @default 10
         */
        zoom?: number
        /**
         * Latitude coordinate.
         *
         * @default undefined
         */
        lat?: number
        /**
         * Longitude coordinate.
         *
         * @default undefined
         */
        long?: number
        /**
         * Property (`name` or `distance`) used to sort the stores list.
         *
         * @default "distance"
         */
        sortBy?: 'name' | 'distance'
      }>
      /**
       * Provides the Pickup Point data to other blocks exported by the app, such as the ones listed below.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-group': AtexBlock<{
        /**
         * Title used in the page's HTML `title` tag and Structured Data for SEO purposes.
         * The `{storeName}`, `{storeCity}`, and `/` or `{storeState}` variables can be used in the title text.
         *
         * @default "{storeName}"
         */
        title?: string
        /**
         * Description text used in the page's HTML `description` meta tag and Structured Data for SEO purposes.
         * The `{storeName}`, `{storeCity}`, and `/` or `{storeState}` variables can be used in the description text.
         *
         * @default ""
         */
        description?: string
        /**
         * CSS Selector to select the images included in the page's Structured Data.
         *
         * @default ""
         */
        imageSelector?: string
        /**
         * To provide a unique phone number for each store, a phone number can be entered in the `Instructions` field in the Pickup Points section.
         * The `store-instructions` will display a phone number and it will be included in the page's Structured Data.
         *
         * @default false
         */
        instructionsAsPhone?: boolean
      }>
      /**
       * Renders the store name.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-name': AtexBlock<{
        /**
         * Text to be displayed as store name.
         * `{storeName}`, `{storeCity}`, and `/` or `{storeState}` values can be used to generate the store name.
         *
         * @default undefined
         */
        text?: string
        /**
         * HTML element to wrap the `store-name` block when rendered on the UI.
         *
         * @default "div"
         */
        tag?: string
      }>
      /**
       * Renders a link to return to the previous page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-back-link': AtexBlock<{
        /**
         * Text displayed by `store-back-link` block when rendered on the UI.
         *
         * @default "Back to all stores"
         */
        label?: string
      }>
      /**
       * Renders a map with the retail store's location.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-map': AtexBlock<{
        /**
         * Map width.
         *
         * @default "100%"
         */
        width?: string
        /**
         * Map height.
         *
         * @default "200px"
         */
        height?: string
        /**
         * Map zoom as a `number`.
         *
         * @default 14
         */
        zoom?: number
        /**
         * Icon used to display store location in map.
         * Input icon URL (`svg` or `png`).
         *
         * @default undefined
         */
        icon?: string
      }>
      /**
       * Renders the store's address.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-address': AtexBlock<{
        /**
         * Label for the `store-address` block when rendered on the UI.
         *
         * @default "Store address"
         */
        label?: string
      }>
      /**
       * Renders the store's opening hours.
       * This information comes by default from the Pickup Points configuration, but you can also define manually through the Store's theme.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-hours': AtexBlock<{
        /**
         * Label for the `store-hours` block when rendered on the UI.
         *
         * @default "Store hours"
         */
        label?: string
        /**
         * Hour format.
         * Possible values are `12h` and `24h`.
         *
         * @default "12h"
         */
        format?: '12h' | '24h'
        /**
         * Format {"dayOfWeek": "Sunday", "openingTime": "11:00am", "closingTime": "5:00pm"}
         *
         * @default undefined
         */
        businessHours?: {
          dayOfWeek: string
          openingTime: string
          closingTime: string
        }[]
      }>
      /**
       * Renders a description of the retail store.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-description': AtexBlock<{
        /**
         * Text to be displayed on the store page.
         * Use `{storeName}`, `{storeCity}`, or `{storeState}` within your text to display that store's specific value.
         *
         * @default undefined
         */
        text?: string
      }>
      /**
       * Renders the desired instructions to access the retail store.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-locator}
       */
      'store-instructions': AtexBlock<{
        /**
         * Label for the `store-instructions` block when rendered on the UI.
         *
         * @default "Information"
         */
        label?: string
      }>
    }
  }
}
