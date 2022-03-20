export function validar(input) {
  const inputType = input.dataset.type;

  if (input.validity.valid) {
    input.parentElement
      .querySelector(".contacto__formulario__label")
      .classList.remove("error");
    input.parentElement.querySelector(".error__mensaje").innerHTML = "";
  } else {
    input.parentElement
      .querySelector(".contacto__formulario__label")
      .classList.add("error");
    input.parentElement.querySelector(".error__mensaje").innerHTML =
      mostrarMensajeError(inputType, input);
  }
}

const errorTypes = ["valueMissing", "typeMismatch", "patternMismatch"];

const mensajesError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacio",
    typeMismatch: "El correo no es valido",
    patternMismatch: "Indique un correo valido",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacio",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacio",
  },
};

function mostrarMensajeError(inputType, input) {
  let mensaje = "";
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesError[inputType][error];
    }
  });
  return mensaje;
}
