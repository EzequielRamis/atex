import { AtexBlock } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `info-card` component groups information related to a single topic.
       * They often include some text, an image, and a call-to-action button.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/infocard}
       */
      'info-card': AtexBlock<{
        /**
         * Where to display the call-to-action component's linked URL, as the name for a browsing context (a tab, window, or iframe).
         *
         * @default "_self"
         */
        callToActionLinkTarget?: '_self' | '_blank' | '_parent' | '_top'
        /**
         * Mode of the call-to-action component.
         *
         * @default "button"
         */
        callToActionMode?: 'none' | 'button' | 'link'
        /**
         * Text displayed inside the call-to-action component.
         *
         * @default ""
         */
        callToActionText?: string
        /**
         * URL of the call-to-action component.
         *
         * @default ""
         */
        callToActionUrl?: string
        /**
         * Headline of the Info Card.
         *
         * @default null
         */
        headline?: string
        /**
         * ID of the container element.
         *
         * @default null
         */
        htmlId?: string
        /**
         * Path to the image used on desktop devices.
         *
         * @default ""
         */
        imageUrl?: string
        /**
         * Redirect URL used when the image component is clicked.
         *
         * @default ""
         */
        imageActionUrl?: string
        /**
         * Style of the Info Card component.
         * If `true`, the image component is used as the background and text is displayed over it.
         *
         * @default false
         */
        isFullModeStyle?: boolean
        /**
         * Where to display the linked URL when the Info Card component is clicked.
         *
         * @default "_self"
         */
        linkTarget?: '_self' | '_blank' | '_parent' | '_top'
        /**
         * Path to the image used on mobile devices.
         * If empty, the desktop image is used.
         *
         * @default null
         */
        mobileImageUrl?: string
        /**
         * Text to be displayed underneath the headline.
         * If not provided, it will not be rendered.
         *
         * @default null
         */
        subhead?: string
        /**
         * Text alignment inside the component: `left`, `center` or `right`.
         * This prop is ignored if `isFullModeStyle` is true.
         *
         * @default "left"
         */
        textAlignment?: 'left' | 'center' | 'right'
        /**
         * Text mode used to process the text from `headline` and `subhead` props.
         *
         * @default "html"
         */
        textMode?: 'html' | 'rich-text'
        /**
         * Position of the text component: `left`, `center` or `right`.
         *
         * @default "left"
         */
        textPosition?: 'left' | 'center' | 'right'
      }>
    }
  }
}
