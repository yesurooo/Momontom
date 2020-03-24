const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector(".js-toDoInput"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "todo";

let toDos = [];

function renewId() {
  for (var i = 0; i < toDos.length; i++) {
    toDos[i].id = i + 1;
    const toDoListItem = toDoList.querySelectorAll(".toDo__item");
    toDoListItem[i].id = i + 1;
  }
  saveToDo();
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  renewId();
}

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  li.classList.add("toDo__item");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.id = newId;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
