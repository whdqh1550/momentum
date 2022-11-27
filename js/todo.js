const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const savedTodos = localStorage.getItem(TODOS_KEY);
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //make any object to be string, this keeps the form of array
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id)); // filter is making new array excluding that returend false,
  saveTodos();
}

function paintTodo(newTodo) {
  console.log(`this is in painttodo${newTodo}`);
  const li = document.createElement("li");
  li.id = newTodo.id; //giving id to each of the list
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  console.log(li);
  todoList.appendChild(li);
}

function todoSubmitHandler(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    //this is objectified because to keep the text and id together so it can be deleted
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
todoForm.addEventListener("submit", todoSubmitHandler);

console.log(savedTodos);

function sayhello(item) {
  //item is automatically given by js
  console.log("this is the turn of", item);
}

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  console.log(length.parsedTodos);
  toDos = parsedToDos; // setting the ones in local storage to be todos array, since it is array it is competible
  parsedToDos.forEach(paintTodo); //also can be done parsedToDos.forEach((item)=>console.log("this is shorter way",tiem));
}
