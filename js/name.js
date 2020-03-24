const nameForm = document.querySelector(".js-nameForm"),
  nameInput = nameForm.querySelector(".js-nameForm__input"),
  greeting = document.querySelector(".js-nameTitle");

const NAME_LS = "currentName",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}

function loadedName() {
  const currentName = localStorage.getItem(NAME_LS);
  if (currentName === null) {
    askForName();
  } else {
    paintGreeting(currentName);
  }
}

function init() {
  loadedName();
}

init();
