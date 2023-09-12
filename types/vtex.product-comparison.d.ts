import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Main block responsible for rendering the drawer from the Product Comparison component in which the items will be compared.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-comparison}
       */
      'product-comparison-drawer': Block
      /**
       * Logical block that, once extended, is responsible for rendering the Product Comparison component's features.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.product-comparison}
       */
      'product-comparison-block': Block<
        | Selector
        | CloseButton
        | ProductSummaryRow
        | GroupedProductSpecifications
        | ProductSpecifications
        | SkuSpecifications
      >
    }
  }
}

type Selector = {
  /**
   * Renders the selector checkbox on the Product Comparison component.
   */
  $type: 'selector'
} & Record<string, any>

type CloseButton = {
  /**
   * Renders the close button on the Product Comparison component.
   */
  $type: 'close-button'
} & Record<string, any>

type ProductSummaryRow = {
  /**
   * Renders the first row to list and compare products on the Product Comparison component.
   */
  $type: 'product-summary-row'
} & Record<string, any>

type GroupedProductSpecifications = {
  /**
   * Renders the section for product specification groups.
   */
  $type: 'grouped-product-specifications'
  /**
   * List of product fields that should be hidden in the Product Comparison page.
   * The desired product fields must be separated by comma.
   *
   * @default undefined
   */
  productSpecificationsToHide?: string[]
  /**
   * List of product specification groups that should be hidden on the Product Comparison page.
   * The desired product specification groups must be separated by comma.
   *
   * @default undefined
   */
  productSpecificationGroupsToHide?: string[]
}

type ProductSpecifications = {
  /**
   * Renders the section for product specifications.
   */
  $type: 'product-specifications'
  /**
   * List of product fields that should be hidden in the Product Comparison page.
   * The desired product fields must be separated by comma.
   *
   * @default undefined
   */
  productSpecificationsToHide?: string[]
}

type SkuSpecifications = {
  /**
   * Renders the section for SKU specifications.
   */
  $type: 'sku-specifications'
  /**
   * List of SKU specification fields that should be hidden on the Product Comparison page.
   * The desired SKU specification fields must be separated by comma.
   *
   * @default undefined
   */
  skuSpecificationsToHide?: string[]
}
