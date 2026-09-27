import { createButton } from '../../../../components/buttons/buttons'

export const templateProjectCard = (project) => {
  // Contenedor de cada card
  const card = document.createElement('div')
  card.className = 'projectCard'

  // Contenido de cada card
  let mediaElement

  if (Array.isArray(project.image)) {
    mediaElement = document.createElement('div')
    mediaElement.className = 'projectIconsContainer'

    project.image.forEach((iconSrc) => {
      const iconImg = document.createElement('img')
      iconImg.src = iconSrc
      iconImg.alt = `${project.title} icon`
      iconImg.className = 'projectBannerIcon'
      mediaElement.appendChild(iconImg)
    })
  } else {
    mediaElement = document.createElement('img')
    mediaElement.className = 'projectBannerImg'
    mediaElement.src = project.image
    mediaElement.alt = project.title
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

  const linksDiv = document.createElement('div')
  linksDiv.className = 'linksDiv'

  card.appendChild(mediaElement)
  card.appendChild(cardTitleDiv)
  card.appendChild(p)
  card.appendChild(linksDiv)

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

  return card
}
