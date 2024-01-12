/*
За допомогою ajax-запиту вивести погоду

http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

q=XXX - місто, для якого показати погоду
temp – температура
pressure - тиск
description – опис
humidity – вологість 
speed – швидкість вітру
deg - напрям у градусах
icon - значок, де 10d код іконки
http://openweathermap.org/img/w/10d.png
*/

const fetchWeather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19`);
fetchWeather.then(
    response => response.ok ? response.json() : Promise.reject(response.statusText)
).then((weatherResponse) => {
    console.log(weatherResponse);
    let weatherIcon = `<img id="weather-icon" src='http://openweathermap.org/img/w/${weatherResponse["weather"][0]["icon"]}.png' alt="weather-icon">`;

    document.getElementById(`city`).textContent = weatherResponse["name"];
    document.getElementById(`temperature`).textContent = weatherResponse["main"]["temp"] + "°C";
    document.getElementById(`description`).innerHTML = weatherResponse["weather"][0]["description"] + weatherIcon;
    document.getElementById(`pressure`).textContent = "Pressure: " + weatherResponse["main"]["pressure"] + "hPa";
    document.getElementById(`humidity`).textContent = "Humidity: " + weatherResponse["main"]["humidity"] + "%";
    document.getElementById(`wind-speed`).textContent = "Wind speed: " + weatherResponse["wind"]["speed"] + "meter/sec";
    document.getElementById(`wind-direction`).textContent = "Wind direction: " + weatherResponse["wind"]["deg"] + "degrees";
    
}).catch(
    err => console.log(err)
)