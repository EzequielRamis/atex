// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store
    $type="home"
    _blocks={
      <>
        <responsive-layout
          $type="desktop"
          $id="desktop"
        >
          <rich-text
            $id="desktop"
            text="# Your Coffee, Your Way \n ### New Coffee Makers Collection"
            textPosition="CENTER"
            textAlignment="CENTER"
          />
          <image
            $id="desktop"
            src="https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1"
            maxWidth="100%"
            link={{
              url: '/small-appliances/coffee-makers',
            }}
            alt="Coffee Makers Collection"
          />
        </responsive-layout>
        <responsive-layout
          $type="mobile"
          $id="mobile"
        >
          <rich-text
            $id="mobile"
            text="### Your Coffee, Your Way \n #### New Coffee Makers Collection"
            textPosition="CENTER"
            textAlignment="CENTER"
          />
          <image
            $id="mobile"
            src="https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1"
            maxWidth="100%"
            link={{
              url: '/small-appliances/coffee-makers',
            }}
            alt="Coffee Makers Collection"
          />
        </responsive-layout>
      </>
    }
  />
)
