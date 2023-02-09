import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.menu}
       */
      menu: AtexBlock<{
        orientation?: 'vertical' | 'horizontal'
        categoryId?: number
        textType?:
          | 't-heading-1'
          | 't-heading-2'
          | 't-heading-3'
          | 't-heading-4'
          | 't-heading-5'
          | 't-body'
          | 't-small'
          | 't-mini'
        title?: string
        additionalDef?: string
        items?: MenuItem[]
        experimentalOptimizeRendering?: boolean
      }>
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.menu}
       */
      'menu-item': AtexBlock<MenuItem>
      /**
       * @see {@link https://developers.vtex.com/docs/apps/vtex.menu}
       */
      submenu: AtexBlock<{
        $type?: 'accordion'
        width?: '100%' | 'auto'
        isOpen?: boolean
        orientation?: 'horizontal' | 'vertical'
        paddingTop?: number | string
        paddingBottom?: number | string
      }>
    }
  }
}

type MenuItem = {
  /**
   * Menu item type, either `category` or `custom`.
   *
   * @default "category"
   */
  type?: 'category' | 'custom'
  /**
   * Menu item ID.
   *
   * @default undefined
   */
  id?: string
  /**
   * Whether the item has highlight.
   *
   * @default undefined
   */
  highlight?: boolean
  /**
   * Icon position relative to the menu item text.
   * Either to the `left` or `right`.
   *
   * @default "left"
   */
  iconPosition?: 'left' | 'right'
  /**
   * Icon props.
   *
   * @default undefined
   */
  iconProps?: {
    /**
     * Icon ID.
     *
     * @default undefined
     */
    id?: string
    /**
     * Whether the item is active or not.
     *
     * @default true
     */
    isActive?: boolean
    /**
     * Icon size.
     *
     * @default 16
     */
    size?: number
    /**
     * Icon view box.
     *
     * @default "0 0 16 16"
     */
    viewBox?: string
    /**
     * Icon classname when `isActive` is true.
     *
     * @default undefined
     */
    activeClassName?: string
    /**
     * Icon classname when `isActive` is false.
     *
     * @default undefined
     */
    mutedClassName?: string
  }
  /**
   * Whether the submenu should always be automatically displayed when its parent is hovered/clicked on (`open`) or not (`closed`).
   *
   * @default "closed"
   */
  onMountBehavior?: 'open' | 'closed'
  /**
   * Item props.
   *
   * @default undefined
   */
  itemProps?:
    | {
        /**
         * Item category ID.
         *
         * @default undefined
         */
        categoryId?: number
        /**
         * Menu item text.
         *
         * @default undefined
         */
        text?: string
      }
    | {
        /**
         * Menu item type, either `internal` or `external`.
         *
         * @default "internal"
         */
        type?: 'internal' | 'external'
        /**
         * Link to where the menu item leads.
         *
         * @default undefined
         */
        href?: string
        /**
         * No follow attribute.
         *
         * @default undefined
         */
        noFollow?: boolean
        /**
         * Menu item tag.
         *
         * @default undefined
         */
        tagTitle?: string
        /**
         * Menu item text.
         *
         * @default undefined
         */
        text?: string
      }
  experimentalOptimizeRendering?: boolean
}
