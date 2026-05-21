import { useEffect } from 'react'

const REVEAL_SELECTOR =
  '.why-card, .course-card, .step, .contact-item'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
