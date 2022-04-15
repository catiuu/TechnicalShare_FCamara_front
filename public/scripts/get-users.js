// Procura na lista de skills informada, o input indicado.
// Retorna true se uma das skills tiver o input.
function findUserSkills(skills, searchInput) {
  let retorno = false;
  if (skills) {
    skills.forEach((skill) => {
      retorno = retorno || skill.name.toLowerCase().indexOf(searchInput) >= 0;
    });
  }
  return retorno;
}

// Só é chamada ao clicar no botão.
// Faz o fetch e filtra pelo valor do input.
function getUsers() {
  // Declaração de variáveis
  const cards = document.querySelector(".main__result--cards");
  const phewMsg = `
  <div class="main__result--phew">
  <p>Ufa!</p>
  <p>Achamos alguém para te ajudar.</p>
  </div>
  `;
  cards.innerHTML = phewMsg;
  const apiUrl = "https://technicalsaher-api.herokuapp.com/admin/users/skills";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Coloca os inputs em lower case para permitir busca independente do case.
      let searchInput = document.querySelector("#search").value.toLowerCase();

      // Filtra os usuários por nome, cargo e skills.
      let users = data.filter((user) => {
        let retorno = false;

        // Compara os valores transformando para lower case também.
        retorno =
          user.fullName.toLowerCase().indexOf(searchInput) >= 0 ||
          user.jobTitle.toLowerCase().indexOf(searchInput) >= 0 ||
          findUserSkills(user.Skills, searchInput);

        return retorno;
      });

      // Seta a variável usada pelos cards, com os usuários encontrados.
      data = users;

      data.forEach((user) => {
        let userSkills = "";
        const userCard = document.createElement("div");
        userCard.classList.add("main__result--card");
        //userCard.classList.add("hidden");
        userCard.setAttribute("data-id", `${user.id}`);

        for (let i = 0; i < user.Skills.length; i++) {
          userSkills += `
          <p>${user.Skills[i].name}</p>
        `;
        }

        userCard.innerHTML = `
      <div class="main__result--image">
        <img src="/images/${user.id}.png">
      </div>
      <div class="main__result--user">
        <p class="main__result--user_name" data-filter="userName">${user.fullName}</p>
        <p class="main__result--user_job" data-filter="userJob">${user.jobTitle} • ${user.pronouns} 🏵️</p>
      </div>
      <div class="main__result--techs">
          ${userSkills}
      </div>
      <div class="main__result--link">
        <a href="/profile/${user.id}">Ver Perfil</a>
      </div>
      `;
        cards.appendChild(userCard);
        
        const text = document.querySelector('.main__text')
        text.style.display = 'none'
      });
    })
    .catch(
      (data) =>
        (cards.innerHTML =
          "<p>Não foi possível recuperar os dados de usuário.</p>"),
    );
}

// Associa o click do botão com a execução da busca.
document.querySelector("button").addEventListener("click", () => {
  getUsers();
});
