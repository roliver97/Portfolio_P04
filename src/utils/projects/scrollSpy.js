export const updateActiveButtonOnScroll = (container, grids, buttons) => {
  const [projectsReactButton, projectsNodeButton, projectsJsButton] = buttons
  const buttonsMap = {
    react_cards: projectsReactButton,
    node_cards: projectsNodeButton,
    vanilla_cards: projectsJsButton
  }

  const handleScrollCalc = () => {
    const containerRect = container.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2

    let closestGrid = null
    let minDistance = Infinity

    grids.forEach((grid) => {
      const gridRect = grid.getBoundingClientRect()
      const gridCenter = gridRect.left + gridRect.width / 2
      const distance = Math.abs(containerCenter - gridCenter)

      if (distance < minDistance) {
        minDistance = distance
        closestGrid = grid
      }
    })

    if (closestGrid) {
      const targetId = closestGrid.id

      projectsReactButton.classList.remove('active')
      projectsNodeButton.classList.remove('active')
      projectsJsButton.classList.remove('active')

      const activeBtn = buttonsMap[targetId]
      if (activeBtn) {
        activeBtn.classList.add('active')
      }
    }
  }

  handleScrollCalc()

  container.addEventListener(
    'scroll',
    () => {
      window.requestAnimationFrame(handleScrollCalc)
    },
    { passive: true }
  )
}
