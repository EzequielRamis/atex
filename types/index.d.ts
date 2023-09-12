export type BasicBlock = {
  /**
   * Block identifier.
   *
   * @default undefined
   */
  $id?: string
  /**
   * Block ID of your choosing to be used in CSS customization.
   *
   * @default undefined
   */
  blockClass?: string | string[]
  /**
   * `"blocks"` attribute.
   *
   * @default undefined
   */
  _blocks?: string[]
  /**
   * `"title"` attribute.
   *
   * @default undefined
   */
  _title?: string
  /**
   * Raw `"props"` attribute.
   *
   * @default undefined
   */
  _props?: Record<string, any>
}

/**
 * @see {@link https://github.com/EzequielRamis/atex#atex-block}
 */
export type Block<T = Record<string, any>> = BasicBlock & T

/**
 * @see {@link https://github.com/EzequielRamis/atex#atex-component}
 */
export type Component<T> = (props: T, children?: string[]) => string[]

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [k: string]: Block

      /**
       * IO store builder is a opinionated way to use IO capabilities to quickly build store components that can be reused across ecommerce stores and interact seamlessly with its APIs and existing components.
       *
       * @see {@link https://github.com/vtex-apps/store}
       */
      store: Block
    }
    type Element = string[]
  }
}
