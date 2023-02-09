// from https://learn.vtex.com/docs/course-layout-blocks-lang-en

export default function SliderHome() {
  return (
    <slider-layout
      $id="home"
      autoplay={{
        timeout: 7000,
        stopOnHover: true,
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <image
          $id={'brand' + i}
          src={`https://appliancetheme.vteximg.com.br/arquivos/flatflat-brand-logo-square${i}.png`}
        />
      ))}
    </slider-layout>
  )
}
