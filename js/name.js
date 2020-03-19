const nameForm = document.querySelector(".js-form"),
  nameInput = nameForm.querySelector(".js-form__input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentName",
  SHOWING_CN = "showing";

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  nameInput.classList.add(SHOWING_CN);
  nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
  nameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${name}`;
}

function loadName() {
  const currentName = localStorage.getItem(USER_LS);
  if (currentName === null) {
    askForName();
  } else {
    paintGreeting(currentName);
  }
}

function init() {
  loadName();
}

init();
