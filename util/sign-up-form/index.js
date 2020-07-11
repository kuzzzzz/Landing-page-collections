const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorClass("firstname", "First Name is required");
  } else {
    removeErrorClass("firstname");
  }
  if (lastName === "") {
    addErrorClass("lastname", "Last Name is required");
  } else {
    removeErrorClass("lastname");
  }
  if (!validateEmail(email)) {
    addErrorClass("email", "Email is not Valid");
  } else {
    removeErrorClass("email");
  }
  if (password === "") {
    addErrorClass("password", "Password is required");
  } else {
    removeErrorClass("password");
  }
});

function addErrorClass(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  if (field === "email") {
    document.getElementById("email").placeholder = "email@example.com";
  }
  small.innerText = message;
  small.style.opacity = "1";
}

function removeErrorClass(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
  small.style.opacity = "0";
}
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
