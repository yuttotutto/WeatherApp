const apiKey = "7b14958b043fae6f6f678763442d5f39";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?"
const timeElement = document.getElementById('clock')
const form = document.getElementById('card')

async function checkWeather() {
    const city = document.getElementById('searchbar').value
    const response = await fetch(apiUrl + `q=${city}` + `&appid=${apiKey}&units=metric`);
    const data = await response.json();
    const city1 = data.name
    const temp = Math.ceil(Number(data.main.temp))
    const humidity = Math.ceil(Number(data.main.humidity))
    const wind = Math.ceil(Number(data.wind.speed))
    const sky = data.weather[0].main
    if (sky == 'Clear') {
        document.querySelector('img#sky').src = 'https://i.ibb.co/1XgG6yp/clear.png'
    } else if (sky == 'Clouds') {
        document.querySelector('img#sky').src = 'https://i.ibb.co/F5W9gnB/clouds.png'
    } else if (sky == 'Rain') {
        document.querySelector('img#sky').src = 'https://i.ibb.co/xqJ19sc/rain.png'
    } else if (sky == 'Snow') {
        document.querySelector('img#sky').src = 'https://i.ibb.co/zSmQ9tw/snow.png'
    }
    document.querySelector('div#temp').innerHTML = `${temp}°` 
    document.querySelector('div#city').innerHTML = city1
    document.querySelector('div#hum-value').innerHTML = `${humidity}%`
    document.querySelector('div#wind-value').innerHTML = `${wind} km/h`
    console.log(data);
}
function updateTime() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    timeElement.innerText = clockStr
}

updateTime()
setInterval(updateTime, 1000)
checkWeather()
