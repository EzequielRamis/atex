import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Shows the store department list on a customizable menu.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.category-menu}
       */
      'category-menu': Block<{
        /**
         * Shows all departments category in menu.
         *
         * @default true
         */
        showAllDepartments?: boolean
        /**
         * Indicates the disposition of the menu on the screen.
         * Possible values: `left`, `center`, `right`
         *
         * @default "center"
         */
        menuDisposition?: 'left' | 'center' | 'right'
        /**
         * Decides if the subcategories will be displayed.
         *
         * @default true
         */
        showSubcategories?: boolean
        /**
         * List of departments `items` to be displayed on the menu.
         *
         * @default []
         */
        departments?: {
          /**
           * The department Id to be displayed on the menu.
           */
          id: number
        }[]
        /**
         * Use this as `true` to render the category menu in a sidebar.
         *
         * @default false
         */
        mobileMode?: boolean
        /**
         * Determine how subcategories are sorted.
         *
         * @default "name"
         */
        sortSubcategories?: 'name'
      }>
    }
  }
}
