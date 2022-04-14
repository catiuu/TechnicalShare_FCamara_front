export default function loadProfile(event){
    const userName = document.querySelector('.profile__user--name')
    event.preventDefault()
    const userId = event.target.dataset.id
    console.log(userId)

    const apiUrl = 'https://technicalsaher-api.herokuapp.com/admin/users/skills'
  
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if(data.id === userId){
            userName.textContent = data.fullName
        }
    })
}