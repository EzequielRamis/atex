import { AtexBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `search-bar` component shows a search bar with autocomplete options and displays the matching products as well.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/searchbar}
       */
      'search-bar': AtexBlock<{
        /**
         * If `true` when clicked on result link of brand, department or category will link to the corresponding brand, department or category page.
         * When `false` will always go to a full text search page.
         *
         * @default false
         */
        attemptPageTypeSearch?: boolean
        /**
         * Autocomplete Horizontal alignment.
         * Possible values are: `left`, `center`, `right`.
         *
         * @default "left"
         */
        autocompleteAlignment?: 'left' | 'center' | 'right'
        /**
         * If true, the autocomplete will fill the whole window horizontally.
         *
         * @default false
         */
        autocompleteFullWidth?: boolean
        /**
         * Define if the search input should autofocus or not.
         *
         * @default undefined
         */
        autoFocus?: boolean
        /**
         * Define if input should blur on submit.
         *
         * @default false
         */
        blurOnSubmit?: boolean
        /**
         * Defines how the autocomplete component should be displayed.
         * Possible values are: `overlay` (suggestions overlapping other components) and `container` (displays the suggestion within a container).
         *
         * @default "overlay"
         */
        containerMode?: 'overlay' | 'container'
        /**
         * Define when to use the compact version of the component.
         *
         * @default undefined
         */
        compactMode?: boolean
        /**
         * Template for a custom url.
         * It can have a substring `${term}` used as placeholder to interpolate the searched term.
         * (e.g. `/search?query=${term}`).
         *
         * @default undefined
         */
        customSearchPageUrl?: string
        /**
         * The autocomplete can have touchable/clickable components.
         * Interacting with those components may trigger blur and touch events that will close the autocomplete.
         * When set to true, this prop will disable those handlers.
         *
         * @default false
         */
        disableBlurAndTouchEndHandler?: boolean
        /**
         * Define the component display mode, such as which buttons should be visible.
         *
         * @default "clear-button"
         */
        displayMode?:
          | 'clear-button'
          | 'search-and-clear-buttons'
          | 'search-button'
        /**
         * Shows a placeholder when the ResultList hasn't results to displayed.
         *
         * @default undefined
         */
        emptyPlaceholder?: string
        /**
         * Define if the search icon is on left or right position.
         *
         * @default undefined
         */
        hasIconLeft?: boolean
        /**
         * @deprecated
         * Custom classes for the search icon.
         * Use the CSS handle `searchBarIcon`.
         *
         * @default undefined
         */
        iconClasses?: string[]
        /**
         * Defines the value for the `type` HTML attribute (from the `<input>` field).
         * Possible values are: `search` and `text`.
         * We strongly recommend you to use `search` as it fixes some iOS issues.
         * The `text` value is only kept as default for backwards compatibility.
         *
         * @default "text"
         */
        inputType?: 'search' | 'text'
        /**
         * Max width of the search bar.
         *
         * @default undefined
         */
        maxWidth?: number | string
        /**
         * If defined, it will block searches where the term length is lesser than `minSearchTermLength`.
         *
         * @default undefined
         */
        minSearchTermLength?: number
        /**
         * Defines if autocomplete should be open on input focus or not.
         *
         * @default false
         */
        openAutocompleteOnFocus?: boolean
        /**
         * Placeholder to be used on the input.
         *
         * @default undefined
         */
        placeholder?: string
        /**
         * @deprecated
         * Defines if search icon should submit on click.
         * Use the `displayMode` prop instead.
         *
         * @default false
         */
        submitOnIconClick?: boolean
      }>
    }
  }
}
