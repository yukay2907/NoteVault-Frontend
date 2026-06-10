const body = document.querySelector("body");
const signInSignUpButton = document.querySelector(".sign-in-sign-up");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

signInSignUpButton.addEventListener("click", () => {
  location.href = "/pages/signInsignUp/authenticate.html";
});
