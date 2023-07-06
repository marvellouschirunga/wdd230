document.querySelector('#lastUpdated').textContent = "Last Updated: "+document.lastModified;

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();
