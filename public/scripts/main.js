import loadProfile from "./load-profile.js"

const menuBtn = document.querySelector('.header__user a')
const backBtn = document.querySelector('.back a')

// Carregar dados do usuário na página de perfil logado
menuBtn.addEventListener('click', loadProfile)

// Voltar página
backBtn.addEventListener('click', ()=>{
    history.back()
})