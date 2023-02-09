// from https://learn.vtex.com/docs/course-basic-blocks-lang-en

export default () => (
  <store $type="search">
    <search-result-layout
      _blocks={
        <>
          <search-result-layout $type="desktop">
            <breadcrumb $type="search" />
            <search-title $type="v2" />
            <total-products $type="v2" />
            <order-by $type="v2" />
            <search-fetch-previous />
            <search-content />
            <filter-navigator $type="v3" />
            <search-fetch-more />
          </search-result-layout>
          <search-result-layout $type="mobile" />
          <search-not-found-layout />
        </>
      }
    />
  </store>
)
