const search = document.querySelector("#search");
const backBtn = document.querySelector(".back");

// Voltar página
backBtn.addEventListener("click", () => {
  console.log(backBtn);
  window.history.back();
});
