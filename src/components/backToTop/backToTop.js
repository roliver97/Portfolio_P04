import './backToTop.css'

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function showBackToTop() {
  const backToTopBtn = document.createElement('button')
  const backToTopIcon = document.createElement('img')
  backToTopBtn.id = 'backToTop'
  backToTopIcon.id = 'backToTopIcon'
  backToTopIcon.src = import.meta.env.BASE_URL + 'icons/backtotop.png'
  backToTopBtn.appendChild(backToTopIcon)
  document.body.appendChild(backToTopBtn)

  backToTopBtn.addEventListener('click', scrollToTop)

  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 85 ? 'flex' : 'none'
  })
}
