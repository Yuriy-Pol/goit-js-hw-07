const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  const trimmedEmail = emailInput.value.trim();
  const trimmedPassword = passwordInput.value.trim();

  if (trimmedEmail === "" || trimmedPassword === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: trimmedEmail,
    password: trimmedPassword,
  };

  console.log(formData);

  this.reset();
});
