const button = document.querySelector(".input-btn");
const input = document.querySelector(".input-email");
const ph = document.querySelector("#primary-heading");

let isInputFocused = false;

button.addEventListener("click", function () {
  if (isInputFocused) {
    input.blur();
    isInputFocused = false;
  } else {
    input.focus();
    isInputFocused = true;
  }
});
