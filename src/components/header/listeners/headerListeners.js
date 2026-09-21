export const addHeaderListeners = (header, hamburgerBtn) => {
  const mobileMedia = '(max-width: 1024px)'
  const headerLinks = header.querySelectorAll('a[href^="#"]')
  const headerCollapsed = header.classList.contains('collapsed')
  const toggleMenu = () => {
    if (headerCollapsed) {
      header.classList.remove('collapsed')
    } else {
      header.classList.remove('collapsed')
    }
  }

  window.addEventListener('resize', () => {
    const isMobile = window.matchMedia(mobileMedia).matches
    if (isMobile) header.classList.add('mobile')
    if (!isMobile) header.classList.remove('mobile')
  })

  // Scroll vertical suave (pulsando los links) y cerrado del menú
  headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault() // evita un salto instantaneo
      const targetId = link.getAttribute('href').substring(1)
      const target = document.getElementById(targetId)
      target.scrollIntoView({ behavior: 'smooth' })

      if (headerCollapsed) {
        toggleMenu()
      }
    })
  })

  // Cerrado del menú si el usuario hace click
  document.addEventListener('click', (e) => {
    const isMobile = header.classList.contains('mobile')
    const isHamburgerClick = hamburgerBtn.contains(e.target)
    if (isMobile && !isHamburgerClick) {
      header.classList.add('collapsed')
    }
  })

  hamburgerBtn.addEventListener('mouseenter', () => {
    header.classList.remove('collapsed') // Per exemple, el mostrem
  })

  // 2. Quan el ratolí SURT de dins del header
  header.addEventListener('mouseleave', () => {
    header.classList.add('collapsed') // Per exemple, l'amaguem
  })
}
