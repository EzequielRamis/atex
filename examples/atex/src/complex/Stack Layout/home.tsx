// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store
    $type="home"
    _blocks={
      <stack-layout $id="cta">
        <image
          $id="cta"
          blockClass="cover"
          maxWidth="100%"
          maxHeight="400"
          src="https://appliancetheme.vtexassets.com/assets/app/src/appliancecat___1b7592b49667c6a89203a0997e06bc87.jpg"
        />
        <link
          $id="cta"
          displayMode="button"
          buttonProps={{
            variant: 'primary',
            size: 'large',
          }}
          href="/washer"
          label="Check these awesome discounts"
        />
      </stack-layout>
    }
  />
)
