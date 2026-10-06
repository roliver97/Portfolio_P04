export const addHeaderListeners = (header, hamburgerBtn) => {
  const mobileMedia = '(max-width: 1024px)'
  const headerLinks = header.querySelectorAll('a[href^="#"]')

  const toggleMenu = () => {
    if (header.classList.contains('collapsed')) {
      header.classList.remove('collapsed')
    } else {
      header.classList.add('collapsed')
    }
  }

  const checkScreenSize = () => {
    const isMobile = window.matchMedia(mobileMedia).matches
    if (isMobile) {
      header.classList.add('mobile')
    } else {
      header.classList.remove('mobile')
    }
  }

  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)

  const initHeaderAnimation = () => {
    const isMobile = window.matchMedia(mobileMedia).matches
    if (!isMobile) {
      hamburgerBtn.classList.add('init')
      setTimeout(() => {
        header.classList.remove('collapsed')
        setTimeout(() => {
          header.classList.add('init')
          setTimeout(() => {
            header.classList.remove('init')
            header.classList.add('collapsed')
            hamburgerBtn.classList.remove('init')
          }, 800)
        }, 400)
      }, 100)
    }
  }

  initHeaderAnimation()

  headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const target = document.getElementById(targetId)
      target.scrollIntoView({ behavior: 'smooth' })
    })
  })

  document.addEventListener('click', (e) => {
    const isMobile = window.matchMedia(mobileMedia).matches
    const isHeaderCollapsed = header.classList.contains('collapsed')
    const clickedInside = hamburgerButton.contains(e.target)

    if (isMobile && !isHeaderCollapsed && !clickedInside) {
      toggleMenu()
    } else if (isMobile && clickedInside) {
      toggleMenu()
    }
  })

  if (!window.matchMedia(mobileMedia).matches) {
    hamburgerBtn.addEventListener('mouseenter', () => {
      header.classList.remove('collapsed')
    })

    header.addEventListener('mouseleave', () => {
      header.classList.add('collapsed')
    })
  }
}
