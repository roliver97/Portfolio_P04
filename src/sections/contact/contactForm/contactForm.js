import { templateForm } from '../../../components/forms/forms'
import {
  renderErrorModal,
  renderSpinnerModal,
  renderSuccessModal
} from '../../../modals/modals'

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

export const templateContactForm = () => {
  const form = templateForm(contactFields, 'contactForm', 'Submit')

  form.action = 'https://formspree.io/f/xdekwryv'

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(form)
    console.log(data)

    let isAnyFieldEmpty = false

    data.forEach((value) => {
      if (typeof value === 'string' && value.trim() === '') {
        isAnyFieldEmpty = true
      }
    })

    if (isAnyFieldEmpty) {
      const alertModalElement = renderErrorModal(
        '❌ Please fill in all required fields.'
      )
      document.body.appendChild(alertModalElement)
      return
    }

    const spinnerElement = renderSpinnerModal()
    document.body.appendChild(spinnerElement)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      })

      spinnerElement.remove()

      if (response.ok) {
        const alertModalElement = renderSuccessModal(
          '✅ Thank you! Your message has been sent successfully.',
          'Close',
          true
        )
        document.body.appendChild(alertModalElement)
        form.reset()

        return
      } else {
        const alertModalElement = renderErrorModal(
          '❌ There was an error sending the message.'
        )
        document.body.appendChild(alertModalElement)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  })

  return form
}
