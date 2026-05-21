import { useCallback, useEffect, useRef, useState } from 'react'
import { GALLERY_SLIDES } from '../data/gallerySlides'

export function GalleryCarousel() {
  const rootRef = useRef(null)
  const viewportRef = useRef(null)
  const lastIndexRef = useRef(0)
  const [index, setIndex] = useState(0)
  const total = GALLERY_SLIDES.length

  const slideWidth = useCallback(() => viewportRef.current?.offsetWidth || 1, [])

  const syncFromScroll = useCallback(() => {
    const vw = viewportRef.current
    if (!vw) return
    const i = Math.max(0, Math.min(total - 1, Math.round(vw.scrollLeft / slideWidth())))
    lastIndexRef.current = i
    setIndex(i)
  }, [slideWidth, total])

  const goTo = useCallback(
    (i) => {
      const vw = viewportRef.current
      if (!vw) return
      const clamped = Math.max(0, Math.min(total - 1, i))
      vw.scrollTo({ left: clamped * slideWidth(), behavior: 'smooth' })
    },
    [slideWidth, total],
  )

  useEffect(() => {
    const viewport = viewportRef.current
    const root = rootRef.current
    if (!viewport || !root) return

    let scrollTimer
    const onScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(syncFromScroll, 60)
      syncFromScroll()
    }
    viewport.addEventListener('scroll', onScroll, { passive: true })

    let resizeTimer
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        viewport.scrollTo({
          left: lastIndexRef.current * slideWidth(),
          behavior: 'auto',
        })
        syncFromScroll()
      }, 100)
    }
    window.addEventListener('resize', onResize)

    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(lastIndexRef.current - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(lastIndexRef.current + 1)
      }
    }
    root.addEventListener('keydown', onKey)

    syncFromScroll()

    return () => {
      viewport.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      root.removeEventListener('keydown', onKey)
      clearTimeout(scrollTimer)
      clearTimeout(resizeTimer)
    }
  }, [goTo, syncFromScroll, slideWidth])

  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="section-label">Campus &amp; events</div>
      <h2 className="section-title" id="gallery-heading">
        Moments from OSM
      </h2>
      <p className="section-desc gallery-intro">
        Celebrations, academics, sports, and campus life at Bandlaguda and Moghalpura. Swipe or use the arrows to browse —
        swap in your own event photos anytime.
      </p>

      <div
        ref={rootRef}
        className="gallery-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="College events and campus photos"
        tabIndex={0}
      >
        <div className="gallery-carousel-viewport" id="galleryCarouselViewport" ref={viewportRef}>
          {GALLERY_SLIDES.map((slide, j) => (
            <figure
              key={slide.id}
              className="gallery-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${j + 1} of ${total}`}
              aria-hidden={j === index ? 'false' : 'true'}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={1600}
                height={900}
                loading={slide.eager ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={slide.fetchPriority}
                sizes="100vw"
              />
              <figcaption>
                {slide.caption} <span>{slide.captionSpan}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          className="gallery-carousel-btn gallery-carousel-btn--prev"
          aria-label="Previous slide"
          onClick={() => goTo(lastIndexRef.current - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="gallery-carousel-btn gallery-carousel-btn--next"
          aria-label="Next slide"
          onClick={() => goTo(lastIndexRef.current + 1)}
        >
          ›
        </button>
        <div className="gallery-carousel-dots" role="tablist" aria-label="Choose slide">
          {GALLERY_SLIDES.map((_, j) => (
            <button
              key={j}
              type="button"
              className={`gallery-carousel-dot${j === index ? ' is-active' : ''}`}
              role="tab"
              aria-selected={j === index}
              aria-label={`Slide ${j + 1}`}
              onClick={() => goTo(j)}
            />
          ))}
        </div>
      </div>
      <p className="gallery-note">
        Photos from OSM Sports Day — add more event images to{' '}
        <code className="inline-code">public/assets/images/</code> and update{' '}
        <code className="inline-code">gallerySlides.js</code>.
      </p>
    </section>
  )
}
