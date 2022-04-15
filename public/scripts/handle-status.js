const profileStatus = document.querySelector('.profile__contact--status')
const profileAvail = document.querySelector('.profile__contact--daytime')
const userId = document.querySelector('[data-user]').dataset.user

if(userId == 3) {
    profileStatus.innerHTML = "🌙 Ausente"
    profileAvail.style.display = 'none' 
}