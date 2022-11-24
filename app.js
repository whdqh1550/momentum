const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector(" button");

function loginsSubmitListener(event) {
  const userName = loginInput.value;
  event.preventDefault();
  console.log(userName);
}

loginForm.addEventListener("submit", loginsSubmitListener);
