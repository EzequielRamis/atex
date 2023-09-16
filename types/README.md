# atex/types

This directory contains the following declaration files:

- `index.d.ts`: Basic JSX types.
- `modules.d.ts`: Declarations to support `.jsonc` imports.
- `all.d.ts`: A complete list of types for each VTEX App:

```json
"types": [ "atex/types/all" ]
```

Same as above but separated by Apps, if you're not using one in particular and don't want its types to appear in your IDE:

```jsonc
"types": [
  "atex/types",
  // "atex/types/vtex.add-to-cart-button",
  // "atex/types/vtex.breadcrumb",
  // "atex/types/vtex.category-menu",
  // "atex/types/vtex.checkout-summary",
  // "atex/types/vtex.condition-layout",
  // "atex/types/vtex.disclosure-layout",
  // "atex/types/vtex.flex-layout",
  // "atex/types/vtex.iframe",
  // "atex/types/vtex.login",
  // "atex/types/vtex.menu",
  // "atex/types/vtex.minicart",
  // "atex/types/vtex.modal-layout",
  // "atex/types/vtex.order-placed",
  // "atex/types/vtex.overlay-layout",
  // "atex/types/vtex.product-availability",
  // "atex/types/vtex.product-comparison",
  // "atex/types/vtex.product-customizer",
  // "atex/types/vtex.product-gifts",
  // "atex/types/vtex.product-highlights",
  // "atex/types/vtex.product-list",
  // "atex/types/vtex.product-price",
  // "atex/types/vtex.product-quantity",
  // "atex/types/vtex.product-specifications",
  // "atex/types/vtex.product-summary",
  // "atex/types/vtex.responsive-layout",
  // "atex/types/vtex.rich-text",
  // "atex/types/vtex.sandbox",
  // "atex/types/vtex.search",
  // "atex/types/vtex.search-result",
  // "atex/types/vtex.seller-selector",
  // "atex/types/vtex.similar-products-variants",
  // "atex/types/vtex.slider-layout",
  // "atex/types/vtex.stack-layout",
  // "atex/types/vtex.sticky-layout",
  // "atex/types/vtex.store-components",
  // "atex/types/vtex.store-drawer",
  // "atex/types/vtex.store-footer",
  // "atex/types/vtex.store-form",
  // "atex/types/vtex.store-header",
  // "atex/types/vtex.store-link",
  // "atex/types/vtex.store-locator",
  // "atex/types/vtex.store-media",
  // "atex/types/vtex.store-newsletter",
  // "atex/types/vtex.store-video",
  // "atex/types/vtex.tab-layout",
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
