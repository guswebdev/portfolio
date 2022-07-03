
import { validarAsunto } from "./js/validarAsunto.js";
import { validarEmail } from "./js/validarEmail.js";
import { validarMensaje } from "./js/validarMensaje.js";
import { validarNombre } from "./js/validarNombre.js";


const d = document;
const $form = d.querySelector("[data-form]");

const blur = (e) => {
  if (e.target.matches(`[data-nombre]`)) {
    validarNombre(e.target)
  }

  if (e.target.matches(`[data-email]`)) {
    validarEmail(e.target)
  }

  if (e.target.matches(`[data-subject]`)) {
    validarAsunto(e.target)
  }

  if (e.target.matches(`[data-message]`)) {
    validarMensaje(e.target)
  }

};

$form.addEventListener("blur", blur, true);
