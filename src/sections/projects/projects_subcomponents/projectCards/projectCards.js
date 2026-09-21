import { createButton } from '../../../../components/buttons/buttons.js'
import { scrollToTop } from '../../../../components/backToTop/backToTop.js'
import { updateActiveButtonOnScroll } from '../../../../utils/projects/scrollSpy.js'

export const printProjectCards = () => {
  projectCardsTemplate()
}

const projects = [
  {
    title: 'Vantrip | Full Stack [WIP]',
    subtitle: 'P13 - Rock The Code Final Project',
    description:
      'Full stack campervan trip planning platform featuring a dynamic React frontend and a robust Node.js and Express backend API',
    image: ['icons/coding.png'],
    github: 'https://github.com/roliver97/P13_Vantrip_frontend',
    category: 'react',
    architecture: 'Frontend & Backend'
  },
  {
    title: 'GameHub²',
    subtitle: 'P12 - Rock The Code Project',
    description:
      'Advanced React single-page application featuring arcade minigames, state management, and interactive scoreboards',
    image: 'images/projects/gamehub2.png',
    github: 'https://github.com/roliver97/AdvancedReact_P12_GameHub2',
    url: 'https://gamehub2-p12.vercel.app/',
    category: 'react',
    architecture: 'Frontend'
  },
  {
    title: 'Skyguide',
    subtitle: 'P11 - Rock The Code Project',
    description:
      'Responsive React app fetching live weather forecasting and airport tracking data using components and external APIs',
    image: 'images/projects/skyguide.png',
    github: 'https://github.com/roliver97/ReactBasics_P11_SkyGuide',
    url: 'https://skyguide-p11.vercel.app/',
    category: 'react',
    architecture: 'Frontend'
  },
  {
    title: 'Evently | Full Stack',
    subtitle: 'P10 - Rock The Code Project',
    description:
      'Full stack event management platform featuring a Vanilla JS frontend connected to a robust Node.js and Express backend API',
    image: 'images/projects/evently.png',
    github:
      'https://github.com/roliver97/FullStackJavascript_P10_Evently_frontend',
    url: 'https://evently-frontend-p10.vercel.app',
    category: 'node.js',
    architecture: 'Frontend & Backend'
  },
  {
    title: 'Web Scraping',
    subtitle: 'P09 - Rock The Code Project',
    description:
      'Automated data extraction and web scraping engine built with Node.js and Puppeteer to collect and structure online information',
    image: [
      'icons/skills/nodejs.svg',
      'icons/skills/expressjs.png',
      'icons/skills/jwt.webp',
      'icons/skills/mongodb.svg',
      'icons/skills/puppeteer.svg'
    ],
    github: 'https://github.com/roliver97/WebScrapping_P09',
    category: 'node.js',
    architecture: 'Backend'
  },
  {
    title: 'Files REST API',
    subtitle: 'P08 - Rock The Code Project',
    description:
      'Backend REST API built with Node.js and Express featuring file upload management, middleware integration, and storage handling',
    image: [
      'icons/skills/nodejs.svg',
      'icons/skills/expressjs.png',
      'icons/skills/jwt.webp',
      'icons/skills/mongodb.svg',
      'icons/skills/cloudinary.png'
    ],
    github: 'https://github.com/roliver97/ApiRestFiles_P08',
    category: 'node.js',
    architecture: 'Backend'
  },
  {
    title: 'Auth REST API',
    subtitle: 'P07 - Rock The Code Project',
    description:
      'Secure backend authentication system built with Node.js, Express, and JWT for user registration, login, and role authorization',
    image: [
      'icons/skills/nodejs.svg',
      'icons/skills/expressjs.png',
      'icons/skills/jwt.webp',
      'icons/skills/mongodb.svg'
    ],
    github: 'https://github.com/roliver97/ApiRestAuth_P07',
    category: 'node.js',
    architecture: 'Backend'
  },
  {
    title: 'RESTful API',
    subtitle: 'P06 - Rock The Code Project',
    description:
      'Backend REST API built with Node.js and Express, implementing full CRUD operations and database management',
    image: [
      'icons/skills/nodejs.svg',
      'icons/skills/expressjs.png',
      'icons/skills/mongodb.svg'
    ],
    github: 'https://github.com/roliver97/ApiRest_P06',
    category: 'node.js',
    architecture: 'Backend'
  },
  {
    title: 'GameHub',
    subtitle: 'P05 - Rock The Code Project',
    description:
      'Single Page Application (SPA) featuring classic arcade minigames with dynamic state, scoring, and modular components',
    image: 'images/projects/gamehub.png',
    url: 'https://game-hub-p05.vercel.app',
    github: 'https://github.com/roliver97/GameHub_P05',
    category: 'vanilla',
    architecture: 'Frontend'
  },
  {
    title: 'Portfolio',
    subtitle: 'P04 - Rock The Code Project',
    description:
      'Personal portfolio website demonstrating projects, skills, and contact options',
    image: import.meta.env.BASE_URL + 'images/projects/portfolio.png',
    url: scrollToTop,
    github: 'https://github.com/roliver97/Portfolio_P04',
    category: 'vanilla',
    architecture: 'Frontend'
  },
  {
    title: 'Pinterest Async',
    subtitle: 'P03 - Rock The Code Project',
    description:
      'Pinterest-style gallery fetching images asynchronously from an API with vanilla JS',
    image: import.meta.env.BASE_URL + 'images/projects/async_pinterest.png',
    url: 'https://pinterest-async-p03.vercel.app/',
    github: 'https://github.com/roliver97/PinterestAsync_P03',
    category: 'vanilla',
    architecture: 'Basic UI Prototype'
  },
  {
    title: 'Filter Store',
    subtitle: 'P02 - Rock The Code Project',
    description:
      'Interactive e-commerce site with product filtering functionality using JavaScript',
    image: import.meta.env.BASE_URL + 'images/projects/filter_shop.png',
    url: 'https://filter-shop-p02.vercel.app/',
    github: 'https://github.com/roliver97/FilterShop_P02',
    category: 'vanilla',
    architecture: 'Basic UI Prototype'
  },
  {
    title: 'Landing Page',
    subtitle: 'P01 - Rock The Code Project',
    description:
      'Responsive landing page built with HTML & CSS, showcasing a product or service',
    image: import.meta.env.BASE_URL + 'images/projects/landing_page.png',
    url: 'https://landing-page-p01.vercel.app/',
    github: 'https://github.com/roliver97/LandingPage_P01',
    category: 'vanilla',
    architecture: 'Basic UI Prototype'
  }
]

const createProjectCards = (project) => {
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

const projectCardsTemplate = () => {
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
    const card = createProjectCards(project)
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
