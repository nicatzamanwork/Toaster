let MessageContent = document.getElementById("message-content");
let toastsContainer = document.getElementById("toasts");
let SuccessMessage = document.getElementById("success");
let ErrorMessage = document.getElementById("error");
let Time = document.getElementById("duration");
function Add() {
  let ToastElement = document.createElement("div");
  ToastElement.classList.add("success-toast");

  let PElement = document.createElement("p");
  PElement.classList.add("message");
  PElement.innerHTML = MessageContent.value;

  let CancelButon = document.createElement("button");
  CancelButon.innerHTML = "X";
  CancelButon.classList.add("cancel-button");

  if (SuccessMessage.checked) {
    let ToastElement = document.createElement("div");
    ToastElement.classList.add("success-toast");
    toastsContainer.appendChild(ToastElement);
    ToastElement.appendChild(PElement);
    ToastElement.appendChild(CancelButon);
  } else {
    let ToastElement = document.createElement("div");
    ToastElement.classList.add("error-toast");
    toastsContainer.appendChild(ToastElement);
    ToastElement.appendChild(PElement);
    ToastElement.appendChild(CancelButon);
  }
}
