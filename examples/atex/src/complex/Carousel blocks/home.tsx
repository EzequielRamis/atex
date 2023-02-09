// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

import SliderHome from './slider-layout'

export default () => (
  <store
    $type="home"
    _blocks={
      <>
        <rich-text />
        <info-card $id="button-right" />
        <info-card $id="button-left" />
        <flex-layout $type="row" />
        <SliderHome />
      </>
    }
  />
)
