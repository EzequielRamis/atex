import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The Store Link app provides blocks for displaying links in other theme blocks, such as Product Summary.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-link}
       */
      link: AtexBlock<{
        /**
         * A link that uses the product context, such as a product slug or department.
         * For example, `/{slug}/p`.
         */
        $type?: 'product'
        /**
         * Link text.
         *
         * @default undefined
         */
        label?: string
        /**
         * Link URL.
         *
         * @default "#"
         */
        href?: string
        /**
         * Element anchor to scroll after navigation.
         * (E.g. `"#footer"`)
         *
         * @default undefined
         */
        scrollTo?: string
        /**
         * Where the linked URL will be displayed.
         * This prop works the same way as the target from [HTML `<a>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
         * Since the [*anchor* element's target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target) default is `_self`, this prop will be set to `_self` if it is undefined.
         *
         * @default undefined
         */
        target?: string
        /**
         * How the link will be displayed.
         * Possible values are: `anchor` (displays a normal link with no styles) or `button` (displays a button that can be customized using the `buttonProps` prop).
         *
         * @default "anchor"
         */
        displayMode?: 'anchor' | 'button'
        /**
         * How the link button will be displayed.
         * Use this prop only when the `displayMode` prop is set as `button`.
         *
         * @default { variant: "primary", size: "regular" }
         */
        buttonProps?: {
          /**
           * Link button that has visual prominence.
           * Possible values are: `primary` or `secondary` (values are set following the [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms/Button)).
           *
           * @default "primary"
           */
          variant?: 'primary' | 'secondary'
          /**
           * Link button size.
           * Possible values are: `small`, `regular` or `large` (values are set following the [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms/Button)).
           *
           * @default "regular"
           */
          size?: 'small' | 'regular' | 'large'
        }
        /**
         * RegExp, with global match, used to remove special characters within product specifications (e.g., if you want to use `/[%]/g` then `escapeLinkRegex = [%]`).
         *
         * @default undefined
         */
        escapeLinkRegex?: string
        /**
         * This prop specifies the relationship between the current document and linked ones for better SEO.
         * This prop works the same way as the `rel` attribute from `<a>`, the [HTML anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
         * You can see supported values [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         *
         * @default undefined
         */
        rel?: string
      }>
    }
  }
}
