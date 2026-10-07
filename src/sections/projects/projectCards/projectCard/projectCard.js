import { scrollToTop } from '../../../../components/backToTop/backToTop'
import { createButton } from '../../../../components/buttons/buttons'

export const templateProjectCard = (project) => {
  // Contenedor de cada card
  const card = document.createElement('div')
  card.className = 'projectCard'
  const cardMediaContainer = document.createElement('div')
  const cardContentContainer = document.createElement('div')
  cardContentContainer.className = 'projectContentContainer'
  const cardButtonsContainer = document.createElement('div')
  cardButtonsContainer.className = 'projectButtonsContainer'

  if (Array.isArray(project.image)) {
    cardMediaContainer.className = 'projectIconsContainer'

    project.image.forEach((iconSrc) => {
      const iconImg = document.createElement('img')
      iconImg.src = iconSrc
      iconImg.alt = `${project.title} icon`
      iconImg.className = 'projectBannerIcon'
      cardMediaContainer.appendChild(iconImg)
    })
  } else {
    cardMediaContainer.className = 'projectImageContainer'
    const cardImg = document.createElement('img')
    cardImg.className = 'projectBannerImg'
    cardImg.src = project.image
    cardImg.alt = project.title
    cardMediaContainer.appendChild(cardImg)
  }

  const cardTitleDiv = document.createElement('div')
  cardTitleDiv.className = 'titleDiv'
  const title = document.createElement('h4')
  title.className = 'title'
  title.textContent = project.title
  const subtitleWrapper = document.createElement('div')
  subtitleWrapper.className = 'subtitleWrapper'
  const subtitle = document.createElement('h6')
  subtitle.className = 'subtitle'
  subtitle.textContent = project.subtitle
  const span = document.createElement('span')
  span.className = 'span'
  span.textContent = project.architecture
  subtitleWrapper.append(subtitle, span)
  cardTitleDiv.append(title, subtitleWrapper)

  const p = document.createElement('p')
  p.className = 'projectDescription'
  p.textContent = project.description

  cardContentContainer.append(cardTitleDiv, p)

  const linksDiv = document.createElement('div')
  linksDiv.className = 'linksDiv'
  cardButtonsContainer.append(linksDiv)

  const githubButton = createButton('./icons/github_link.png', 'githubButton')
  const appButton = createButton('View App', 'appButton')
  const mobileFullCardLink = document.createElement('a')
  mobileFullCardLink.className = 'mobileFullCardLink'

  if (project.url === 'scrollToTop') {
    //e.g. scrollToTop function
    mobileFullCardLink.addEventListener('click', scrollToTop)
    appButton.addEventListener('click', scrollToTop)

    linksDiv.appendChild(appButton)
  } else if (project.url) {
    mobileFullCardLink.href = project.url
    mobileFullCardLink.target = '_blank'

    const link = document.createElement('a')
    link.href = project.url
    link.target = '_blank'
    link.appendChild(appButton)
    linksDiv.appendChild(link)
  }

  window.addEventListener('resize', () => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches
    if (isMobile && project.url) {
      card.appendChild(mobileFullCardLink)
    } else {
      mobileFullCardLink.remove()
    }
  })

  if (project.github) {
    const link = document.createElement('a')
    link.href = project.github
    link.target = '_blank'
    link.appendChild(githubButton)
    linksDiv.appendChild(link)
  } else if (!project.github) {
    const link = document.createElement('a')
    link.href = ''
    link.appendChild(githubButton)
    linksDiv.appendChild(link)
    githubButton.addEventListener('click', (e) => {
      e.preventDefault()
      alert('This link is not available.')
    })
  }

  card.appendChild(cardMediaContainer)
  card.appendChild(cardContentContainer)
  card.appendChild(cardButtonsContainer)

  return card
}
