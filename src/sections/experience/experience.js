import './experience.css'
import { createButton } from '../../components/buttons/buttons.js'
import { templateExperienceList } from './experience_subcomponents/templateExperienceList/templateExperienceList.js'

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
  const experienceButton = createButton('Experience', 'experienceButton')
  experienceButton.id = 'experienceButton'

  const studiesButton = createButton('Studies', 'experienceButton')
  studiesButton.id = 'studiesButton'

  experienceHeader.appendChild(experienceButton)
  experienceHeader.appendChild(studiesButton)

  /* Experience Container */
  const experienceDiv = document.createElement('div')
  experienceDiv.id = 'experienceDiv'
  experienceContainer.appendChild(experienceDiv)

  // Array de experiences
  const experiences = [
    {
      title: 'BLAY TAMARIT, SL / RAMADERA MONTPEDRÓS, SLU',
      description: 'Operations & Administration',
      placeAndPeriod: '2022 - 2025 | Gualta, Girona'
    },
    {
      title: 'LOUIS VUITTON S.A. – Manufacture de Maroquinerie et Accessoires',
      description: 'Leather Goods Specialist',
      placeAndPeriod: '2019 - 2022 | Barberà del Vallès, Barcelona'
    }
  ]

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

  // Array de studies
  const studies = [
    {
      title: 'UNIVERSITAT DE VIC (Crash Escuela Audiovisual)',
      description: 'Diploma in Sound Engineering and Music Production',
      placeAndPeriod: '2015 - 2016 | Manresa, Barcelona'
    },
    {
      title: "INSTITUT D'AURO",
      description: 'High School Diploma, Social & Humanities Track',
      placeAndPeriod: '2013 - 2015 | Santpedor, Barcelona'
    }
  ]

  const studiesList = document.createElement('ul')

  studies.forEach((study) => {
    const li = templateExperienceList(study, 'studiesPlaceAndPeriod')
    studiesList.appendChild(li)
  })

  studiesDiv.appendChild(studiesList)
}

const changeExperienceContainer = () => {
  const experienceButton = document.querySelector('#experienceButton')
  const studiesButton = document.querySelector('#studiesButton')
  const experienceDiv = document.querySelector('#experienceDiv')
  const studiesDiv = document.querySelector('#studiesDiv')

  experienceDiv.className = 'experience-active'
  studiesDiv.className = 'studies-hidden'

  experienceButton.addEventListener('click', () => {
    experienceDiv.className = 'experience-active'
    studiesDiv.className = 'studies-hidden'
  })

  studiesButton.addEventListener('click', () => {
    experienceDiv.className = 'experience-hidden'
    studiesDiv.className = 'studies-active'
  })
}
