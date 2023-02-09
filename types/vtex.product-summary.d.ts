import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Logical block that provides the needed structure for the Product Summary component through its child blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary': AtexBlock<{
        $type?: string
      }>
      /**
       * Renders a list for product [attachments](https://help.vtex.com/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU).
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-attachment-list': AtexLooseBlock
      /**
       * Renders the product brand.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-brand': AtexLooseBlock
      /**
       * Renders the Buy button.
       * This block must only be configured if your store uses the [Minicart v1](https://github.com/vtex-apps/minicart/blob/383d7bbd3295f06d1b5854a0add561a872e1515c/docs/README.md).
       * If your store uses the [Minicart v2](https://developers.vtex.com/docs/guides/vtex-minicart), please configure the [Add to Cart button](https://developers.vtex.com/docs/guides/vtex-add-to-cart-button) instead.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-buy-button': AtexBlock<{
        /**
         * Whether the user should be redirected to Checkout after clicking on the Buy Button (`true`) or not (`false`).
         *
         * @default false
         */
        inOneClickBuy?: boolean
        /**
         * Custom text that overwrites the default Buy Button text.
         *
         * @default undefined
         */
        buyButtonText?: string
        /**
         * Sets the Buy Button display mode.
         * Possible values are: `displayButtonAlways` (it will always be displayed), `displayButtonHover` (only displayed on hover), or `displayButtonNone` (it will be hidden for users).
         *
         * @default 'displayButtonAlways'
         */
        displayBuyButton?:
          | 'displayButtonAlways'
          | 'displayButtonHover'
          | 'displayButtonNone'
        /**
         * Defines a redirect link to the Toast displayed when an item is added to your cart.
         *
         * @default "/checkout/#/cart"
         */
        customToastURL?: string
        /**
         * Sets the Buy Button behavior when it is clicked on.
         * Possible values are: `alwaysGoToProduct` (redirect users to the product page), `default` (redirect users to the minicart), or `alwaysAddToTheCart` (add the selected SKU to the minicart).
         * When choosing this last option, be careful: use it only if there are SKU Selectors for each product variation.
         * This way, users can properly select their desired SKU.
         *
         * @default "default"
         */
        buyButtonBehavior?:
          | 'alwaysGoToProduct'
          | 'default'
          | 'alwaysAddToTheCart'
      }>
      /**
       * Renders the product description.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-description': AtexLooseBlock
      /**
       * Renders the product image.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-image': AtexBlock<{
        /**
         * Whether a discount badge (if there is any) will be displayed on the product's image (`true`) or not (`false`).
         *
         * @default true
         */
        showBadge?: boolean
        /**
         * Text displayed on the discount badge (in case the badge is configured to be displayed on the image).
         *
         * @default undefined
         */
        badgeText?: string
        /**
         * Whether collection badges (if there are any) will be displayed (`true`) or not (`false`).
         *
         * @default false
         */
        showCollections?: boolean
        /**
         * Defines the Product Summary Image display mode.
         * Possible values are: `normal` and `inline`.
         *
         * @default "normal"
         */
        displayMode?: 'normal' | 'inline'
        /**
         * Defines the Product Summary Image placeholder image.
         *
         * @default undefined
         */
        placeholder?: string
        /**
         * Matches the value defined in the `imageLabel` field from the admin's Catalog.
         * Once matched, it defines which product image will be the main image displayed in the Product Summary component.
         *
         * @default undefined
         */
        mainImageLabel?:
          | string
          | {
              /**
               * Text value that matches the value defined in the `imageLabel` field from the admin's Catalog.
               * Once matched, it defines which product image will be the main image displayed in the Product Summary component.
               * If you set a label and no match is found, the main image of the product will be shown instead.
               *
               * @default undefined
               */
              label?: string
              /**
               * Criteria to define if the image's `label` searched value should be exactly as provided or if it just needs to contain the substring anywhere in the image's `label`.
               * Possible values are: `exact` (finds the image that matches exactly the string filled in `label` field) and `contains` (finds the first image that contains the substring filled in `label` field).
               *
               * @default "exact"
               */
              labelMatchCriteria?: 'exact' | 'contains'
            }
        /**
         * @deprecated
         * Text value that matches the value defined in the `imageLabel` field from the admin's Catalog.
         * Once matched, it defines which product image will be displayed when the user is hovering.
         * If you set a label and no match is found, no image will be displayed during the hover.
         * *Caution*: Use the `hoverImage` prop instead.
         *
         * @default undefined
         */
        hoverImageLabel?: string
        /**
         * Defines which criteria should be used to define the hover image according to the product images in the admin's Catalog.
         *
         * @default undefined
         */
        hoverImage?: {
          /**
           * Criteria that should be used to define the hover image according to the product images in the admin's Catalog.
           * Possible values are: `label` (the hover image will be the one that matches the `label` value) and `index` (the hover image should be the one with the same `index` value).
           *
           * @default "label"
           */
          criteria?: 'label' | 'index'
          /**
           * Text string to match the desired image's `label` value.
           * If no match is found, no image will be displayed during the hover.
           * *Caution*: This prop should only be used when the `criteria` prop is set as `label`.
           *
           * @default undefined
           */
          label?: string
          /**
           * Criteria to define if the image's `label` searched value should be exactly as provided or if it just needs to contain the substring anywhere in the image's `label`.
           * Possible values are: `exact` (finds the image that matches exactly the string filled in `label` field) and `contains` (finds the first image that contains the substring filled in `label` field).
           * *Caution*: This prop should only be used when the `criteria` prop is set as `label`.
           *
           * @default "exact"
           */
          labelMatchCriteria?: 'exact' | 'contains'
          /**
           * Index number to match with the desired image's.
           * If no match is found, no image will be displayed during the hover.
           * *Caution*: This prop should only be used when the `criteria` prop is set as `index`.
           *
           * @default undefined
           */
          index?: number
        }
        /**
         * Defines the Product Summary Image width.
         *
         * @default undefined
         */
        width?: {
          /**
           * Image width for desktop users.
           *
           * @default undefined
           */
          desktop?: number
          /**
           * Image width for mobile device users.
           *
           * @default undefined
           */
          mobile?: number
        }
        /**
         * Defines the Product Summary Image height.
         *
         * @default undefined
         */
        height?: {
          /**
           * Image height for desktop users.
           *
           * @default undefined
           */
          desktop?: number
          /**
           * Image height for mobile device users.
           *
           * @default undefined
           */
          mobile?: number
        }
        /**
         * Aspect ratio of the Product Summary Image.
         * It defines whether the image should be displayed in a square, portrait, landscape or in another format.
         * The prop value should follow the [common aspect ratio notation](https://en.wikipedia.org/wiki/Aspect_ratio_(image)), which gives two numbers separated by a colon.
         * For example: `1:1` for a square format or `3:4` for an upright portrait.
         * Note that this prop won't work if you've already configured the `width` or `height` props.
         *
         * @default undefined
         */
        aspectRatio?: {
          /**
           * Image aspect ratio for desktop users.
           *
           * @default undefined
           */
          desktop?: number
          /**
           * Image aspect ratio for mobile device users.
           *
           * @default undefined
           */
          mobile?: number
        }
        /**
         * Defines the Product Summary Image max height.
         * Note that this prop won't work if you've already configured the `width` or `height` props.
         *
         * @default undefined
         */
        maxHeight?: {
          /**
           * Image maximum height for desktop users.
           *
           * @default undefined
           */
          desktop?: number
          /**
           * Image maximum height for mobile device users.
           *
           * @default undefined
           */
          mobile?: number
        }
      }>
      /**
       * Renders the product name.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-name': AtexBlock<{
        /**
         * Defines the visibility on certain properties.
         *
         * @default { showProductReference: false, showBrandName: false, showSku: false }
         */
        showFieldsProps?: {
          /**
           * Show product SKU.
           *
           * @default false
           */
          showSku?: boolean
          /**
           * Show product reference.
           *
           * @default false
           */
          showProductReference?: boolean
          /**
           * Show brand name.
           *
           * @default false
           */
          showBrandName?: boolean
        }
        /**
         * HTML tag used.
         * It can be: `div`, `h1`, `h2`, `h3`.
         *
         * @default "h1"
         */
        tag?: 'div' | 'h1' | 'h2' | 'h3'
      }>
      /**
       * Renders the selected SKU name.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-sku-name': AtexLooseBlock
      /**
       * @deprecated
       * Renders the product price.
       * This block has been deprecated in favor of the Product Price app.
       * Although support for this block is still available, we strongly recommend using the Product Price app.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-price': AtexLooseBlock
      /**
       * Renders the SKU Selector block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-summary-sku-selector': AtexBlock<{
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
      /**
       * Renders badges based on product specifications.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-summary}
       */
      'product-specification-badges': AtexBlock<{
        /**
         * The name of the specification group in which the desired specifications are.
         *
         * @default ""
         */
        specificationGroupName?: string
        /**
         * Pass the name of the specification you want to target.
         * If left empy, will target all of the group.
         *
         * @default ""
         */
        specificationName?: string
        /**
         * Pass this if you want the specification to be displayed only if it has this exact value.
         * If left empty, the badge will be showed regardless of the specification value.
         *
         * @default ""
         */
        visibleWhen?: string
        /**
         * Choose the value that will appear if the specification condition is met and the badge will be showed.
         * Pass `SPECIFICATION_NAME` if you want to display the specification name.
         * Pass `SPECIFICATION_VALUE` if you want to display its value.
         * Pass any other custom string to display it.
         *
         * @default null
         */
        displayValue?: string
        /**
         * Pass this if you want to control the conditions to show certain specifications.
         * Each value of the array should be a valid object of the `Option` format.
         *
         * @default null
         */
        specificationsOptions?: {
          /**
           * Pass the name of the specification you want to target.
           * If empty, option will not be checked.
           *
           * @default ""
           */
          specificationName?: string
          /**
           * Pass this if you want this option to be applied when the specification has the exactly same value as specified in `visibleWhen`.
           * If left empty, the badge will be showed regardless of the specification value.
           *
           * @default null
           */
          visibleWhen?: string
          /**
           * Choose the value that will appear if the option condition is met and the badge will be showed.
           * Pass `SPECIFICATION_NAME` if you want to show the specification name.
           * Pass `SPECIFICATION_VALUE` if you want to show its value.
           * Pass any other custom string to show it.
           *
           * @default null
           */
          displayValue?: string
        }[]
        /**
         * Determines if the group of specifications are showed horizontally or vertically.
         *
         * @default "vertical"
         */
        orientation?: 'vertical' | 'horizontal'
      }>
    }
  }
}
