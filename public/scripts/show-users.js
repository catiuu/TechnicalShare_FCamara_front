// Declaração de variáveis
const cards = document.querySelector('.main__result--cards')

// Buscar informação dos users no banco de dados
function getUsers() {
  const apiUrl = 'http://localhost:3000/admin/users/skills'

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        let userSkills = ''
        const userCard = document.createElement('div')
        userCard.classList.add('main__result--card')
        userCard.setAttribute('data-id', `${user.id}`)

        for (let i = 0; i < user.Skills.length; i++) {
          userSkills += `
          <p>${user.Skills[i].name}</p>
        `
          console.log(userSkills)
        }

        userCard.innerHTML = `
      <div class="main__result--image">
        <img src="/public/images/${user.id}.png">
      </div>
      <div class="main__result--user">
        <p class="main__result--user_name" data-filter="userName">${user.fullName}</p>
        <p class="main__result--user_job" data-filter="userJob">${user.jobTitle} • Júnior • ${user.pronouns} 🏵️</p>
      </div>
      <div class="main__result--techs">
          ${userSkills}
      </div>
      <div class="main__result--link">
        <a href="#">Ver Perfil</a>
      </div>
      `
        cards.appendChild(userCard)
      })
    })
    .catch(
      data =>
        (cards.innerHTML =
          '<p>Não foi possível recuperar os dados de usuário.</p>')
    )
}

getUsers()
