import { Block } from '..'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * The `product-images` block is responsible for rendering a product image or video.
       *
       * @see {@link https://developers.vtex.com/docs/apps/vtex.store-components/productimages}
       */
      'product-images': Block<ProductImages | ProductImagesHighQuality>
    }
  }
}

type ProductImages = {
  $type?: undefined
  /**
   * Sets the aspect ratio of the image, that is, whether the image should be square, portrait, landscape, etc.
   * The value should follow the [common aspect ratio notation](https://en.wikipedia.org/wiki/Aspect_ratio_(image)) i.e. two numbers separated by a colon such as `1:1` for square, `3:4` for upright portrait, or `1920:1080` for even large values).
   *
   * @default "auto"
   */
  aspectRatio?: string
  /**
   * Controls the order in which the images and videos are displayed.
   *
   * @default "images-first"
   */
  contentOrder?: 'videos-first' | 'images-first'
  /**
   * Controls the type of content that will be displayed in the block.
   * Possible values are: `images`, `videos`, or `all`.
   *
   * @default "all"
   */
  contentType?: 'images' | 'videos' | 'all'
  /**
   * Defines how the product media should be displayed.
   * Possible values are `carousel` (displays the product images and videos in a carousel), `list` (displays only the product images inline, with no extra markup) and `first-image` (displays only the first image available).
   * *Caution*: The `list` and `first-image` values do not display product videos and are only compatible with the `maxHeight`, `hiddenImages`, `zoomFactor`, `aspectRatio`, `ModalZoomElement`, and `zoomMode` props.
   *
   * @default "carousel"
   */
  displayMode?: 'carousel' | 'list' | 'first-image'
  /**
   * Displays navigation arrows on the thumbnails media (if there are enough thumbnails for them to scroll).
   *
   * @default false
   */
  displayThumbnailsArrows?: boolean
  /**
   * Hides images whose labels match the values listed in this prop.
   * Intended to be used along with the `product-summary-sku-selector` block.
   * You can have more information at the SKU Selector documentation.
   *
   * @default "skuvariation"
   */
  hiddenImages?: string
  /**
   * Maximum height for individual product images (in pixels).
   *
   * @default 600
   */
  maxHeight?: number
  /**
   * Opens a modal for product image zooming.
   * This prop's value must match the name of the block responsible for triggering the modal containing the product image for zooming (e.g. `modal-layout` from [Modal layout](https://developers.vtex.com/docs/apps/vtex.modal-layout) app).
   * Notice that the `ModalZoom` prop will work only if the `zoomMode` prop is set as `open-modal`.
   * To learn more, check out the [Advanced Configuration section](https://developers.vtex.com/docs/apps/vtex.store-components/productimages#advanced-configuration).
   *
   * @default undefined
   */
  ModalZoom?: string
  /**
   * Sets the URL for a placeholder image to be used in case there is no available image or video of the product.
   *
   * @default undefined
   */
  placeholder?: string
  /**
   * Set the position of the thumbnails (`left` or `right`).
   * Only used when `thumbnailsOrientation` is `vertical`.
   *
   * @default "left"
   */
  position?: 'left' | 'right'
  /**
   * Controls if the navigation arrows should appear.
   *
   * @default true
   */
  showNavigationArrows?: boolean
  /**
   * Controls if the pagination dots should appear.
   *
   * @default true
   */
  showPaginationDots?: boolean
  /**
   * Controls if the image label text should be rendered above each image.
   *
   * @default false
   */
  showImageLabel?: boolean
  /**
   * Controls if the thumbnails should appear in `carousel` displayMode.
   *
   * @default "visible"
   */
  thumbnailVisibility?: 'visible' | 'hidden'
  /**
   * Sets the aspect ratio of the thumbnail image; For more information about aspect ratio, check the `aspectRatio` prop.
   *
   * @default "auto"
   */
  thumbnailAspectRatio?: string
  /**
   * Maximum height for the thumbnail image (in pixels).
   *
   * @default 150
   */
  thumbnailMaxHeight?: number
  /**
   * Choose the orientation of the thumbnails.
   * Can be set to `vertical` or `horizontal`.
   *
   * @default "vertical"
   */
  thumbnailsOrientation?: 'vertical' | 'horizontal'
  /**
   * Sets how much the zoom increases the image size (e.g. `2` will make the zoomed-in image twice as large).
   *
   * @default 2
   */
  zoomFactor?: number
  /**
   * Defines the image zoom behavior.
   * Possible values are: `disabled` (zoom is disabled), `in-place-click` (zoom will be triggered when the image is clicked on), `in-place-hover` (zoom will be triggered when the image is hovered on) or `open-modal` (image is zoommed using a modal).
   *
   * @default "in-place-click"
   */
  zoomMode?: 'disabled' | 'in-place-click' | 'in-place-hover' | 'open-modal'
}

type ProductImagesHighQuality = {
  /**
   * The `product-images.high-quality-image` block is a *special* block, only meant to render the `product-image` block inside the modal.
   */
  $type: 'high-quality-image'
  /**
   * Sets the aspect ratio of the image, that is, whether the image should be square, portrait, landscape, etc.
   * The value should follow the [common aspect ratio notation](https://en.wikipedia.org/wiki/Aspect_ratio_(image)) i.e. two numbers separated by a colon such as `1:1` for square, `3:4` for upright portrait, or `1920:1080` for even large values).
   *
   * @default "auto"
   */
  aspectRatio?: string
  /**
   * Image default size (in `px`).
   *
   * @default 1200
   */
  defaultSize?: number
  /**
   * Image size(s) (in `px`) to be used in the image's [`srcset` HTML attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).
   * If no value is passed to this prop, the `srcset` will use the image original size.
   *
   * @default undefined
   */
  imageSizes?: number[]
  /**
   * Image maximum size (in `px`) for rendering regardless of the screen size.
   * Notice that this prop only works if you also declare the `imageSizes` prop.
   *
   * @default 4096
   */
  maxSize?: number
  /**
   * Sets how much the zoom increases the image size (e.g. `2` will make the zoomed-in image twice as large).
   *
   * @default 2
   */
  zoomFactor?: number
  /**
   * Defines the zoom behavior for the `product-images.high-quality-image` block.
   * Possible values are: `disabled` (zoom is disabled), `in-place-click` (zoom will be triggered when the image is clicked on), or `in-place-hover` (zoom will be triggered when the image is hovered on).
   * Different from the `store-images` prop, this one doesn't accept `open-modal` value.
   *
   * @default "disabled"
   */
  zoomMode?: 'disabled' | 'in-place-click' | 'in-place-hover'
}
