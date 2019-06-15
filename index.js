const todos = [createTodo("始めてのTodoです。")];

const mainEl = document.querySelector("main");
const containerEl = document.querySelector("main .container");
const addButtonEl = document.querySelector(".add-button");
addButtonEl.addEventListener("click", handleAddButtonClick);

updateTodoEls();

function handleAddButtonClick() {
  todos.push(createTodo("新しいTodoです。"));
  updateTodoEls();
}

function updateTodoEls() {
  const oldTodoEls = document.querySelectorAll(".todo-card");
  oldTodoEls.forEach(todoEl => containerEl.removeChild(todoEl));

  const todoEls = todos.map(todo => createTodoEl(todo));
  todoEls.forEach(todoEl => containerEl.appendChild(todoEl));
}

function getUnique(){
  const strong = 1000;
  return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16);
}

function createTodo(content) {
  return {
    content,
    createdAt: new Date(),
    id: getUnique()
  };
}

function createTodoEl(newTodo) {
  const todoContainerEl = document.createElement("div");
  todoContainerEl.classList.add("todo-card");
  const todoTextareaEl = document.createElement("textarea");
  todoTextareaEl.value = newTodo.content;
  const todoCreatedAtTextEl = document.createElement("span");
  todoCreatedAtTextEl.textContent = newTodo.createdAt.toString();

  todoContainerEl.appendChild(todoTextareaEl);
  todoContainerEl.appendChild(todoCreatedAtTextEl);

  return todoContainerEl;
}
