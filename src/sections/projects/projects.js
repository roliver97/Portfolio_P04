import { handleCategoryClick } from '../../utils/projects/smoothScroll'
import './projects.css'
import { printProjectCards } from './projects_subcomponents/projectCards/projectCards'

export const printProjects = () => {
  templateProjects()
}

const templateProjects = () => {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projectsSection'
  projectsSection.classList.add('whiteSection')
  document.body.appendChild(projectsSection)

  /*CONTENIDO DE CADA SECCIÓN*/
  /* Text Container */
  const projectsHeader = document.createElement('div')
  projectsHeader.id = 'projectsHeader'
  projectsSection.appendChild(projectsHeader)

  const headerTexts = document.createElement('div')
  projectsHeader.appendChild(headerTexts)
  headerTexts.className = 'headerTexts'

  const projectsTitle = document.createElement('h2')
  projectsTitle.textContent = 'My projects'
  headerTexts.appendChild(projectsTitle)
  const paragraph = document.createElement('p')
  paragraph.textContent = "Some things I've built so far"
  headerTexts.appendChild(paragraph)

  const categories = document.createElement('div')
  categories.className = 'projectsCategories'

  const reactLink = document.createElement('a')
  reactLink.href = '#react_cards'
  const reactButton = document.createElement('button')
  reactButton.textContent = 'React'
  reactButton.className = 'reactButton active'
  reactLink.appendChild(reactButton)

  const jsLink = document.createElement('a')
  jsLink.href = '#vanilla_cards'
  const jsButton = document.createElement('button')
  jsButton.textContent = 'Vanilla JS'
  jsButton.className = 'jsButton'
  jsLink.appendChild(jsButton)

  const nodeLink = document.createElement('a')
  nodeLink.href = '#node_cards'
  const nodeButton = document.createElement('button')
  nodeButton.textContent = 'Node.js'
  nodeButton.className = 'nodeButton'
  nodeLink.appendChild(nodeButton)

  categories.append(reactLink, nodeLink, jsLink)
  projectsHeader.appendChild(categories)

  printProjectCards()

  reactLink.addEventListener('click', (e) =>
    handleCategoryClick(e, '#react_cards')
  )
  nodeLink.addEventListener('click', (e) =>
    handleCategoryClick(e, '#node_cards')
  )
  jsLink.addEventListener('click', (e) =>
    handleCategoryClick(e, '#vanilla_cards')
  )
}
