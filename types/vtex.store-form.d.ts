import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Top level block in which you will specify which entity and schema from Master Data will be used for building the form.
       * It provides context to all its 8 children blocks.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-form}
       */
      form: Block<{
        /**
         * @required
         * The [entity](https://help.vtex.com/tutorial/creating-data-entity--tutorials_1265) in Master Data where the document will be saved.
         *
         * @default undefined
         */
        entity: string
        /**
         * @required
         * The JSON schema name that will be used.
         * The schema name is set in the API's request to create it in Master Data.
         *
         * @default undefined
         */
        schema: string
      }>
      /**
       * Renders a field in the form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-form}
       */
      'form-input': Block<
        | InputCheckbox
        | InputDropdown
        | InputRadiogroup
        | InputTextarea
        | InputText
        | InputUpload
      >
      /**
       * Renders different form blocks (such as `form-input.radiogroup` and `form-input.text`) according to each schema's sub-properties type.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-form}
       */
      'form-field-group': Block<{
        /**
         * @required
         * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/address`) in which the form block inputs should be validated against.
         * Note that since you are configuring a `form-field-group` block, the path must not include a schema's sub-property, only a schema's property.
         *
         * @default undefined
         */
        pointer: string
        /**
         * Redefines how the `form-field-groups` block should render each sub-properties declared in the JSON schema path defined in `pointer`.
         * As said previously, the `form-field-groups` already does that by itself, but you can overwrite the sub-properties types through a schema and so redefine how each form block will be rendered.
         *
         * @default undefined
         */
        uiSchema?: UISchema
      }>
      /**
       * Renders a button to submit the user form content.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-form}
       */
      'form-submit': Block
      /**
       * Accepts an array of blocks that will be rendered when the form is successfully submitted.
       * Any children block is valid.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-form}
       */
      'form-success': Block
    }
  }
}

type InputCheckbox = {
  /**
   * Renders a checkbox field in the form.
   */
  $type: 'checkbox'
  /**
   * @required
   * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/firstName`) in which the form block inputs should be validated against.
   *
   * @default undefined
   */
  pointer: string
  /**
   * @required
   * Field's name when rendered.
   *
   * @default Property's title
   */
  label: string
}

type InputDropdown = {
  /**
   * Renders a dropdown field in the form.
   */
  $type: 'dropdown'
  /**
   * @required
   * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/firstName`) in which the form block inputs should be validated against.
   *
   * @default undefined
   */
  pointer: string
  /**
   * @required
   * Field's name when rendered.
   *
   * @default Property's title
   */
  label: string
}

type InputRadiogroup = {
  /**
   * Renders a radio buttons field in the form.
   */
  $type: 'radiogroup'
  /**
   * @required
   * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/firstName`) in which the form block inputs should be validated against.
   *
   * @default undefined
   */
  pointer: string
  /**
   * @required
   * Field's name when rendered.
   *
   * @default Property's title
   */
  label: string
}

type InputTextarea = {
  /**
   * Renders a big text field in the form.
   */
  $type: 'textarea'
  /**
   * @required
   * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/firstName`) in which the form block inputs should be validated against.
   *
   * @default undefined
   */
  pointer: string
  /**
   * @required
   * Field's name when rendered.
   *
   * @default Property's title
   */
  label: string
  /**
   * Placeholder for the textarea input.
   *
   * @default undefined
   */
  placeholder?: string
}

type InputText = {
  /**
   * Renders a small text field in the form which has few available characters.
   */
  $type: 'text'
  /**
   * @required
   * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/firstName`) in which the form block inputs should be validated against.
   *
   * @default undefined
   */
  pointer: string
  /**
   * Defines which type of a text field should be rendered: `input`: renders a normal text field.
   * `hidden`: does not render any text field.
   * It should be used in scenarios in which you want to pre-define a field value to be submitted to the form but that shouldn't be visible (and therefore editable) to users.
   * `password`: renders a password text field.
   *
   * @default "input"
   */
  inputType?: 'input' | 'hidden' | 'password'
  /**
   * Field's name when rendered.
   *
   * @default Property's title
   */
  label: string
  /**
   * Placeholder for the text input.
   *
   * @default undefined
   */
  placeholder?: string
}

type InputUpload = {
  /**
   * Renders an `Upload` field in the form.
   */
  $type: 'upload'
  /**
   * @required
   * JSON schema pointer i.e. the JSON schema path (for example: `#/properties/address`) in which the form block inputs should be validated against.
   * Note that since you are configuring a `form-field-group` block, the path must not include a schema's sub-property, only a schema's property.
   *
   * @default undefined
   */
  pointer: string
  /**
   * By default the upload input just accept image and PDF format files.
   * If you want to customize it, you can pass the format type that you want following this pattern: `*.TYPEFILE`.
   * You can [read more about the `accept` field](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).
   */
  accept?: string
}

type UISchema = {
  type:
    | 'default'
    | 'radio'
    | 'select'
    | 'input'
    | 'hidden'
    | 'password'
    | 'textArea'
    | 'checkbox'
    | 'upload'
  properties: {
    [k: string]: UISchema
  }
}
