export const openBtn = document.querySelector("[data-mobile-btn-open]");
export const closeBtn = document.querySelector("[data-mobile-btn-close]");
const mainNav = document.querySelector("[data-main-nav]");

openBtn.addEventListener("click", () => {
  mainNav.classList.add("abrir-menu");
});
closeBtn.addEventListener("click", () => {
  mainNav.classList.remove("abrir-menu");
});
