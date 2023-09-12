import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Defines how the modal content will be triggered through its children blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.modal-layout}
       */
      'modal-trigger': Block<{
        /**
         * Defines whether the modal content should be triggered by user click (`click`), when the page is fully loaded (`load`), or when the page is fully loaded, but the modal will appear just once per session (`load-session`).
         *
         * @default 'click'
         */
        trigger?: 'click' | 'load' | 'load-session'
        /**
         * Store event ID that triggers the `modal-trigger` block (hence triggering the opening of `modal-layout` blocks on the interface as well).
         *
         * @default undefined
         */
        customPixelEventId?: string
        /**
         * Store event name that triggers the `modal-trigger` block (hence triggering the opening of `modal-layout` blocks on the interface as well).
         * Some event examples are `'addToCart'` and `'removeFromCart'`.
         * Note that using this prop will make the associated `modal-layout` open in **every** event with the specified name if no `customPixelEventId` is set.
         *
         * @default undefined
         */
        customPixelEventName?: string
      }>
      /**
       * Defines how the modal content will be rendered through its children blocks.
       * You can declare the `modal-header` and `modal-content` blocks, described below, as children to create a modal with a header and footer.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.modal-layout}
       */
      'modal-layout': Block<{
        /**
         * Defines how users should scroll the modal.
         * Possible values are: `body` (users can scroll the whole modal by normally scrolling the page) and `content` (users can scroll the modal *content* when hovering over it).
         *
         * @default "content"
         */
        scroll?: 'body' | 'content'
        /**
         * Defines whether the modal should be closed when pressing the `Esc` key (`true`) or not (`false`).
         *
         * @default false
         */
        disableEscapeKeyDown?: boolean
        /**
         * Defines whether the modal should fill the whole screen (`true`) or not (`false`).
         * This prop is responsive, i.e., it adapts to the device breakpoints.
         *
         * @default false
         */
        fullScreen?: boolean
        /**
         * Defines whether the modal will have a clickable backdrop (`clickable`) or no backdrop at all (`none`).
         * This prop is responsive, i.e., it adapts to the device breakpoints.
         *
         * @default "clickable"
         */
        backdrop?: 'clickable' | 'none'
        /**
         * Store event ID that triggers the `modal-layout` block (hence triggering the closing of `modal-layout` blocks on the interface as well).
         *
         * @default undefined
         */
        customPixelEventId?: string
        /**
         * Store event name that triggers the `modal-layout` block (hence triggering the closing of `modal-layout` blocks on the interface as well).
         * Some event examples are `'addToCart'` and `'removeFromCart'`.
         * Note that using this prop will make the associated `modal-layout` close in **every** event with the specified name if no `customPixelEventId` is set.
         *
         * @default undefined
         */
        customPixelEventName?: string
      }>
      /**
       * Renders a close button and the blocks listed as its children, building a modal header.
       * Note that it does not automatically render a header for your modal.
       * Instead, you should create the modal header as you desire using the children list of this block.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.modal-layout}
       */
      'modal-header': Block<{
        /**
         * Defines whether the close icon button should be rendered in the modal header (`true`) or not (`false`).
         *
         * @default true
         */
        showCloseButton?: boolean
        /**
         * Size (in pixels) of the close icon button in the modal header.
         *
         * @default 32
         */
        iconCloseSize?: number
      }>
      /**
       * Defines how the modal content will be rendered through its children blocks.
       * Preferably, this block should be used along with the `modal-header` block in order to create a modal with a header and a footer.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.modal-layout}
       */
      'modal-content': Block
      /**
       * Logical block that only renders its child blocks that, in turn, render call-to-action buttons inside the modal, such as a confirmation button.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.modal-layout}
       */
      'modal-actions': Block<
        | { $type?: undefined }
        | {
            /**
             * Button that closes the modal when clicked.
             * It is extremely useful when your modal only has a form or a disclaimer box providing information to the users.
             */
            $type: 'close'
            /**
             * Defines the text to be rendered in the close button.
             * The default value of this prop depends on the store's default language, which is set according to the website binding.
             *
             * @default `Cancel`, `Cancelar`, or `Cancelar` for stores whose default language is, respectively, English, Spanish, or Portuguese.
             */
            label?: string
          }
      >
    }
  }
}
