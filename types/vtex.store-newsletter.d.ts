import { AtexBlock } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Top level block that provides context to all its children.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-form': AtexBlock<{
        /**
         * Block to be rendered if the submission of the form fails.
         * If none is passed, a default error component will be rendered.
         *
         * @default undefined
         */
        ErrorState?: string
        /**
         * Block to be rendered if form submission succeeds.
         * If none is passed, a default success component will be rendered.
         *
         * @default undefined
         */
        SuccessState?: string
        /**
         * Block to be rendered while the form submission is loading.
         * If none is passed, the default behavior is for the submit button to show a spinner during this loading period.
         *
         * @default undefined
         */
        LoadingState?: string
      }>
      /**
       * Renders an email input in the newsletter form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-input-email': AtexBlock<{
        /**
         * Placeholder text for the email input.
         *
         * @default "Enter your email address" (translated according to the store's locale).
         */
        placeholderText?: string
        /**
         * Label for the email input.
         *
         * @default null
         */
        inputLabel?: string
        /**
         * Error message to be shown if email is invalid.
         *
         * @default `Invalid email address` (translated according to the store's locale).
         */
        errorMessage?: string
      }>
      /**
       * Renders an name input in the newsletter form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-input-name': AtexBlock<{
        /**
         * Placeholder text for name input.
         *
         * @default "Enter your name" (translated according to the store's locale).
         */
        placeholderText?: string
        /**
         * Label for the name input.
         *
         * @default null
         */
        inputLabel?: string
        /**
         * Error message to be shown if name input is empty.
         *
         * @default "Invalid name" (translated according to the store's locale).
         */
        errorMessage?: string
      }>
      /**
       * Renders an phone input in the newsletter form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-input-phone': AtexBlock<{
        /**
         * Placeholder text for phone input.
         *
         * @default "Enter your phone" (translated according to the store's locale).
         */
        placeholderText?: string
        /**
         * Label for the phone input.
         *
         * @default null
         */
        inputLabel?: string
        /**
         * Error message to be shown if phone input is empty.
         *
         * @default "Invalid phone" (translated according to the store's locale).
         */
        errorMessage?: string
      }>
      /**
       * Renders a confirmation checkbox in the newsletter form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-checkbox-confirmation': AtexBlock<{
        /**
         * Label for the confirmation checkbox.
         * This prop supports the [ICU Message Format](https://format-message.github.io/icu-message-format-for-translators/), exposing two variables for you to interpolate: `firstLink` and `secondLink`.
         *
         * @default `I agree to received this newsletter.` (translated according to the store's locale).
         */
        checkboxLabel?: string
        /**
         * Configures the `firstLink` variable to be interpolated by the text passed to `checkboxLabel` checkbox.
         *
         * @default undefined
         */
        firstLabelLink?: {
          /**
           * The link's URL.
           *
           * @default undefined
           */
          url?: string
          /**
           * Text displayed on the link.
           *
           * @default undefined
           */
          text?: string
        }
        /**
         * Configures the `secondLink` variable to be interpolated by the text passed to `checkboxLabel` checkbox.
         *
         * @default undefined
         */
        secondLabelLink?: {
          /**
           * The link's URL.
           *
           * @default undefined
           */
          url?: string
          /**
           * Text displayed on the link.
           *
           * @default undefined
           */
          text?: string
        }
      }>
      /**
       * Doesn't render anything, but enables hidden fields on the form to fetch custom data and save them in the store's [Master Data](https://help.vtex.com/en/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw) whenever a user subscribes to the newsletter.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-hidden-field': AtexBlock<{
        /**
         * Desired hidden fields responsible for saving the user's custom data on [Master Data](https://help.vtex.com/en/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw) once the newsletter form is submitted.
         * Notice that the name of the fields must be written in an array and represent which user data they save.
         * Possible values are: `bindingUrl` and `bindingId`.
         * *Caution*: To properly save the data, you must also [create the desired filters](https://help.vtex.com/en/tutorial/how-can-i-create-a-field-in-master-data--frequentlyAskedQuestions_1829) in the Master Data's `Client` entity.
         *
         * @default undefined
         */
        dynamicFields?: ('bindingUrl' | 'bindingId')[]
      }>
      /**
       * Renders a `Submit` button for the newsletter form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-newsletter}
       */
      'newsletter-submit': AtexBlock<{
        /**
         * Text displayed on the submit button.
         *
         * @default "Subscribe" (translated according to the store's locale).
         */
        submitButtonLabel?: string
      }>
    }
  }
}
