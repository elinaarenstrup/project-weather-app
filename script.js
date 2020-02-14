const container = document.getElementById('weather')

fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3053f069033c799a9b5c60d9d3887e6c')

.then((response) => {
  return response.json()
})

.then((json) => {
  container.innerHTML = `<h1> ${json.name} is ${json.main.temp} celsius and ${json.weather[0].description}.</h1>`
})
