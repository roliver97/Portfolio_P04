import './modals.css'
import { scrollToTop } from '../components/backToTop/backToTop'

export const renderSpinnerModal = () => {
  const modalContainer = document.createElement('div')
  modalContainer.className = 'modal-container spinner-modal-container'

  const spinner = document.createElement('div')
  spinner.className = 'spinner'

  modalContainer.appendChild(spinner)

  return modalContainer
}

export const renderErrorModal = (
  message = '❌ Something went wrong. Please try again.',
  btnMessage = 'Try again'
) => {
  const modalContainer = document.createElement('div')
  modalContainer.className = 'modal-container error-modal-container'

  const p = document.createElement('p')
  p.className = 'modal-message'
  p.textContent = message
  modalContainer.appendChild(p)

  const btn = document.createElement('button')
  btn.className = 'generic-modal-btn'
  btn.textContent = btnMessage

  btn.addEventListener('click', () => {
    modalContainer.remove()
  })

  modalContainer.appendChild(btn)

  return modalContainer
}

export const renderSuccessModal = (
  message = '✅ Success! Operation completed successfully.',
  btnMessage = 'Try again',
  scrollToTopOnSuccess = false
) => {
  const modalContainer = document.createElement('div')
  modalContainer.className = 'modal-container success-modal-container'

  const p = document.createElement('p')
  p.className = 'modal-message'
  p.textContent = message
  modalContainer.appendChild(p)

  const btn = document.createElement('button')
  btn.className = 'generic-modal-btn'
  btn.textContent = btnMessage

  btn.addEventListener('click', () => {
    modalContainer.remove()
    if (scrollToTopOnSuccess === true) scrollToTop()
  })

  modalContainer.appendChild(btn)

  return modalContainer
}
