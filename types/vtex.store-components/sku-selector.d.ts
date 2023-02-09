import { AtexBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `sku-selector` block is mainly used in Product Details Pages (PDPs) to display all the SKUs available for a given product.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/SKUSelector}
       */
      'sku-selector': AtexBlock<{
        /**
         * Whether a product variation that leads to an impossible product combination should be displayed with the disabled attribute when `displayMode` is set to `select`.
         * By default, all select options are without the disabled attribute set based on the type of variation.
         *
         * @default false
         */
        disableUnavailableSelectOptions?: boolean
        /**
         * Defines how the product variation names will be displayed (it doesn't apply to product variation images).
         * Possible values are: `default` (displays all variation names), `select` (only displays the selected variation name) or `slider` (displays all variation names in a slider when the number of available options in greater than the value defined in the `sliderDisplayThreshold` prop).
         * Notice that this prop is *responsive*, so you can declare an object as its value specifying a value for each breakpoint (`desktop` and `mobile`).
         *
         * @default "default"
         */
        displayMode?: 'default' | 'select' | 'slider'
        /**
         * Defines if a product variation should be clickable (`true`) or not (`false`).
         * If `true`, the variation won't be displayed.
         * If `false`, the variation is displayed with less opacity.
         * For example, there are two colors for a pair of sneakers: pink and white, and if the pink sneaker is available for only one size, the other sizes won't be displayed (`true`).
         *
         * @default true
         */
        hideImpossibleCombinations?: boolean
        /**
         * Defines if the variations are to be sorted in alphabetical order.
         *
         * @default false
         */
        sortVariationsByLabel?: boolean
        /**
         * Height (in `px`) of the product thumbnail image.
         * You can declare an object as its value in case you want to define a height for each device (`desktop` and `mobile`).
         */
        imageHeight?: number | { desktop: number; mobile: number }
        /**
         * Width (in `px`) of the product thumbnail image.
         * You can declare an object as its value in case you want to define a width for each device (`desktop` and `mobile`).
         */
        imageWidth?: number | { desktop: number; mobile: number }
        /**
         * Controls the user initial selection for available variations when product page is fully loaded.
         * Possible values are: `complete` (selects the first available SKU's variation values), `image` (selects the first available image variation) or `empty` (no variations will be selected when the page is loaded).
         *
         * @default "complete"
         */
        initialSelection?: 'complete' | 'image' | 'empty'
        /**
         * Maximum number of variation items to be displayed in the SKU Selector before the `See more` button.
         * The button will always be displayed 2 items before the number set in `maxItems`.
         *
         * @default 10
         */
        maxItems?: number
        /**
         * Displays a value for the selected variation.
         * This prop replaces the former `showValueNameForImageVariation` (deprecated).
         * Possible values are: `none` (no values are displayed when the variation is selected), `image` (displays only the image value for the selected variation, if any) or `all` (all variation values are displayed).
         *
         * @default "none"
         */
        showValueForVariation?: 'none' | 'image' | 'all'
        /**
         * Controls the size (height and width) in pixels of the navigation arrows rendered when `displayMode` is set as `slider`.
         *
         * @default 12
         */
        sliderArrowSize?: number
        /**
         * Minimum number of product variation names that should be displayed using `slider` display mode.
         * This prop only properly works when `displayMode` is set as `slider`.
         *
         * @default 3
         */
        sliderDisplayThreshold?: number
        /**
         * Controls how many slides should be shown on each type of device when `displayMode` is set as `slider`.
         *
         * @default { desktop: 3, tablet: 2, phone: 1 }
         */
        sliderItemsPerPage?: {
          /**
           * Number of slides to be displayed on desktop devices when `displayMode` is set as `slider`.
           *
           * @default 3
           */
          desktop: number
          /**
           * Number of slides to be displayed on tablet devices when `displayMode` is set as `slider`.
           *
           * @default 2
           */
          tablet: number
          /**
           * Number of slides to be displayed on phone devices when `displayMode` is set as `slider`.
           *
           * @default 1
           */
          phone: number
        }
        /**
         * Whether an error message should be displayed whenever the `BuyButton` is clicked on but no available variation was selected (`true`) or not (`false`).
         *
         * @default true
         */
        showVariationsErrorMessage?: boolean
        /**
         * Where variation names should be displayed.
         * Possible values are: `none` (doesn't display the variation names.
         * Replaces the previous `false` behavior), `variation` (shows the variation name as a header of the items.
         * Replaces the previous `true` behavior), `itemValue` (displays the variation name before with each item's value) and `variationAndItemValue` (behaves as `variation` and `itemValue` at the same time).
         *
         * @default "variation"
         */
        showVariationsLabels?:
          | 'none'
          | 'variation'
          | 'itemValue'
          | 'variationAndItemValue'
        /**
         * First image to be displayed.
         * This prop value must be the same text string defined in the desired product image's `imageLabel` field (from the Catalog module).
         * If you use this prop and no image declaring the same text string in its `imageLabel` field is found, any product image will be randomly rendered instead.
         * To apply the `thumbnailImage` configuration, see the [Configuring custom images for the SKU Selector documentation](https://developers.vtex.com/docs/guides/vtex-io-documentation-configuring-custom-images-for-the-sku-selector).
         *
         * @default undefined
         */
        thumbnailImage?: string
        /**
         * Defines the `margin-bottom` size to be applied in the rendered product variations.
         * Possible values are from `0` to `11` (the prop value is not in `px`, every value represents a tachyons class).
         *
         * @default 7
         */
        variationsSpacing?: number
        /**
         * Defines the scenarios in which the SKU selector should be displayed.
         * Possible values are: `always` (it will always be displayed even if the product has only one SKU option) or `more-than-one` (the SKU Selector is only displayed when the product has more than one SKU option).
         *
         * @default "always"
         */
        visibility?: 'always' | 'more-than-one'
        /**
         * Specifies which product variations should be displayed in the product details page.
         * Notice the following: if you declare a name that doesn't represent a real product variation or an empty array, no variations will be displayed.
         *
         * @default undefined
         */
        visibleVariations?: {
          /**
           * Product variation name.
           *
           * @default undefined
           */
          name: string
        }[]
      }>
    }
  }
}
