// This script will dynamically output the copyright year and the date the document was last modified

// Get the current year
var currentYear = new Date().getFullYear();

// Get the date the document was last modified
var lastModifiedDate = new Date(document.lastModified);

// Output the copyright year to the footer
document.getElementById("copyrightYear").innerHTML = currentYear;

// Output the last modified date to the footer
document.getElementById("lastModified").innerHTML = lastModifiedDate.toLocaleDateString();