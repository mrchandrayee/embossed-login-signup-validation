const authShell = document.getElementById("authShell");

function switchMode(mode) {
  authShell.classList.toggle("is-login", mode === "login");
  clearAlerts();
}

document.querySelectorAll("[data-switch]").forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.switch));
});

function clearFormErrors(form) {
  form.querySelectorAll(".field").forEach((field) => {
    field.classList.remove("invalid");
    const error = field.querySelector(".error");
    if (error) error.textContent = "";
  });
}

function clearAlerts() {
  document.querySelectorAll(".alert-box").forEach((alert) => { alert.hidden = true; });
  document.querySelectorAll(".auth-form").forEach(clearFormErrors);
  const termsError = document.getElementById("termsError");
  if (termsError) termsError.textContent = "";
}

function setError(input, message) {
  const field = input.closest(".field");
  field.classList.add("invalid");
  field.querySelector(".error").textContent = message;
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

document.querySelectorAll(".auth-form .input").forEach((input) => {
  input.addEventListener("input", () => {
    const field = input.closest(".field");
    field.classList.remove("invalid");
    field.querySelector(".error").textContent = "";
    const alert = input.form.querySelector(".alert-box");
    alert.hidden = true;
  });
});

document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  clearFormErrors(form);
  const alert = document.getElementById("signupAlert");
  const first = document.getElementById("firstName");
  const last = document.getElementById("lastName");
  const email = document.getElementById("signupEmail");
  const password = document.getElementById("signupPassword");
  const confirm = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");
  const termsError = document.getElementById("termsError");
  let valid = true;

  if (first.value.trim().length < 2) { setError(first, "Enter your first name."); valid = false; }
  if (last.value.trim().length < 2) { setError(last, "Enter your last name."); valid = false; }
  if (!validEmail(email.value.trim())) { setError(email, "Enter a valid email address."); valid = false; }
  if (password.value.length < 8) { setError(password, "Password must be at least 8 characters."); valid = false; }
  if (confirm.value !== password.value || !confirm.value) { setError(confirm, "Passwords do not match."); valid = false; }
  if (!terms.checked) { termsError.textContent = "Please accept the terms & conditions."; valid = false; }

  if (!valid) {
    document.getElementById("signupAlertText").textContent =
      "Please fill all fields correctly, match passwords, and accept the terms & conditions.";
    alert.hidden = false;
    return;
  }

  alert.hidden = true;
  alert.classList.add("success-alert");
  alert.querySelector("strong").textContent = "Validation Successful";
  document.getElementById("signupAlertText").textContent =
    "Your details passed the demo validation. Connect an authentication backend to create the account.";
  alert.hidden = false;
  form.reset();
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  clearFormErrors(form);
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const alert = document.getElementById("loginAlert");
  let valid = true;

  if (!validEmail(email.value.trim())) { setError(email, "Enter a valid email address."); valid = false; }
  if (!password.value) { setError(password, "Enter your password."); valid = false; }

  if (!valid) {
    document.getElementById("loginAlertText").textContent = "Please enter a valid email address and password.";
    alert.hidden = false;
    return;
  }

  alert.hidden = false;
  alert.querySelector("strong").textContent = "Demo Login";
  document.getElementById("loginAlertText").textContent =
    "Input validation passed. Real sign-in requires a connected authentication backend.";
  form.reset();
});

document.getElementById("forgotLink").addEventListener("click", (event) => {
  event.preventDefault();
  const alert = document.getElementById("loginAlert");
  alert.hidden = false;
  alert.querySelector("strong").textContent = "Password Reset";
  document.getElementById("loginAlertText").textContent =
    "Password reset is a demo placeholder. Connect your email/auth service to enable it.";
});
