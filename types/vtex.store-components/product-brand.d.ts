import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `product-brand` block displays either the name or the logo of a product's brand.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/productbrand}
       */
      'product-brand': Block<{
        /**
         * The brand ID.
         * If no value is declared, the product context should provide the data.
         *
         *  @default undefined
         */
        brandId?: number
        /**
         * The brand name.
         * If no value is declared, the product context should provide the data.
         *
         * @default undefined
         */
        brandName?: string
        /**
         * Defines if the product brand will be displayed by name or logo.
         * Possible values are `logo` and `text`.
         *
         * @default "logo"
         */
        displayMode?: 'logo' | 'text'
        /**
         * The brand names or brand IDs listed in the array will never be displayed by the Brand component.
         * It is usually useful to hide default or test brand names/logos on the store front.
         *
         * @default undefined
         */
        excludeBrands?: string[]
        /**
         * Defines the behavior of the Product Brand block when set to display a brand logo but no image is registered in the VTEX admin's Catalog.
         * If `true`, it allows the logo to be replaced with the brand name.
         * If `false`, neither the brand name nor the brand logo are displayed.
         * **This prop is only available for the `logo` display mode.**
         *
         * @default true
         */
        fallbackToText?: boolean
        /**
         * The logo height.
         * **This prop is only available for the `logo` display mode.**
         *
         * @default 100
         */
        height?: number
        /**
         * Defines if the loading placeholder should have the size of the logo or the text.
         * Possible values are: `logo` and `text`.
         *
         * @default undefined
         */
        loadingPlaceholder?: 'logo' | 'text'
        /**
         * @deprecated
         * Use `withLink` instead.
         *
         * @default false
         */
        logoWithLink?: boolean
        /**
         * Defines the scenarios in which the product brand should have a link that leads to its website.
         * Possible values are: `none` (never includes the link), `logo` (includes the link whenever the brand logo is displayed), `text` (includes the link whenever the brand name is displayed), and `logoAndText` (includes the link whenever the brand logo or the brand name is displayed).
         *
         * @default "none"
         */
        withLink?: 'none' | 'logo' | 'text' | 'logoAndText'
      }>
    }
  }
}
