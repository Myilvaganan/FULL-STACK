/* 
=========
SELECTORS
=========
*/
const todoInput = document.querySelector(".todo-list-input");
const todoButton = document.querySelector(".todo-list-button");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector(".filter-todo");

/* 
===============
EVENT LISTENERS
===============
*/
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", ()=>{
    if(todoInput.value == ""){
        alert("Type Something and Add Items!");
    }else{
        addTodoData(event);
    }
});

todoList.addEventListener("click", deleteItemCheck);

filter.addEventListener("click", filterList);

/* 
========
FUNCTION
========
*/

function addTodoData(event) {
  // prevent form from submitting
  event.preventDefault();

  //create Div element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create list of items
  const todoDivLi = document.createElement("li");
  todoDivLi.innerText = todoInput.value;
  todoDivLi.classList.add("todo-item");
  todoDiv.appendChild(todoDivLi);

  saveTodos(todoInput.value);

  //create mark button
  const todoItemDone = document.createElement("button");
  todoItemDone.innerHTML = '<i class="fas fa-check"></i>';
  todoItemDone.classList.add("done-button");
  todoDiv.appendChild(todoItemDone);

  //create delete button
  const todoItemDelete = document.createElement("button");
  todoItemDelete.innerHTML = '<i class="fas fa-trash"></i>';
  todoItemDelete.classList.add("delete-button");
  todoDiv.appendChild(todoItemDelete);

  todoList.appendChild(todoDiv);

  //clear to do input value

  todoInput.value = "";
}

function deleteItemCheck(e) {
  const item = e.target;

  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement;
    todo.classList.add("deleteFall");
    removeLocalStorageTodos(todo);
    todo.addEventListener("transitionend", () => todo.remove());
  }

  if (item.classList[0] === "done-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterList(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveTodos(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list of items
    const todoDivLi = document.createElement("li");
    todoDivLi.innerText = todo;
    todoDivLi.classList.add("todo-item");
    todoDiv.appendChild(todoDivLi);

    //create mark button
    const todoItemDone = document.createElement("button");
    todoItemDone.innerHTML = '<i class="fas fa-check"></i>';
    todoItemDone.classList.add("done-button");
    todoDiv.appendChild(todoItemDone);

    //create delete button
    const todoItemDelete = document.createElement("button");
    todoItemDelete.innerHTML = '<i class="fas fa-trash"></i>';
    todoItemDelete.classList.add("delete-button");
    todoDiv.appendChild(todoItemDelete);

    todoList.appendChild(todoDiv);
  });
}

function removeLocalStorageTodos(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
