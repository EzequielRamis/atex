// from https://learn.vtex.com/docs/course-basic-blocks-lang-en

export default () => (
  <store $type="home">
    <rich-text
      text="**Hello World!**"
      textPosition="CENTER"
    />
    <info-card
      $id="button-right"
      isFullModeStyle={false}
      textPosition="right"
      imageUrl="https://appliancetheme.vteximg.com.br/arquivos/cozinha-rosa-min.png"
      headline="Vintage Pink"
      subhead="Give your kitchen a boho style adding vintage apparels.<br>Available until January 2020."
      callToActionMode="button"
      callToActionText="Explore"
      callToActionUrl="/sale/d"
      textAlignment="center"
    />
    <info-card
      $id="button-left"
      isFullModeStyle={false}
      textPosition="left"
      imageUrl="https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png"
      headline="Shining chrome"
      subhead="Give your kitchen a cool style adding warm metallic finishes.<br>Available until January 2020."
      callToActionMode="link"
      callToActionText="Go to collection"
      textAlignment="center"
    />
  </store>
)
