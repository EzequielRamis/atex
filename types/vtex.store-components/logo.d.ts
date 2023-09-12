import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `logo` block displays a logo in the store header.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/logo}
       */
      logo: Block<{
        /**
         * The image fill color.
         *
         * @default "#F71963"
         */
        color?: string
        /**
         * The logo image height.
         *
         * @default 177
         */
        height?: number
        /**
         * The image hyperlink.
         *
         * @default undefined
         */
        href?: string
        /**
         * The label visibility.
         *
         * @default true
         */
        showLabel?: boolean
        /**
         * The image alt description.
         *
         * @default "VTEX logo"
         */
        title?: string
        /**
         * The image soure URL.
         *
         * @default undefined
         */
        url?: string
        /**
         * The logo image width.
         *
         * @default 493
         */
        width?: number
      }>
    }
  }
}
