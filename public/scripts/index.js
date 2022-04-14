// Quando fizer a validação do perfil, inserir o checklength na importação abaixo
import {validate} from './validation.js'

// Validação dos campos de login
const loginInputs = document.querySelectorAll('[data-type]')

loginInputs.forEach(input => {
  input.addEventListener('blur', event => {
    validate(event.target)
  })
})

// Função de visualizar senha
const viewPass = document.querySelector('.login__form--viewpass')
const passInput = document.querySelector('[data-type="pass"]')

viewPass.addEventListener('click', () => {
  if (passInput.type === 'password') {
    passInput.type = 'text'
  } else {
    passInput.type = 'password'
  }
})

// Rearranjar código para validação da edição de cadastro
// const contactInputs = document.querySelectorAll('[data-type="contact"]')

// contactInputs.forEach(input => {
//   input.addEventListener('keyup', event => {
//     checkLength(event.target)
//   })
// })

// contactInputs.forEach(input => {
//   input.addEventListener('blur', event => {
//     validate(event.target)
//   })
// })
