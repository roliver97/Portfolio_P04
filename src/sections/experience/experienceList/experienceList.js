export const templateExperienceList = (item, className) => {
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
