export const initHeaderObserver = () => {
  const header = document.querySelector('header')
  const hambBtn = document.querySelector('#hamburgerButton')
  if (!header) return

  const lightTop = 'color-mix(in srgb, var(--rtc-color-4) 100%, transparent)'
  const lightBottom = 'color-mix(in srgb, var(--rtc-color-4) 40%, transparent)'

  const darkTop = 'color-mix(in srgb, var(--rtc-color-2) 100%, transparent)'
  const darkBottom = 'color-mix(in srgb, var(--rtc-color-2) 40%, transparent)'

  const defaultLightGradient = `linear-gradient(to bottom, ${lightTop}, ${lightBottom})`
  const defaultDarkGradient = `linear-gradient(to bottom, ${darkTop}, ${darkBottom})`

  const defaultLightSolid = `var(--rtc-color-4)`
  const defaultDarkSolid = `var(--rtc-color-2)`

  const lightBurgerUrl = `url('/icons/hamburger-light.svg')`
  const darkBurgerUrl = `url('/icons/hamburger-dark.svg')`

  const sections = document.querySelectorAll('section')
  const whiteSections = document.querySelectorAll('section.whiteSection')
  const navLinks = header.querySelectorAll('.nav-link')

  const updateHeaderPaint = () => {
    const headerRect = header.getBoundingClientRect()
    const hambRect = hambBtn ? hambBtn.getBoundingClientRect() : headerRect

    let isOverWhiteHeader = false
    let isOverWhiteBurger = false

    let gradientStyle = defaultLightGradient
    let borderStyle = defaultLightSolid

    for (const wsecRect of whiteSections) {
      const sectionRect = wsecRect.getBoundingClientRect()

      const headerOverlap =
        headerRect.bottom > sectionRect.top &&
        headerRect.top < sectionRect.bottom

      if (headerOverlap) {
        isOverWhiteHeader = true

        if (
          sectionRect.top > headerRect.top &&
          sectionRect.top <= headerRect.bottom
        ) {
          const cutPercent =
            ((sectionRect.top - headerRect.top) / headerRect.height) * 100

          gradientStyle = `linear-gradient(to bottom, ${lightTop} 0%, ${lightBottom} ${cutPercent}%, ${darkTop} ${cutPercent}%, ${darkBottom} 100%)`
          borderStyle = `linear-gradient(to bottom, ${defaultLightSolid} ${cutPercent}%, ${defaultDarkSolid} ${cutPercent}%)`
        } else if (
          sectionRect.bottom >= headerRect.top &&
          sectionRect.bottom < headerRect.bottom
        ) {
          const cutPercent =
            ((sectionRect.bottom - headerRect.top) / headerRect.height) * 100
          gradientStyle = `linear-gradient(to bottom, ${darkTop} 0%, ${darkBottom} ${cutPercent}%, ${lightTop} ${cutPercent}%, ${lightBottom} 100%)`
          borderStyle = `linear-gradient(to bottom, ${defaultDarkSolid} ${cutPercent}%, ${defaultLightSolid} ${cutPercent}%)`
        } else {
          gradientStyle = defaultDarkGradient
          borderStyle = defaultDarkSolid
        }
      }

      const burgerOverlap =
        hambRect.bottom > sectionRect.top && hambRect.top < sectionRect.bottom

      if (burgerOverlap) {
        isOverWhiteBurger = true
      }
    }

    header.style.setProperty(
      '--dynamic-bg',
      isOverWhiteHeader ? gradientStyle : defaultLightGradient
    )

    header.style.setProperty('--mobile-bg', defaultDarkGradient)

    header.style.setProperty(
      '--dynamic-border',
      isOverWhiteHeader ? borderStyle : defaultLightSolid
    )

    if (hambBtn) {
      hambBtn.style.setProperty(
        '--dynamic-burger',
        isOverWhiteBurger ? darkBurgerUrl : lightBurgerUrl
      )
    }
  }

  const updateActiveNavLink = () => {
    let activeSectionId = null
    const windowMiddle = window.innerHeight / 2

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= windowMiddle && rect.bottom >= windowMiddle) {
        activeSectionId = section.id
        break
      }
    }

    navLinks.forEach((link) => {
      const targetAttr = link.getAttribute('href')
      if (targetAttr && targetAttr.includes(activeSectionId)) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }

  const handleScroll = () => {
    updateHeaderPaint()
    updateActiveNavLink()
  }

  window.addEventListener(
    'scroll',
    () => {
      window.requestAnimationFrame(handleScroll)
    },
    { passive: true }
  )

  handleScroll()
}
