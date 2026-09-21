import './contact.css'
import { createForm } from '../../components/forms/forms.js'
import { createContactTitle } from './contact_subcomponents/contactTitle.js'
import { createInterestButtons } from './contact_subcomponents/interestButtons.js'
import { createContactLinks } from './contact_subcomponents/contactLinks.js'

const interestFields = [
  'Ecommerce Website',
  'Data Base',
  'Landing Page',
  'Blog Website',
  'App'
]

const contactFields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    noLabel: true
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    noLabel: true
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Write your message',
    noLabel: true
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
  const interestsContainer = document.createElement('div')
  interestsContainer.id = 'interestsContainer'
  contactSection.appendChild(interestsContainer)

  const formContainer = document.createElement('div')
  formContainer.id = 'formContainer'
  contactSection.appendChild(formContainer)

  /* Titles */
  createContactTitle(interestsContainer)

  /* Form */
  const form = createForm(contactFields, 'contactForm', 'Submit')
  formContainer.appendChild(form)

  /* Hidden input */
  // Añadimos un input hidden al form para guardar la opción (botón) seleccionado por el usuario
  const hiddenInput = document.createElement('input')
  hiddenInput.type = 'hidden'
  hiddenInput.name = 'interests'
  form.appendChild(hiddenInput)

  /* Botones d’interès */
  createInterestButtons(interestFields, interestsContainer, hiddenInput)

  /* Contact links */
  createContactLinks(formContainer)
}
