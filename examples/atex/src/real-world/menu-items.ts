export const items: {
  id: string
  name: string
  subitems?: {
    id: string
    name: string
  }[][]
}[] = [
  { id: 'new-in', name: 'New In' },
  {
    id: 'women',
    name: 'Women',
    subitems: [
      [
        { id: 'pants-leggings', name: 'Pants & Leggings' },
        { id: 'tops', name: 'Tops' },
        { id: 'jackets-sweatshirts', name: 'Jackets & Sweatshirts' },
        { id: 'short-sleeve-shirts', name: 'Short Sleeve Shirts' },
        { id: 'thermal-shirts', name: 'Thermal Shirts' },
        { id: 'long-sleeve-shirts', name: 'Long Sleeve Shirts' },
        { id: 'tank-tops', name: 'Tank Tops' },
      ],
      [
        { id: 'bikers-shorts', name: 'Bikers & Shorts' },
        { id: 'skirts', name: 'Skirts' },
        { id: 'swimwear', name: 'Swimwear' },
        { id: 'accessories', name: 'Accessories' },
      ],
    ],
  },
  {
    id: 'men',
    name: 'Men',
    subitems: [
      [
        { id: 'sweatshirts-jackets', name: 'Sweatshirts & Jackets' },
        { id: 'pants', name: 'Pants' },
        { id: 'short-sleeve-shirts', name: 'Short Sleeve Shirts' },
        { id: 'thermal-shirts', name: 'Thermal Shirts' },
        { id: 'tank-tops', name: 'Tank Tops' },
        { id: 'shorts-bermudas', name: 'Shorts and Bermudas' },
        { id: 'backpacks-bags', name: 'Backpacks and Bags' },
      ],
      [
        { id: 'swimwear', name: 'Swimwear' },
        { id: 'accessories', name: 'Accessories' },
      ],
    ],
  },
  { id: 'sale', name: 'Sale' },
  {
    id: 'outlet',
    name: 'Outlet',
    subitems: [
      [
        { id: 'pants-leggings', name: 'Pants & Leggings' },
        { id: 'tops', name: 'Tops' },
        { id: 'jackets-sweatshirts', name: 'Jackets & Sweatshirts' },
        { id: 'tank-tops-shirts', name: 'Tank Tops and Shirts' },
        { id: 'shorts-skirts', name: 'Shorts and Skirts' },
      ],
    ],
  },
  {
    id: 'kids',
    name: 'Kids',
    subitems: [
      [
        { id: 'tops', name: 'Tops' },
        { id: 'leggings', name: 'Leggings' },
        { id: 'thermal-shirts', name: 'Thermal Shirts' },
        { id: 'shirts', name: 'Shirts' },
        { id: 'skirts', name: 'Skirts' },
        { id: 'pants', name: 'Pants' },
        { id: 'shorts', name: 'Shorts' },
      ],
      [
        { id: 'coats', name: 'Coats' },
        { id: 'accessories', name: 'Accessories' },
      ],
    ],
  },
  { id: 'add-your-store', name: 'Add Your Store' },
]
