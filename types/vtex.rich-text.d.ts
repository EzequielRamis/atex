import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The Rich Text brings texts to your store and everything else that Markdown language is able to.
       * It converts texts written in Markdown language and displays its content as HTML elements.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.rich-text}
       */
      'rich-text': Block<{
        /**
         * Tachyon token to be used as font.
         *
         * @default "t-body"
         */
        font?:
          | string
          | {
              desktop: string
              tablet: string
              mobile: string
            }
        /**
         * Tachyon token to be used as text color.
         *
         * @default "c-on-base"
         */
        textColor?: string
        /**
         * Text written in markdown language to be displayed.
         *
         * @default undefined
         */
        text?: string
        /**
         * Text alignment inside the component.
         *
         * @default "LEFT"
         */
        textAlignment?: 'LEFT' | 'CENTER' | 'RIGHT'
        /**
         * Text position in relation to the component.
         *
         * @default "LEFT"
         */
        textPosition?: 'LEFT' | 'CENTER' | 'RIGHT'
      }>
    }
  }
}
