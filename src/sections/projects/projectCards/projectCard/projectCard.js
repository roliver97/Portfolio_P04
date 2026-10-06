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
  const falseAppButton = createButton('View App', 'falseAppButton')
  const fullCardLink = document.createElement('a')
  fullCardLink.className = 'fullCardLink'

  if (typeof project.url === 'function') {
    //e.g. scrollToTop function
    fullCardLink.addEventListener('click', project.url)
    falseAppButton.addEventListener('click', project.url)
    card.appendChild(fullCardLink)
    linksDiv.appendChild(falseAppButton)
  } else if (project.url) {
    fullCardLink.href = project.url
    card.appendChild(fullCardLink)
    fullCardLink.target = '_blank'

    const link = document.createElement('a')
    link.href = project.url
    link.target = '_blank'
    link.appendChild(falseAppButton)
    linksDiv.appendChild(link)
  }

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
