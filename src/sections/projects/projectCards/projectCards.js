import './projectCards.css'
import { scrollToTop } from '../../../components/backToTop/backToTop.js'
import { updateActiveButtonOnScroll } from '../../../utils/projects/scrollSpy.js'
import { templateProjectCard } from './projectCard/projectCard.js'
import { setupCardDragScroll } from '../../../utils/projects/cardsDragScroll.js'
import projects from '../../../data/projects.json'

export const printProjectCards = () => {
  templateProjectCardsContainer()
  setupCardDragScroll()
}

const templateProjectCardsContainer = () => {
  const projectsSection = document.querySelector('#projectsSection')
  const cardsContainer = document.createElement('div')
  cardsContainer.id = 'cardsContainer'
  const projectsJsButton = document.querySelector('.jsButton')
  const projectsReactButton = document.querySelector('.reactButton')
  const projectsNodeButton = document.querySelector('.nodeButton')

  const reactCards = document.createElement('div')
  reactCards.className = 'cardsGrid'
  reactCards.id = 'react_cards'
  reactCards.style.setProperty('--grid-title', '"React"')

  const vanillaCards = document.createElement('div')
  vanillaCards.className = 'cardsGrid vanilla'
  vanillaCards.id = 'vanilla_cards'
  vanillaCards.style.setProperty('--grid-title', '"Vanilla JS"')

  const nodeCards = document.createElement('div')
  nodeCards.className = 'cardsGrid node'
  nodeCards.id = 'node_cards'
  nodeCards.style.setProperty('--grid-title', '"Node.js"')

  projects.forEach((project) => {
    const card = templateProjectCard(project)
    if (project.category === 'react') {
      reactCards.appendChild(card)
    } else if (project.category === 'node.js') {
      nodeCards.appendChild(card)
    } else {
      vanillaCards.appendChild(card)
    }
  })

  cardsContainer.append(reactCards, nodeCards, vanillaCards)
  projectsSection.appendChild(cardsContainer)

  const grids = [reactCards, nodeCards, vanillaCards]
  const buttons = [projectsReactButton, projectsNodeButton, projectsJsButton]
  updateActiveButtonOnScroll(cardsContainer, grids, buttons)
}
