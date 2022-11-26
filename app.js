const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector(" button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "username";

function loginsSubmitListener(event) {
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME_KEY, userName);
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(userName);
  paintGreetings(userName);
}
function paintGreetings(name) {
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USER_NAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginsSubmitListener);
} else {
  paintGreetings(savedUsername);
}
