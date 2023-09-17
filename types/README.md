# atex/types

This directory contains the following declaration files:

- `index.d.ts`: Basic JSX types.
- `modules.d.ts`: Declarations to support `.jsonc` imports.
- `all.d.ts`: A complete list of types for each VTEX App:

```json
"types": [ "@eramis/atex/types/all" ]
```

Same as above but separated by Apps, if you're not using one in particular and don't want its types to appear in your IDE:

```jsonc
"types": [
  "@eramis/atex/types",
  // "@eramis/atex/types/vtex.add-to-cart-button",
  // "@eramis/atex/types/vtex.breadcrumb",
  // "@eramis/atex/types/vtex.category-menu",
  // "@eramis/atex/types/vtex.checkout-summary",
  // "@eramis/atex/types/vtex.condition-layout",
  // "@eramis/atex/types/vtex.disclosure-layout",
  // "@eramis/atex/types/vtex.flex-layout",
  // "@eramis/atex/types/vtex.iframe",
  // "@eramis/atex/types/vtex.login",
  // "@eramis/atex/types/vtex.menu",
  // "@eramis/atex/types/vtex.minicart",
  // "@eramis/atex/types/vtex.modal-layout",
  // "@eramis/atex/types/vtex.order-placed",
  // "@eramis/atex/types/vtex.overlay-layout",
  // "@eramis/atex/types/vtex.product-availability",
  // "@eramis/atex/types/vtex.product-comparison",
  // "@eramis/atex/types/vtex.product-customizer",
  // "@eramis/atex/types/vtex.product-gifts",
  // "@eramis/atex/types/vtex.product-highlights",
  // "@eramis/atex/types/vtex.product-list",
  // "@eramis/atex/types/vtex.product-price",
  // "@eramis/atex/types/vtex.product-quantity",
  // "@eramis/atex/types/vtex.product-specifications",
  // "@eramis/atex/types/vtex.product-summary",
  // "@eramis/atex/types/vtex.responsive-layout",
  // "@eramis/atex/types/vtex.rich-text",
  // "@eramis/atex/types/vtex.sandbox",
  // "@eramis/atex/types/vtex.search",
  // "@eramis/atex/types/vtex.search-result",
  // "@eramis/atex/types/vtex.seller-selector",
  // "@eramis/atex/types/vtex.similar-products-variants",
  // "@eramis/atex/types/vtex.slider-layout",
  // "@eramis/atex/types/vtex.stack-layout",
  // "@eramis/atex/types/vtex.sticky-layout",
  // "@eramis/atex/types/vtex.store-components",
  // "@eramis/atex/types/vtex.store-drawer",
  // "@eramis/atex/types/vtex.store-footer",
  // "@eramis/atex/types/vtex.store-form",
  // "@eramis/atex/types/vtex.store-header",
  // "@eramis/atex/types/vtex.store-link",
  // "@eramis/atex/types/vtex.store-locator",
  // "@eramis/atex/types/vtex.store-media",
  // "@eramis/atex/types/vtex.store-newsletter",
  // "@eramis/atex/types/vtex.store-video",
  // "@eramis/atex/types/vtex.tab-layout",
]
```

## Basic components

