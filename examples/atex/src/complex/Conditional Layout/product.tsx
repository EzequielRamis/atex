// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store $type="product">
    <condition-layout $type="product">
      <condition
        $type="product"
        $id="retro-mixer"
        conditions={[
          {
            subject: 'productId',
            verb: 'is',
            object: '20',
          },
        ]}
      >
        <image
          $id="retro-mixer-banner"
          src="https://appliancetheme.vtexassets.com/assets/app/src/retroimage___92a8271aac7c51d2059193bdbe019016.jpg"
          maxWidth="100%"
          maxHeight="200px"
          blockClass="cover"
        />
      </condition>
    </condition-layout>
    <flex-layout
      $type="row"
      $id="product-breadcrumb"
      marginTop={20}
    >
      <breadcrumb />
    </flex-layout>
    <flex-layout
      $type="row"
      $id="product-main"
      colGap={9}
      rowGap={7}
      marginTop={4}
      marginBottom={7}
      paddingTop={7}
      paddingBottom={7}
    >
      <product-images
        displayThumbnailsArrows
        thumbnailsOrientation="vertical"
      />
      <flex-layout
        $type="col"
        $id="right-col"
        preventVerticalStretch
        rowGap={0}
      >
        <product-name />
        <product-price
          $id="product-details"
          showInstallments
          showSavings
        />
        <sku-selector />
        <flex-layout
          $type="row"
          $id="buy-button"
          marginTop={4}
          marginBottom={7}
        >
          <buy-button />
        </flex-layout>
        <shipping-simulator />
        <share
          $id="default"
          social={{
            Facebook: true,
            WhatsApp: true,
            Twitter: false,
            Pinterest: true,
          }}
        />
      </flex-layout>
    </flex-layout>
  </store>
)
