import { AtexLooseBlock, AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Displays your store's Footer.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-footer}
       */
      footer: AtexLooseBlock
      'footer-layout': AtexBlock<{
        $type?: 'desktop' | 'mobile'
      }>
      'social-networks': AtexBlock<{
        /**
         * Text to show above of list of links.
         *
         * @default undefined
         */
        title?: string
        /**
         * Array of social networks.
         *
         * @default undefined
         */
        socialNetworks?: {
          /**
           * Link to the social network profile.
           */
          url: string
          /**
           * Possible values: `facebook`, `twitter`, `linkedin`, `youtube`, `pinterest`
           */
          name: 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'pinterest'
        }[]
        /**
         * Whether the icons are colored or not.
         *
         * @default false
         */
        showInColor?: boolean
      }>
      'accepted-payment-methods': AtexBlock<{
        /**
         * Possible values: `mastercard`, `visa`, `diners club`
         *
         * @default undefined
         */
        paymentMethods: ('mastercard' | 'visa' | 'diners club')[]
        /**
         * Whether the icons are colored or not.
         *
         * @default false
         */
        showInColor?: boolean
      }>
      'powered-by': AtexBlock<{
        /**
         * Whether the icons are colored or not.
         *
         * @default false
         */
        showInColor?: boolean
      }>
    }
  }
}
