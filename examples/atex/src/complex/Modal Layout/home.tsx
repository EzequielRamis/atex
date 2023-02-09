// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default () => (
  <store
    $type="home"
    _blocks={
      <modal-trigger $id="first">
        <rich-text
          $id="trigger"
          text="CLICK ME"
        />
        <modal-layout $id="first">
          <rich-text
            $id="hello"
            text="Hello"
          />
        </modal-layout>
      </modal-trigger>
    }
  />
)
