import './footer.css'

const templateFooter = () => {
  return `
    <h4>© 2026 Romà Oliver · Built with Passion & Code</h4>
    `
}

export const printFooter = () => {
  const footer = document.createElement('footer')
  document.body.appendChild(footer)
  footer.innerHTML = templateFooter()
}
