import './global.css'
import { printHeader } from '/src/components/header/header.js'
import { printHero } from './src/sections/hero/hero.js'
import { printAbout } from './src/sections/about/about.js'
import { printExperience } from './src/sections/experience/experience.js'
import { printProjects } from './src/sections/projects/projects.js'
import { printFooter } from './src/sections/footer/footer.js'
import { printContact } from './src/sections/contact/contact.js'
import { showBackToTop } from './src/components/backToTop/backToTop.js'
import { showChangeSection } from './src/components/changeSectionButtons/changeSectionButtons.js'
import { initHeaderObserver } from './src/utils/headerObserver.js'

printHeader()
printHero()
printAbout()
printExperience()
printProjects()
printContact()
printFooter()
showBackToTop()
showChangeSection()

initHeaderObserver()
