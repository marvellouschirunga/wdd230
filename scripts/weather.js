//Current Weather

const myAPI = "746ebdf1e822285636340c92aec7ac3a"
const myWeather = `//api.openweathermap.org/data/2.5/weather?q=Harare&appid=${myAPI}&units=metric`

// ========== Grab the weather data and W A I T
fetch(myWeather)
.then((response) => response.json())
.then((allData) => {
    currentWeather(allData)
}) // end waiting

function currentWeather(weatherResults) {
  console.log(weatherResults)
  const myTemperature = document.querySelector('#temp')
  myTemperature.textContent = weatherResults.main.temp
  const myDescription = document.querySelector('#desc')
  myDescription.textContent = weatherResults.weather[0].description
  const myIcon = document.querySelector('#icon')
  myIcon.src=`https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
  myIcon.alt=weatherResults.weather[0].description
}