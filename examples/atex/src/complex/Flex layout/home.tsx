// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store
    $type="home"
    _blocks={
      <>
        <rich-text />
        <info-card $id="button-right" />
        <info-card $id="button-left" />
        <flex-layout $type="row">
          <info-card
            $id="rethink"
            imageUrl="https://appliancetheme.vteximg.com.br/arquivos/utensilios-cozinha-min.png"
            isFullModeStyle
            headline="Time to rethink your kitchen"
            callToActionText="Discover"
            textPosition="center"
          />
          <flex-layout $type="col">
            <image
              $id="electronics"
              src="https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/electronics_banner___25d69b49f8224b369375e68513b4d593.png"
              maxWidth="100%"
            />
            <image
              $id="major-appliances"
              src="https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/major_appliance_banner___bb10093866a127345ddfbcca3efa5022.png"
              maxWidth="100%"
            />
          </flex-layout>
        </flex-layout>
      </>
    }
  />
)
