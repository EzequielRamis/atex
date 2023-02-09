import { AtexLooseBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `product-sku-attributes` block displays a list of the current SKU variations of a product.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/productskuattributes}
       */
      'product-sku-attributes': AtexLooseBlock
    }
  }
}
