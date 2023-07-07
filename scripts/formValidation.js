//Form Validation
const password1 = document.querySelector('input[name=pass1]')
const password2 = document.querySelector('input[name=pass2]')
const matchMessage = document.querySelector('#feedback')
password2.addEventListener("focusout", matchCheck);
function matchCheck() {
  if (password1.value !== password2.value) {
    matchMessage.textContent = "Sorry, passwords do not match"
    password1.value = "";
    password2.value = "";
    password1.focus();
  } else {
    matchMessage.textContent = ""
  }
}// end function

//Display Slider Value
const rateDisplay = document.querySelector('#rating');
const rateSlider = document.querySelector('input[type=range]');
function displayRating() {
  rateDisplay.innerHTML = rateSlider.value;
}
rateSlider.addEventListener('change', displayRating)