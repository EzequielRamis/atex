import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Handles every functionality related to user login.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.login}
       */
      login: Block<{
        /**
         * Text to entitle the login options.
         *
         * @default undefined
         */
        optionsTitle?: string
        /**
         * Text to display the email-and-password option.
         *
         * @default undefined
         */
        emailAndPasswordTitle?: string
        /**
         * Text to display the access-code option.
         *
         * @default undefined
         */
        accessCodeTitle?: string
        /**
         * Text to be displayed as placeholder to the email input.
         *
         * @default undefined
         */
        emailPlaceholder?: string
        /**
         * Text to be displayed as placeholder to the password input.
         *
         * @default undefined
         */
        passwordPlaceholder?: string
        /**
         * Text to be displayed as placeholder to the access code input.
         *
         * @default undefined
         */
        accessCodePlaceholder?: string
        /**
         * Whether a tooltip responsible for checking the password format should be shown (`true`) or not (`false`).
         *
         * @default true
         */
        showPasswordVerificationIntoTooltip?: boolean
        /**
         * Whether the `hpa-profile` icon from [Store Icons](https://vtex.io/docs/components/all/vtex.store-icons/) should be displayed on the Login component (`true`) or not (`false`).
         *
         * @default true
         */
        showIconProfile?: boolean
        /**
         * Text string to entitle the Login icon.
         *
         * @default undefined
         */
        iconLabel?: string
        /**
         * Whether the text string defined for the Login icon should be hidden (`true`) or not (`false`).
         *
         * @default false
         */
        hideIconLabel?: boolean
        /**
         * Login icon's classnames.
         *
         * @default undefined
         */
        labelClasses?: string[]
        /**
         * Text to be displayed as the password button label.
         *
         * @default undefined
         */
        providerPasswordButtonLabel?: string
        /**
         * Text to be displayed as placeholder to the extension input.
         *
         * @default undefined
         */
        identifierPlaceholder?: string
        /**
         * Error message for invalid user identifier.
         *
         * @default undefined
         */
        invalidIdentifierError?: string
        /**
         * Whether the Login tooltip should open towards the right side of the screen (`true`) or not (`false`).
         *
         * @default false
         */
        mirrorTooltipToRight?: boolean
        /**
         * Expected behavior of the Login component when clicked on.
         * Possible values are: `popover` (opens a popover tab) and `link` (redirects user to the `/login` page).
         *
         * @default "popover"
         */
        logInButtonBehavior?: 'popover' | 'link'
        /**
         * Expected behavior of the My account button when clicked on.
         * Possible values are: `popover` (opens a popover tab) and `link` (redirects user to the `/account` page).
         *
         * @default "popover"
         */
        accountOptionsButtonBehavior?: 'popover' | 'link'
        /**
         * Creates a custom link to replace the default one set for the `accountOptionsButtonBehavior`'s `link` value (`/account`).
         * Check out below the available props for the object.
         *
         * @default undefined
         */
        accountOptionLinks?: {
          /**
           * Text lable for the custom link.
           *
           * @default undefined
           */
          label?: string
          /**
           * Custom link's path.
           *
           * @default undefined
           */
          path?: string
          /**
           * Login icon's class names.
           *
           * @default undefined
           */
          cssClass?: string[]
        }[]
        /**
         * Text to be displayed below the login options regarding terms&conditions.
         *
         * @default undefined
         */
        termsAndConditions?: string
        /**
         * Whether the [Google's One-tap sign-up and auto sign-in](https://developers.google.com/identity/one-tap/web/) solution should be enabled (`true`) or not (`false`).
         *
         * @default false
         */
        hasGoogleOneTap?: boolean
        /**
         * Defines pop-up alignment for the Google One-tap login.
         * Possible values are `Left` and `Right`.
         *
         * @default "Right"
         */
        googleOneTapAlignment?: 'Left' | 'Right'
        /**
         * Defines the pop-up top margin for the Google One-tap login.
         * The values supported are the same supported by the CSS property top.
         *
         * @default "3rem"
         */
        googleOneTapMarginTop?: string
        /**
         * Whether user email editing should be allowed (`true`) or not (`false`).
         *
         * @default false
         */
        disabledEmailInputs?: boolean
        /**
         * If this prop is `true` and the only active provider is an OAuth, the login won't auto-redirect as usual.
         * Also, the query string `oAuthRedirect` will be disabled.
         *
         * @default false
         */
        blockOAuthAutoRedirect?: boolean
      }>
      /**
       * Only renders the login form.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.login}
       */
      'login-content': Block<{
        /**
         * Whether only the login options will be displayed on the initial screen (`true`) or not (`false`).
         *
         * @default true
         */
        isInitialScreenOptionOnly?: boolean
        /**
         * Defines the default login options to be shown.
         * Possible values are: `0` (shows the access-code option for login), `1` (shows the email/password option for login) and `2` (shows the corporate option for login).
         *
         * @default "0"
         */
        defaultOption?: '0' | '1' | '2'
        /**
         * Text to entitle the login options.
         *
         * @default undefined
         */
        optionsTitle?: string
        /**
         * Text to display the email-and-password option.
         *
         * @default undefined
         */
        emailAndPasswordTitle?: string
        /**
         * Text to display the access-code option.
         *
         * @default undefined
         */
        accessCodeTitle?: string
        /**
         * Text to be displayed as placeholder to the email input.
         *
         * @default undefined
         */
        emailPlaceholder?: string
        /**
         * Text to be displayed as placeholder to the password input.
         *
         * @default undefined
         */
        passwordPlaceholder?: string
        /**
         * Whether a tooltip responsible for checking the password format should be shown (`true`) or not (`false`).
         *
         * @default true
         */
        showPasswordVerificationIntoTooltip?: boolean
        /**
         * Text to be displayed as placeholder to the access code input.
         *
         * @default undefined
         */
        accessCodePlaceholder?: string
        /**
         * Text to be displayed as the password button label.
         *
         * @default undefined
         */
        providerPasswordButtonLabel?: string
        /**
         * Text to be displayed as placeholder to the extension input.
         *
         * @default undefined
         */
        identifierPlaceholder?: string
        /**
         * Error message for invalid user identifier.
         *
         * @default undefined
         */
        invalidIdentifierError?: string
        /**
         * Text to be displayed below the login options regarding terms&conditions.
         *
         * @default undefined
         */
        termsAndConditions?: string
        /**
         * Whether user email editing should be allowed (`true`) or not (`false`).
         *
         * @default false
         */
        disabledEmailInputs?: boolean
      }>
    }
  }
}
