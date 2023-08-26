const cardsInativos = document.querySelectorAll(".hide");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

if (btnOpen) {
 btnOpen.addEventListener("click", () => {
  cardsInativos.forEach((i) => {
   i.classList.toggle("active");
  });
  btnOpen.classList.add("hide");
  btnClose.classList.add("open");
 });
}

if (btnClose) {
 btnClose.addEventListener("click", () => {
  cardsInativos.forEach((i) => {
   i.classList.toggle("active");
  });
  btnOpen.classList.remove("hide");
  btnClose.classList.remove("open");
 });
}
