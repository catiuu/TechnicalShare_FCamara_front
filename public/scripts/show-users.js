// Declaração de variáveis
const cards = document.querySelector('.cards')

// Buscar informação dos users no banco de dados
function getUsers() {
  const apiUrl = "http://localhost:3000/admin/users/skills"

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      let userSkills = ''
      const userCard = document.createElement('div')
      userCard.classList.add('card')
      userCard.setAttribute('data-id', `${user.id}`)

      for(let i = 0; i < user.Skills.length; i++){
        userSkills += `
          <p style="display:none">${user.Skills[i].name}</p>
          <img src="https://img.shields.io/badge/-${user.Skills[i].name}-36357E?style=plastic">
        `
        console.log(userSkills)
      }

      userCard.innerHTML = `
      <div class="card__image">
        <img src="/public/images/${user.id}.png">
      </div>
      <div class="card__user" data-filter="userName">
        <p>${user.fullName}</p>
      </div>
      <div class="card__info">
        <div class="card__info--job" data-filter="userJob">
          <p>${user.jobTitle}</p>
        </div>
        <div class="card__info--contact" data-filter>
          <p>${user.email}</p>
        </div>
        <div class="card__info--techs" data-filter>
          ${userSkills}
        </div>
      </div>
      `
      cards.appendChild(userCard)
    })
  })
  .catch(data => cards.innerHTML = "<p>Não foi possível recuperar os dados de usuário.</p>")
}

getUsers()