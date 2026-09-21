import './header.css'
import { addHeaderListeners } from './listeners/headerListeners'

export const printHeader = () => {
  templateHeader()
}

const templateHeader = () => {
  const header = document.createElement('header')

  header.id = 'header'
  header.classList.add('collapsed')

  /*SECCIONES DE HEADER*/
  const nameDiv = document.createElement('div')
  const nav = document.createElement('nav')
  const contactLink = document.createElement('a')

  const hamburgerButton = document.createElement('button')

  nameDiv.className = 'nameDiv'
  nav.className = 'nav'
  contactLink.classList.add('nav-link', 'contactLink')
  hamburgerButton.id = 'hamburgerButton'
  hamburgerButton.ariaLabel = 'Hide header menu button'

  hamburgerButton.ariaLabel = 'Hide header menu icon'

  contactLink.textContent = 'Contact'
  contactLink.href = '#contactSection'

  document.body.append(header, hamburgerButton)
  header.append(nameDiv, nav, contactLink)

  /*CONTENIDO DE CADA SECCIÓN*/
  /* Name Div */
  const nameLink = document.createElement('a')
  nameLink.textContent = 'Romà Oliver'
  nameLink.classList.add('nav-link')
  nameLink.href = '#hero'
  nameDiv.appendChild(nameLink)

  /* Nav */
  const navList = document.createElement('ul')
  navList.classList.add('flex-container', 'navList')

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experienceSection' },
    { name: 'Projects', href: '#projectsSection' }
  ]

  navItems.forEach((item) => {
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.textContent = item.name
    a.classList.add('nav-link')
    a.href = item.href

    li.appendChild(a)
    navList.appendChild(li)
  })

  nav.appendChild(navList)

  hamburgerButton.addEventListener('click', (e) => {
    header.classList.toggle('collapsed')
  })

  const initHeaderAnimation = () => {
    hamburgerButton.classList.add('init')
    setTimeout(() => {
      header.classList.remove('collapsed')
      setTimeout(() => {
        header.classList.add('init')
        setTimeout(() => {
          header.classList.remove('init')
          header.classList.add('collapsed')
          hamburgerButton.classList.remove('init')
        }, 800)
      }, 400)
    }, 100)
  }

  initHeaderAnimation()
  addHeaderListeners(header, hamburgerButton)
}
