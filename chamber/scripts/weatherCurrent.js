//Current Forecast
const API = "746ebdf1e822285636340c92aec7ac3a"
const Lat = "-17.931353168799184"
const Long = "25.83025728205778"

const currentWeather = `//api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${API}&units=metric`

// ========== Grab the weather data and W A I T
fetch(currentWeather)
  .then((response) => response.json())
  .then((allData) => {
    showCurrent(allData)
  }) // end waiting

  function showCurrent(allData) {
    const tempNow = document.querySelector('#temp')
    tempNow.textContent = Math.floor(allData.main.temp)+'°'
    const conditionsNow = document.querySelector('#desc')
    conditionsNow.textContent = allData.weather[0].description
    const townName = document.querySelector('#town')
    townName.textContent = allData.name
    console.log(allData)
  }

