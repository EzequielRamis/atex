import { items } from './menu-items'

export default () => (
  <>
    <HeaderMenuDesktop />
    <HeaderMenuMobile />
  </>
)

const props = (text: string) => ({
  itemProps: {
    type: 'internal',
    href: '#',
    noFollow: false,
    tagTitle: text,
    text,
  },
})

const HeaderMenuDesktop = () => (
  <menu
    $id="category-menu-desktop"
    orientation="horizontal"
    experimentalOptimizeRendering
  >
    {items.map((item) => (
      <menu-item
        $id={`${item.id}-desktop`}
        id={`menu-item-${item.id}-desktop`}
        blockClass={[`category-${item.id}`]}
        type="custom"
        _blocks={
          item.subitems && (
            <submenu $id={'category-' + item.id}>
              {item.subitems.map((column, index) => (
                <menu
                  $id={`category-${item.id}-submenu-${index}`}
                  orientation="vertical"
                >
                  {column.map((subitem) => (
                    <menu-item
                      $id={`category-${item.id}-subitem-${subitem.id}`}
                      id={`menu-item-${item.id}-subitem-${subitem.id}`}
                      type="custom"
                      {...props(subitem.name)}
                    />
                  ))}
                </menu>
              ))}
            </submenu>
          )
        }
        {...props(item.name)}
      />
    ))}
  </menu>
)

const HeaderMenuMobile = () => (
  <menu
    $id="category-menu-mobile"
    orientation="vertical"
    experimentalOptimizeRendering
  >
    {items.map((item) => (
      <menu-item
        $id={`${item.id}-mobile`}
        id={`menu-item-${item.id}-mobile`}
        blockClass={[`category-${item.id}`]}
        type="custom"
        _blocks={
          item.subitems && (
            <submenu
              $type="accordion"
              $id={'category-' + item.id}
            >
              <menu
                $id={`category-submenu-accordion-${item.id}`}
                orientation="vertical"
              >
                {item.subitems.flat().map((subitem) => (
                  <menu-item
                    $id={`category-${item.id}-subitem-${subitem.id}`}
                  />
                ))}
              </menu>
            </submenu>
          )
        }
        {...props(item.name)}
      />
    ))}
  </menu>
)
