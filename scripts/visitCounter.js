// page visit count
const visitFeedback = document.querySelector('#visitCount');
let numVisits = localStorage.getItem("visits")
console.log(numVisits)
if (numVisits == null) {
  visitFeedback.textContent = "This is your first time visiting"
  localStorage.setItem("visits", 1);
} else {
  numVisits++;
  localStorage.setItem("visits", numVisits);
  visitFeedback.innerHTML = `You have been here ${numVisits} times 😀`
}