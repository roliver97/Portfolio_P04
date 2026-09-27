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
  paragraph.innerHTML = `Hi there! I'm Romà, and I like to create things. <br><br>
    As a junior web development apprentice, I'm passionate about building practical, visually appealing, and responsive web applications from the ground up. I approach every project with a meticulous and organized mindset, focusing on clean architectures and intuitive code designed for readability and collaboration. Whether it's crafting polished user interfaces on the client side or developing secure REST APIs on the backend, I am deeply detail-oriented—thoroughly anticipating edge cases before solving problems—and I love the entire process of bringing robust, well-thought-out projects to life.`

  aboutDiv.appendChild(aboutTitle)
  aboutDiv.appendChild(paragraph)

  /* Skills Div */
  const skillsTitle = document.createElement('h2')
  const skillsList = document.createElement('ul')

  skillsTitle.textContent = 'Skills'
  skillsTitle.classList.add('underlined')
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
      img: import.meta.env.BASE_URL + 'icons/skills/expressjs.png'
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

  // Duplicated array for an infinite scrolling effect
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills]

  duplicatedSkills.forEach((skill) => {
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
