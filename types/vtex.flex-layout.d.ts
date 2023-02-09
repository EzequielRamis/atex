import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Builds a complex custom layout using the rows and columns concept, setting the desired structure and positioning blocks on a page.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.flex-layout}
       */
      'flex-layout': AtexBlock<FlexLayoutRow | FlexLayoutCol>
    }
  }
}

type FlexLayoutRow = {
  $type: 'row'
  /**
   * The color of the border.
   *
   * @default undefined
   */
  borderColor?: string
  /**
   * A `number` or `string` magnitude for applying the `bw` Tachyons token to the row.
   */
  borderWidth?: number | string
  /**
   * An array to define on which sides of the row a border should apply (`top`, `right`, `bottom`, `left`, or `all`).
   *
   * @default undefined
   */
  border?: string | string[]
  /**
   * A `number` or `string` magnitude for applying the `pr` Tachyons token to the columns in the `flex-layout.row`.
   *
   * @default undefined
   */
  colGap?: number | string
  /**
   * Controls the width of the columns in the `flex-layout.row`.
   *
   * @default "equal"
   */
  colSizing?: 'equal' | 'auto'
  /**
   * Whether the component should occupy all the available width from its parent.
   *
   * @default false
   */
  fullWidth?: boolean
  /**
   * Controls horizontal alignment for the items in the `flex-layout.row`.
   * It defaults to `between` if `colSizing` is `auto` and to `left` otherwise.
   *
   * @default "left"
   */
  horizontalAlign?: 'left' | 'right' | 'center' | 'between' | 'around'
  /**
   * Controls the space between columns and borders of the `flex-layout.row`, following the `justify-content` CSS property.
   * Possible values are `between` (no space added between borders and columns) and `around` (space added).
   *
   * @default "between"
   */
  colJustify?: 'between' | 'around'
  /**
   * A `number` or `string` magnitude for applying the `mb` Tachyons token to the row.
   *
   * @default undefined
   */
  marginBottom?: number | string
  /**
   * A `number` or `string` magnitude for applying the `mt` Tachyons token to the row.
   *
   * @default undefined
   */
  marginTop?: number | string
  /**
   * A `number` or `string` magnitude for applying the `pb` Tachyons token to the row.
   *
   * @default undefined
   */
  paddingBottom?: number | string
  /**
   * A `number` or `string` magnitude for applying the `pt` Tachyons token to the row.
   *
   * @default undefined
   */
  paddingTop?: number | string
  /**
   * Whether the `flex-layout.row` should break into a column layout on mobile.
   *
   * @default false
   */
  preserveLayoutOnMobile?: boolean
  /**
   * Prevents the row from stretching horizontally to fill its parent's width.
   *
   * @default false
   */
  preserveHorizontalStretch?: boolean
  /**
   * Prevents the row from stretching vertically to fill its parent's height with the `items-stretch` token.
   *
   * @default false
   */
  preventVerticalStretch?: boolean
  /**
   * A `number` or `string` magnitude for applying the `pb` Tachyons token to columns in the `flex-layout.row`.
   *
   * @default undefined
   */
  rowGap?: number | string
  /**
   * This prop adds an HTML id to `flexRow`.
   * This allows accessing a page section using links.
   *
   * @default undefined
   */
  htmlId?: string
}

type FlexLayoutCol = {
  $type: 'col'
  /**
   * The color of the border.
   *
   * @default undefined
   */
  borderColor?: string
  /**
   * A `number` or `string` magnitude for applying the `bw` Tachyons token to the row.
   */
  borderWidth?: number | string
  /**
   * An array to define on which sides of the row a border should apply (`top`, `right`, `bottom`, `left`, or `all`).
   *
   * @default undefined
   */
  border?: string | string[]
  /**
   * Controls horizontal alignment for the items in the `flex-layout.col`.
   *
   * @default "left"
   */
  horizontalAlign?: 'left' | 'right' | 'center'
  /**
   * A `number` or `string` magnitude for applying the `ml` Tachyons token to the column.
   *
   * @default undefined
   */
  marginLeft?: number | string
  /**
   * A `number` or `string` magnitude for applying the `mr` Tachyons token to the column.
   *
   * @default undefined
   */
  marginRight?: number | string
  /**
   * A `number` or `string` magnitude for applying the `pl` Tachyons token to the column.
   *
   * @default undefined
   */
  paddingLeft?: number | string
  /**
   * A `number` or `string` magnitude for applying the `pr` Tachyons token to the column.
   *
   * @default undefined
   */
  paddingRight?: number | string
  /**
   * Prevents the row from stretching vertically to fill its parent's height with `height: 100%`, using `height: "auto"` instead.
   *
   * @default false
   */
  preventVerticalStretch?: boolean
  /**
   * A `number` or `string` magnitude for applying the `pb` Tachyons token to rows in the `flex-layout.col`.
   *
   * @default undefined
   */
  rowGap?: number | string
  /**
   * Controls vertical alignment for the items in the `flex-layout.col`.
   *
   * @default "top"
   */
  verticalAlign?: 'top' | 'middle' | 'bottom'
  /**
   * Sets the width of the column.
   * Accepts either a percentage or `"grow"`.
   *
   * @default undefined
   */
  width?: string
}
