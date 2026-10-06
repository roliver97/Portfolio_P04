export const changeExperienceContainer = () => {
  const experienceButton = document.querySelector('#experienceButton')
  const studiesButton = document.querySelector('#studiesButton')
  const experienceDiv = document.querySelector('#experienceDiv')
  const studiesDiv = document.querySelector('#studiesDiv')

  experienceDiv.className = 'experience-active'
  studiesDiv.className = 'studies-hidden'

  experienceButton.addEventListener('click', () => {
    experienceButton.classList.add('active')
    studiesButton.classList.remove('active')
    experienceDiv.className = 'experience-active'
    studiesDiv.className = 'studies-hidden'
  })

  studiesButton.addEventListener('click', () => {
    experienceButton.classList.remove('active')
    studiesButton.classList.add('active')
    experienceDiv.className = 'experience-hidden'
    studiesDiv.className = 'studies-active'
  })
}
