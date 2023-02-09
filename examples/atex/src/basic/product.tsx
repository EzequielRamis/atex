// from https://learn.vtex.com/docs/course-basic-blocks-lang-en

export default () => (
  <store $type="product">
    <breadcrumb />
    <flex-layout
      $type="row"
      $id="main"
      marginTop={6}
    >
      <flex-layout
        $type="col"
        $id="left"
      >
        <product-images />
      </flex-layout>
      <flex-layout
        $type="col"
        $id="right"
        preventVerticalStretch
        verticalAlign="middle"
      >
        <product-name />
        <product-identifier $type="product" />
        <product-price
          showSavings
          showListPrice
        />
        <flex-layout
          $type="row"
          $id="qty-sku"
        >
          <sku-selector />
          <product-quantity />
        </flex-layout>
        <buy-button />
      </flex-layout>
    </flex-layout>
  </store>
)
