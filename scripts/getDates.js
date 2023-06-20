// This script will dynamically output the copyright year and the date the document was last modified
// Output the last modified date to the footer
const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
const thisCurrentYear = new Date;
document.getElementById("currentdate").textContent = new Date().toLocaleTimeString("en-US", options);
document.querySelector("#year").textContent = thisCurrentYear.getFullYear();

// Get the current year
var currentYear = new Date().getFullYear();

// Output the copyright year to the footer
document.getElementById("copyrightYear").innerHTML = currentYear;

