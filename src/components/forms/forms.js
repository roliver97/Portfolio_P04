export const templateForm = (
  fields,
  className = 'genericForm',
  submitText = 'Submit'
) => {
  const form = document.createElement('form')
  form.className = className

  fields.forEach((field) => {
    const wrapper = document.createElement('div')
    wrapper.className = 'formGroup'

    if (!field.noLabel) {
      const label = document.createElement('label')
      label.textContent = field.label
      label.setAttribute('for', field.name)
      wrapper.appendChild(label)
    }

    let input
    // En caso de que pasemos como argumento dentro de "fields" un "textarea"
    if (field.type === 'textarea') {
      input = document.createElement('textarea')
    }
    // En caso de que pasemos como argumento dentro de "fields" un "select"
    else if (field.type === 'select') {
      input = document.createElement('select')

      // Opciones del "select"
      field.options?.forEach((option) => {
        // ponemos "?" después de options para que, si algun field no tiene "options" dentro, el codigo no se rompa
        const optEl = document.createElement('option')
        optEl.value = option.value
        optEl.textContent = option.label
        input.appendChild(optEl)
      })
    }
    // En caso que pasemos un .type que no sea "textarea" o "select, será ese .type. En caso de que no pasemos ningun .type como argumento o si pasamos un "undefined", será "text"
    else {
      input = document.createElement('input')
      input.type = field.type || 'text'
    }

    input.id = field.name
    input.name = field.name
    input.placeholder = field.placeholder || ''

    wrapper.appendChild(input)
    form.appendChild(wrapper)
  })

  const button = document.createElement('button')
  const submitIcon = document.createElement('img')

  button.type = 'submit'
  button.textContent = submitText
  button.id = 'formSubmitButton'
  submitIcon.id = 'formSubmitIcon'
  submitIcon.src = import.meta.env.BASE_URL + 'icons/paper_plane.png'
  button.prepend(submitIcon)
  form.appendChild(button)

  return form
}
