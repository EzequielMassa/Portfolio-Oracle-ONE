import link from "./menu-link-active.js";
import { openBtn, closeBtn } from "./menu-mobile.js";
import { validar } from "./validar.js";

const inputs = document.querySelectorAll(".input-text-validate");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validar(input.target);
  });
});
