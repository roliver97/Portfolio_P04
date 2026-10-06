import './experience.css'
import { createButton } from '../../components/buttons/buttons.js'

import experiences from '../../data/experiences.json'
import studies from '../../data/studies.json'
import { changeExperienceContainer } from './experienceListeners/experienceListeners.js'

export const printExperience = () => {
  templateExperience()
  changeExperienceContainer()
}

const templateExperience = () => {
  const experienceSection = document.createElement('section')
  experienceSection.id = 'experienceSection'
  document.body.appendChild(experienceSection)

  /*SECCIONES DE EXPERIENCE*/
  const experienceHeader = document.createElement('div')
  experienceHeader.id = 'experienceHeader'

  const experienceContainer = document.createElement('div')
  experienceContainer.id = 'experienceContainer'

  experienceSection.appendChild(experienceHeader)
  experienceSection.appendChild(experienceContainer)

  /*CONTENIDO DE CADA SECCIÓN*/
  /* Experience Header */
  const experienceButton = createButton('Experience', 'experienceButton active')
  experienceButton.id = 'experienceButton'
  experienceButton.classList.add('underlined')

  const studiesButton = createButton('Studies', 'experienceButton')
  studiesButton.id = 'studiesButton'
  studiesButton.classList.add('underlined')

  experienceHeader.appendChild(experienceButton)
  experienceHeader.appendChild(studiesButton)

  /* Experience Div */
  const experienceDiv = document.createElement('div')
  experienceDiv.id = 'experienceDiv'
  experienceContainer.appendChild(experienceDiv)

  const experienceList = document.createElement('ul')

  experiences.forEach((exp) => {
    const li = templateExperienceList(exp, 'jobsPlaceAndPeriod')
    experienceList.appendChild(li)
  })

  experienceDiv.appendChild(experienceList)

  /* Studies Div */
  const studiesDiv = document.createElement('div')
  studiesDiv.id = 'studiesDiv'
  experienceContainer.appendChild(studiesDiv)

  const studiesList = document.createElement('ul')

  studies.forEach((study) => {
    const li = templateExperienceList(study, 'studiesPlaceAndPeriod')
    studiesList.appendChild(li)
  })

  studiesDiv.appendChild(studiesList)
}

const templateExperienceList = (item, className) => {
  const li = document.createElement('li')
  const h4 = document.createElement('h4')
  const description = document.createElement('p')
  const placeAndPeriod = document.createElement('p')

  h4.textContent = item.title
  description.textContent = item.description
  placeAndPeriod.textContent = item.placeAndPeriod
  placeAndPeriod.className = className

  li.appendChild(h4)
  li.appendChild(description)
  li.appendChild(placeAndPeriod)

  return li
}
