export const handleCategoryClick = (e, targetSelector) => {
  e.preventDefault()

  const projectsSection = document.querySelector('#projectsSection')
  const cardsContainer = document.querySelector('#cardsContainer')
  const targetGrid = document.querySelector(targetSelector)

  if (!projectsSection || !cardsContainer || !targetGrid) return

  const projectsSectionRect = projectsSection.getBoundingClientRect()
  const isAlreadyInView = Math.abs(projectsSectionRect.top) < 50 // 50-pixel margin

  const scrollToGrid = () => {
    const computedStyle = window.getComputedStyle(cardsContainer)
    const paddingLeft = parseFloat(computedStyle.paddingLeft)

    const containerRect = cardsContainer.getBoundingClientRect()
    const gridRect = targetGrid.getBoundingClientRect()

    const currentScrollLeft = cardsContainer.scrollLeft
    const targetScrollLeft =
      currentScrollLeft + (gridRect.left - containerRect.left) - paddingLeft

    const maxScrollLeft =
      cardsContainer.scrollWidth - cardsContainer.clientWidth

    const finalScrollLeft = Math.max(
      0,
      Math.min(targetScrollLeft, maxScrollLeft)
    )

    cardsContainer.scrollTo({
      left: finalScrollLeft,
      behavior: 'smooth'
    })
  }

  if (!isAlreadyInView) {
    projectsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(() => {
      scrollToGrid()
    }, 200)
  } else {
    scrollToGrid()
  }
}
