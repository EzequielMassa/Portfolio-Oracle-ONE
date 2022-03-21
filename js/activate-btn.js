const sendBtn = document.querySelector("[data-send]");

function activateBtn() {
  let inputNameTxt = document.querySelector(".input__nombre").value;
  let inputEmailTxt = document.querySelector(".input__email").value;
  let inputAsuntoTxt = document.querySelector(".input__asunto").value;
  let inputMensajeTxt = document.querySelector(".input__mensaje").value;

  let inputValue = 0;

  if (
    inputNameTxt == "" ||
    inputEmailTxt == "" ||
    inputAsuntoTxt == "" ||
    inputMensajeTxt == ""
  ) {
    inputValue++;
  }
  if (inputValue == 0) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
}

export default activateBtn;
