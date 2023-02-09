// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store
    $type="home"
    _blocks={
      <tab-layout $id="home">
        <tab-list $id="home">
          <tab-list
            $type="item"
            $id="home1"
            tabId="majorAppliances"
            label="Major Appliances"
            defaultActiveTab
          />
          <tab-list
            $type="item"
            $id="home2"
            tabId="electronics"
            label="Electronics"
          />
        </tab-list>
        <tab-content $id="home">
          <tab-content
            $type="item"
            $id="home1"
            tabId="majorAppliances"
          >
            <rich-text
              $id="home1"
              text="Área do conteúdo da tab-list.item com  tabId = majorAppliances"
              textPosition="CENTER"
              font="t-heading-3"
            />
          </tab-content>
          <tab-content
            $type="item"
            $id="home2"
            tabId="electronics"
          >
            <rich-text
              $id="home2"
              text="Área do conteúdo da tab-list.item com  tabId = electronics"
              textPosition="CENTER"
              font="t-heading-3"
            />
          </tab-content>
        </tab-content>
      </tab-layout>
    }
  />
)
