import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Allows rendering a block under pre-defined conditions.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.condition-layout}
       */
      'condition-layout': AtexBlock<
        | ConditionLayoutProduct
        | ConditionLayoutBinding
        | ConditionLayoutCategory
        | ConditionLayoutTelemarketing
      >
    }
  }
}

type ConditionLayout<T, V> = T & {
  /**
   * List of desired conditions.
   *
   * @default undefined
   */
  conditions?: V[]
  /**
   * Layout rendering criteria.
   * Possible values are: `all` (all conditions must be matched in order to render the layout), `any` (at least one of the conditions must be matched in order to render the layout) or `none` (no conditions must be matched in order to render the layout).
   *
   * @default "all"
   */
  matchType?: 'all' | 'any' | 'none'
  /**
   * Name of the block to be rendered if the conditions are met.
   * If no value is defined, the blocks declared as children of `condition-layout.product` will be rendered instead.
   *
   * @default undefined
   */
  Then?: 'string'
  /**
   * Name of the block to be rendered if the conditions are not met.
   *
   * @default undefined
   */
  Else?: 'string'
}

type ConditionLayoutProduct = ConditionLayout<
  {
    /**
     * Defines the condition logic on the product context and the children blocks that are going to be rendered in case the predefined conditions are met.
     */
    $type: 'product'
  },
  | {
      /**
       * Product's IDs currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'productId'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { id: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Category's IDs currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'categoryId'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { id: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Brand's IDs currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'brandId'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { id: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * ID of the item currently selected by the user.
       *
       * @default undefined
       */
      subject?: 'selectedItemId'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { id: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * List of product clusters currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'productClusters'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { id: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * List of categories currently displayed on the UI.
       * **Note:** only available in the Product Detail Page.
       *
       * @default undefined
       */
      subject?: 'categoryTree'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { id: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * List of product specifications currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'specificationProperties'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { name: string; value?: string }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Whether all product variations currently available on the UI were selected by the user (`true`) or not (`false`).
       *
       * @default undefined
       */
      subject?: 'areAllVariationsSelected'
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Whether the product is available (`true`) or not (`false`).
       *
       * @default undefined
       */
      subject?: 'isProductAvailable'
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Whether the quantity of sellers for the product is more than argument passed.
       *
       * @default undefined
       */
      subject?: 'hasMoreSellersThan'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { quantity: number }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Whether the product is being given a discount on its list price.
       *
       * @default undefined
       */
      subject?: 'hasBestPrice'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { value: boolean }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Whether any of the sellers of the product are included in the list of IDs passed.
       *
       * @default undefined
       */
      subject?: 'sellerId'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { ids: string[] }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
>

type ConditionLayoutBinding = ConditionLayout<
  {
    /**
     * Defines the condition logic on the current binding and the children blocks that are going to be rendered in case the predefined conditions are met.
     */
    $type: 'binding'
  },
  {
    /**
     * ID of the desired store binding.
     *
     * @default undefined
     */
    subject?: 'bindingId'
    /**
     * Defines the condition parameters.
     *
     * @default undefined
     */
    arguments?: { id: string }
    /**
     * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
     *
     * @default true
     */
    toBe?: boolean
  }
>

type ConditionLayoutCategory = ConditionLayout<
  {
    /**
     * Defines the condition logic on the current category page or department page and the children blocks that are going to be rendered in case the predefined conditions are met.
     */
    $type: 'category'
  },
  | {
      /**
       * Category's IDs currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'category'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { ids: string[] }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
  | {
      /**
       * Department's IDs currently displayed on the UI.
       *
       * @default undefined
       */
      subject?: 'department'
      /**
       * Defines the condition parameters.
       *
       * @default undefined
       */
      arguments?: { ids: string[] }
      /**
       * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
       *
       * @default true
       */
      toBe?: boolean
    }
>

type ConditionLayoutTelemarketing = ConditionLayout<
  {
    /**
     * Defines the condition logic on the user role (telemarketing) and the children blocks that are going to be rendered in case the predefined conditions are met.
     */
    $type: 'telemarketing'
  },
  {
    /**
     * Value of the impersonable setting.
     *
     * @default undefined
     */
    subject?: 'impersonable'
    /**
     * Defines the condition parameters.
     *
     * @default undefined
     */
    arguments?: { value: boolean }
    /**
     * Whether the data fetched in the `subject` prop must met the predefined conditions to render the new layout (`true`) or not (`false`).
     *
     * @default true
     */
    toBe?: boolean
  }
>
