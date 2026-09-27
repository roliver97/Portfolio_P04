import './hero.css'

export const printHero = () => {
  templateHero()
}

const templateHero = () => {
  const hero = document.createElement('section')
  hero.id = 'hero'
  hero.classList.add('flex-container')
  document.body.appendChild(hero)

  const contentContainer = document.createElement('div')
  const textDiv = document.createElement('div')
  const titleDiv = document.createElement('div')
  const h1 = document.createElement('h1')
  const h3 = document.createElement('h3')
  const h4 = document.createElement('h4')
  const span = document.createElement('span')

  const image = document.createElement('img')

  const link = document.createElement('a')
  const button = document.createElement('button')
  const buttonSpan = document.createElement('span')

  contentContainer.className = 'contentContainer'
  textDiv.className = 'textDiv'
  titleDiv.className = 'titleDiv'
  h1.textContent = "I'm a web "
  span.textContent = 'Developer'
  span.className = 'titleHighlight'
  h3.textContent = 'I build things for the web'
  h4.textContent = 'Hello✋'

  image.className = 'profilePic'
  image.src = import.meta.env.BASE_URL + 'images/fotoprueba.png'

  button.textContent = 'Check out my'
  button.className = 'heroBtn'
  link.className = 'heroLink'
  link.href = '#projectsSection'
  buttonSpan.textContent = ' PROJECTS'
  buttonSpan.classList.add('underlined')

  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href').substring(1)
    const target = document.getElementById(targetId)
    target.scrollIntoView({ behavior: 'smooth' })
  })

  hero.append(contentContainer, link)
  contentContainer.append(textDiv, image)
  textDiv.append(h4, titleDiv)
  titleDiv.append(h1, span)
  textDiv.appendChild(h3)
  link.appendChild(button)
  button.appendChild(buttonSpan)
}
