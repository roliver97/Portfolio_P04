import './contact.css'
import { templateInterestButtons } from './interestButtons/interestButtons.js'
import { templateContactForm } from './contactForm/contactForm.js'

const contactLinks = [
  {
    name: 'LinkedIn',
    icon: import.meta.env.BASE_URL + 'icons/linkedin_link.png',
    url: 'https://www.linkedin.com/in/rom%C3%A0-oliver-370707179/'
  },
  {
    name: 'GitHub',
    icon: import.meta.env.BASE_URL + 'icons/github_link.png',
    url: 'https://github.com/roliver97'
  }
]

export const printContact = () => {
  templateContact()
}

const templateContact = () => {
  const contactSection = document.createElement('section')
  contactSection.id = 'contactSection'
  document.body.appendChild(contactSection)

  /* Containers */
  const titlesContainer = document.createElement('div')
  titlesContainer.id = 'titlesContainer'
  contactSection.appendChild(titlesContainer)

  const formContainer = document.createElement('div')
  formContainer.id = 'formContainer'
  contactSection.appendChild(formContainer)

  /* Titles */
  const contactTitle = document.createElement('h2')
  contactTitle.append("Let's discuss on something ")
  const contactTitleSpan = document.createElement('span')
  contactTitleSpan.textContent = 'cool'
  contactTitleSpan.className = 'contactTitleSpan'
  const contactSubtitle = document.createElement('h4')
  contactSubtitle.textContent = "I'm interested in ..."

  contactTitle.append(contactTitleSpan, ' together')
  titlesContainer.append(contactTitle, contactSubtitle)

  /* Form */
  const form = templateContactForm()

  /* Hidden input */
  // Añadimos un input hidden al form para guardar la opción (botón) seleccionado por el usuario
  const hiddenInput = document.createElement('input')
  hiddenInput.type = 'hidden'
  hiddenInput.name = 'interests'
  form.appendChild(hiddenInput)

  /* Botones d’interès */
  const interestButtons = templateInterestButtons(hiddenInput)
  formContainer.append(interestButtons, form)

  /* Contact links */
  const contactLinksList = document.createElement('ul')
  contactLinksList.className = 'contactLinksList'

  contactLinks.forEach((link) => {
    const li = document.createElement('li')
    const icon = document.createElement('img')
    const a = document.createElement('a')
    icon.src = link.icon
    icon.alt = link.name
    a.href = link.url
    a.target = '_blank'
    li.appendChild(a)
    a.appendChild(icon)
    contactLinksList.appendChild(li)
  })

  contactSection.appendChild(contactLinksList)
}
