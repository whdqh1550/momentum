const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector(" button");

function loginBtnListener() {
  const value = loginInput.value;
  if (value === "") {
    alert("please fill the input");
  } else if (value.length < 8) {
    alert("make longer than 8 characters");
  }
}

loginButton.addEventListener("click", loginBtnListener);
sdasdas;
