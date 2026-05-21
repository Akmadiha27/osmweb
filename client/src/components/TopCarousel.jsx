import { useEffect, useState } from 'react'
import { TOP_SLIDES } from '../data/topSlides'

export function TopCarousel() {
  const [index, setIndex] = useState(0)
  const total = TOP_SLIDES.length

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [total])

  function goTo(nextIndex) {
    setIndex(((nextIndex % total) + total) % total)
  }

  return (
    <section className="top-carousel" id="home" aria-label="Top highlights carousel">
      <div className="top-carousel-shell">
        <div className="top-carousel-header">
          <div className="top-carousel-label">Campus Highlights</div>
          <a href="#admissions" className="top-carousel-cta">
            Apply Now
          </a>
        </div>

        <div className="top-carousel-stage">
          {TOP_SLIDES.map((slide, i) => (
            <article
              key={slide.id}
              className={`top-carousel-slide${i === index ? ' is-active' : ''}`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={slide.eager ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={slide.fetchPriority}
                width={1600}
                height={900}
              />
            </article>
          ))}

          <button
            type="button"
            className="top-carousel-arrow top-carousel-arrow--prev"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
          >
            <svg className="top-carousel-arrow-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="top-carousel-arrow top-carousel-arrow--next"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
          >
            <svg className="top-carousel-arrow-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6-6-6z"
              />
            </svg>
          </button>
        </div>

        <div className="top-carousel-dots" role="tablist" aria-label="Choose top slide">
          {TOP_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`top-carousel-dot${i === index ? ' is-active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
