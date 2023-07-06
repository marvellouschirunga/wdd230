const url = "./data/links.json";

async function getLinks() {
  const response = await fetch(url);
  const data = await response.json();
  displayLinks(data.weeks);
}

getLinks(); 


const myLinks = document.querySelector("#displayLinks");

function displayLinks(allWeeks) {
  allWeeks.forEach(item => {

    const oneWeek = document.createElement("h4");
    oneWeek.textContent = `${item.week}:`;

    const linksList = document.createElement("ul");
    item.links.forEach(link => {
      const listitem = document.createElement("li");
      listitem.innerHTML=`<a href="${link.url}">${link.title}</a>`
      linksList.appendChild(listitem)
    }) 
  
    myLinks.appendChild(oneWeek);
    myLinks.appendChild(linksList)
  }); 
 
} 
