const fetch = require('node-fetch');

module.exports = getWeather= async() => {
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?id=1581130&apikey=bbe7f812c19a41b0c56c382717ab1f79&units=metric');
    let data = await response.json();
    return {
        temp: data.main.temp,
        humidity: data.main.humidity,
        clouds: data.clouds.all,
    }
}