export const setupCardDragScroll = () => {
  const slider = document.querySelector('#cardsContainer')
  if (!slider) return

  let isDown = false
  let startX
  let scrollLeft

  slider.addEventListener('mousedown', (e) => {
    e.preventDefault()
    // mousedown === clicking
    isDown = true
    slider.style.scrollBehavior = 'auto'
    startX = e.pageX
    scrollLeft = slider.scrollLeft
  })

  slider.addEventListener('mouseup', () => {
    isDown = false
  })

  slider.addEventListener('mouseleave', () => {
    isDown = false
  })

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 1.2 // Movement speed multiplier
    slider.scrollLeft = scrollLeft - walk
  })
}
