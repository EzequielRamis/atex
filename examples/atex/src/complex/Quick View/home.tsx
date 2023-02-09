// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store
    $type="home"
    _blocks={
      <list-context
        $type="product-list"
        _blocks={
          <product-summary $type="shelf">
            <modal-trigger $id="quickview">
              <product-summary-image />
              <modal-layout $id="quickview">
                <product-summary-name />
                <product-images />
                <product-summary-sku-selector />
                <product-summary-quantity />
                <add-to-cart-button />
              </modal-layout>
            </modal-trigger>
            <product-summary-name />
            <product-selling-price />
          </product-summary>
        }
      >
        <slider-layout />
      </list-context>
    }
  />
)
