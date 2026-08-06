import './about.css'

export const printAbout = () => {
  templateAbout()
}

const templateAbout = () => {
  const aboutSection = document.createElement('section')
  aboutSection.id = 'about'
  aboutSection.classList.add('whiteSection')
  document.body.appendChild(aboutSection)

  /*SECCIONES DE ABOUT*/
  const aboutDiv = document.createElement('div')
  const skillsDiv = document.createElement('div')

  aboutDiv.className = 'aboutDiv'
  skillsDiv.className = 'skillsDiv'

  aboutSection.appendChild(aboutDiv)
  aboutSection.appendChild(skillsDiv)

  /*CONTENIDO DE CADA SECCIÓN*/
  /* About Div */
  const aboutTitle = document.createElement('h2')
  const paragraph = document.createElement('p')

  aboutTitle.textContent = 'About me'
  paragraph.textContent =
    'I’m a web development apprentice, enjoying the process of building websites that are both practical and user-friendly.'

  aboutDiv.appendChild(aboutTitle)
  aboutDiv.appendChild(paragraph)

  /* Skills Div */
  const skillsTitle = document.createElement('h2')
  const skillsList = document.createElement('ul')

  skillsTitle.textContent = 'Skills'
  skillsList.className = 'skillsList'

  // Array de skills
  const skills = [
    { name: 'HTML5', img: import.meta.env.BASE_URL + 'icons/skills/html.png' },
    { name: 'CSS3', img: import.meta.env.BASE_URL + 'icons/skills/css.svg' },
    {
      name: 'JavaScript (ES6+)',
      img: import.meta.env.BASE_URL + 'icons/skills/js.svg'
    },
    {
      name: 'React',
      img: import.meta.env.BASE_URL + 'icons/skills/react.svg'
    },

    {
      name: 'Node.js',
      img: import.meta.env.BASE_URL + 'icons/skills/nodejs.svg'
    },
    {
      name: 'Express JS',
      img: import.meta.env.BASE_URL + 'icons/skills/expressjs.webp'
    },
    {
      name: 'Puppeteer',
      img: import.meta.env.BASE_URL + 'icons/skills/puppeteer.svg'
    },
    {
      name: 'MongoDB',
      img: import.meta.env.BASE_URL + 'icons/skills/mongodb.svg'
    },
    {
      name: 'Vite',
      img: import.meta.env.BASE_URL + 'icons/skills/vitejs.webp'
    },
    {
      name: 'GitHub',
      img: import.meta.env.BASE_URL + 'icons/skills/github.svg'
    },
    {
      name: 'ChakraUI',
      img: import.meta.env.BASE_URL + 'icons/skills/chakraui.png'
    }
  ]

  skills.forEach((skill) => {
    const li = document.createElement('li')
    li.classList.add('skillItem')
    const img = document.createElement('img')
    img.src = skill.img
    img.alt = skill.name

    const span = document.createElement('span')
    span.textContent = skill.name
    span.classList.add('skillSpan')

    li.appendChild(img)
    li.appendChild(span)
    skillsList.appendChild(li)
  })

  skillsDiv.appendChild(skillsTitle)
  skillsDiv.appendChild(skillsList)
}
