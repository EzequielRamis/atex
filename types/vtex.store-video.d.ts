import { Block } from '.'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The Video app allows you to display video assets on your store pages.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-video}
       */
      video: Block<{
        /**
         * Video name for SEO and accessibility.
         *
         * @default undefined
         */
        name?: string
        /**
         * Video description for SEO and accessibility.
         *
         * @default undefined
         */
        description?: string
        /**
         * Video URL.
         * It can be a `youtube` URL, `vimeo` URL or a self-hosted video URL.
         *
         * @default undefined
         */
        src?: string
        /**
         * Video type.
         *
         * @default undefined
         */
        type?: string
        /**
         * Cover image URL to be displayed before the video playback.
         *
         * @default undefined
         */
        poster?: string
        /**
         * The type of controls.
         * It can be `custom-vtex` (only works if the video URL represents a HTML5 player), `native` or `none`.
         *
         * @default undefined
         */
        controlsType?: 'custom-vtex' | 'native' | 'none'
        /**
         * Whether the video will start automatically after loaded (`true`) or not (`false`).
         * Note that if the value is `true`, the muted property will automatically be setted to `true`.
         *
         * @default false
         */
        autoPlay?: boolean
        /**
         * Whether the video will start with the audio on (`false`) or not (`true`).
         *
         * @default false
         */
        muted?: boolean
        /**
         * Whether the video will run in a loop (`true`) or not (`false`).
         *
         * @default false
         */
        loop?: boolean
        /**
         * Whether the video will be played inline (`true`) or not (`false`).
         *
         * @default false
         */
        playsInline?: boolean
        /**
         * The width of the video exhibition area.
         * It could be as %(`string`) or pixels (`number`).
         *
         * @default undefined
         */
        width?: number | string
        /**
         * The height of the video exhibition area.
         * It could be as %(`string`) or pixels (`number`).
         *
         * @default undefined
         */
        height?: number | string
        /**
         * Video play icon for `custom-vtex` controls.
         *
         * @default "icon-play"
         */
        PlayIcon?: string
        /**
         * Video pause icon for `custom-vtex` controls.
         *
         * @default "icon-pause"
         */
        PauseIcon?: string
        /**
         * Video volume on icon for `custom-vtex` controls.
         *
         * @default "icon-volume-on"
         */
        VolumeOnIcon?: string
        /**
         * Video volume off icon for `custom-vtex` controls.
         *
         * @default "icon-volume-off"
         */
        VolumeOffIcon?: string
        /**
         * Video fullscreen icon for `custom-vtex` controls.
         *
         * @default "icon-extend"
         */
        FullscreenIcon?: string
      }>
    }
  }
}
