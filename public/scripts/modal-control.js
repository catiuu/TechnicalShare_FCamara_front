let modal = document.querySelector(".modal-wrapper");
let button = document.querySelector(".modal-wrapper .button");

// Controle da modal
modal.addEventListener("click", () => {
  modal.classList.remove("active");
  localStorage.setItem('IsModalShown',true);
});

button.addEventListener("click", () => {
  modal.classList.remove("active");
  localStorage.setItem('IsModalShown',true);
});

document.addEventListener('keyup', event=>{
  if(event.key === 'Escape') {
    modal.classList.remove("active");
    localStorage.setItem('IsModalShown',true);
  }
})

// Mostrar modal apenas uma vez
if (localStorage.getItem('IsModalShown').toString() == 'true') 
{
   modal.classList.remove('active');
   localStorage.setItem('IsModalShown',true);
}