- [x] [Add To Cart Button](https://developers.vtex.com/docs/apps/vtex.add-to-cart-button)
- [x] [Search](https://developers.vtex.com/docs/apps/vtex.search)
- [x] [Breadcrumb](https://developers.vtex.com/docs/apps/vtex.breadcrumb)
- [x] [Store Footer](https://developers.vtex.com/docs/apps/vtex.store-footer)
- [x] [Store Header](https://developers.vtex.com/docs/apps/vtex.store-header)
- [x] [Login](https://developers.vtex.com/docs/apps/vtex.login)
- [x] [Menu](https://developers.vtex.com/docs/apps/vtex.menu) (Incomplete due to the official VTEX documentation)
- [x] [Minicart](https://developers.vtex.com/docs/apps/vtex.minicart) (Incomplete due to the official VTEX documentation)
- [x] [Summary](https://developers.vtex.com/docs/apps/vtex.checkout-summary) (Incomplete due to the official VTEX documentation)
- [x] [Order Placed](https://developers.vtex.com/docs/apps/vtex.order-placed)
- [x] [Product Customizer](https://developers.vtex.com/docs/apps/vtex.product-customizer)
- [x] [Product Highlights](https://developers.vtex.com/docs/apps/vtex.product-highlights)
- [x] [Product List](https://developers.vtex.com/docs/apps/vtex.product-list)
- [x] [Product Price](https://developers.vtex.com/docs/apps/vtex.product-price)
- [x] [Product Quantity](https://developers.vtex.com/docs/apps/vtex.product-quantity)
- [x] [Product Specifications](https://developers.vtex.com/docs/apps/vtex.product-specifications)
- [x] [Product Summary](https://developers.vtex.com/docs/apps/vtex.product-summary) (Except for `list-context.product-list`)
- [x] [Rich Text](https://developers.vtex.com/docs/apps/vtex.rich-text)
- [x] [Search Result](https://developers.vtex.com/docs/apps/vtex.search-result)
- [ ] [Store Image](https://developers.vtex.com/docs/apps/vtex.store-image) (Unable to write types for `list-context.image-list`)

## Store components

- [ ] [Autocomplete Result List](https://developers.vtex.com/docs/apps/vtex.store-components/autocompleteresults) (Deprecated in favor of [autocomplete-result-list.v2](https://developers.vtex.com/docs/apps/vtex.search))
- [x] [Back To Top Button](https://developers.vtex.com/docs/apps/vtex.store-components/backtotopbutton)
- [x] [Image](https://developers.vtex.com/docs/apps/vtex.store-components/image)
- [x] [Info Card](https://developers.vtex.com/docs/apps/vtex.store-components/infocard)
- [x] [Logo](https://developers.vtex.com/docs/apps/vtex.store-components/logo)
- [x] [Notification](https://developers.vtex.com/docs/apps/vtex.store-components/notification)
- [x] [Product Brand](https://developers.vtex.com/docs/apps/vtex.store-components/productbrand)
- [x] [Product Description](https://developers.vtex.com/docs/apps/vtex.store-components/productdescription)
- [x] [Product Images](https://developers.vtex.com/docs/apps/vtex.store-components/productimages)
- [x] [Product Name](https://developers.vtex.com/docs/apps/vtex.store-components/productname)
- [x] [Product SKU Attributes](https://developers.vtex.com/docs/apps/vtex.store-components/productskuattributes)
- [x] [Search Bar](https://developers.vtex.com/docs/apps/vtex.store-components/searchbar)
- [x] [Share](https://developers.vtex.com/docs/apps/vtex.store-components/share)
- [x] [Shipping Simulator](https://developers.vtex.com/docs/apps/vtex.store-components/shippingsimulator)
- [x] [SKU Selector](https://developers.vtex.com/docs/apps/vtex.store-components/skuselector)

## Advanced components

- [x] [Category Menu](https://developers.vtex.com/docs/apps/vtex.category-menu)
- [x] [Iframe](https://developers.vtex.com/docs/apps/vtex.iframe)
- [x] [Product Availability](https://developers.vtex.com/docs/apps/vtex.product-availability)
- [x] [Product Comparison](https://developers.vtex.com/docs/apps/vtex.product-comparison) (Except for all `list-context` and `product-summary` blocks)
- [x] [Product Gifts](https://developers.vtex.com/docs/apps/vtex.product-gifts)
- [x] [Seller Selector](https://developers.vtex.com/docs/apps/vtex.seller-selector)
- [x] [Similar Products Variants](https://developers.vtex.com/docs/apps/vtex.similar-products-variants)
- [x] [Store Drawer](https://developers.vtex.com/docs/apps/vtex.store-drawer)
- [x] [Store Locator](https://developers.vtex.com/docs/apps/vtex.store-locator)
- [x] [Store Form](https://developers.vtex.com/docs/apps/vtex.store-form)
- [x] [Store Link](https://developers.vtex.com/docs/apps/vtex.store-link)
- [x] [Store Media](https://developers.vtex.com/docs/apps/vtex.store-media) (Except for `list-context.media-list`)
- [x] [Store Newsletter](https://developers.vtex.com/docs/apps/vtex.store-newsletter)
- [x] [Store Video](https://developers.vtex.com/docs/apps/vtex.store-video)
- [x] [Sandbox](https://developers.vtex.com/docs/apps/vtex.sandbox)

## Layout Apps

- [x] [Condition Layout](https://developers.vtex.com/docs/apps/vtex.condition-layout)
- [x] [Disclosure Layout](https://developers.vtex.com/docs/apps/vtex.disclosure-layout)
- [x] [Flex Layout](https://developers.vtex.com/docs/apps/vtex.flex-layout)
- [x] [Modal Layout](https://developers.vtex.com/docs/apps/vtex.modal-layout)
- [x] [Overlay Layout](https://developers.vtex.com/docs/apps/vtex.overlay-layout)
- [x] [Responsive Layout](https://developers.vtex.com/docs/apps/vtex.responsive-layout)
- [x] [Slider Layout](https://developers.vtex.com/docs/apps/vtex.slider-layout)
- [x] [Stack Layout](https://developers.vtex.com/docs/apps/vtex.stack-layout)
- [x] [Sticky Layout](https://developers.vtex.com/docs/apps/vtex.sticky-layout)
- [x] [Tab Layout](https://developers.vtex.com/docs/apps/vtex.tab-layout)
