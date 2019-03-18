const axios = require('axios');

const getWeather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=ed977eb1e10f14e33d17cdb0a9b2faaa&lat=${lat}&lon=${lng}&units=metric`)

    return resp.data.main.temp;

};

module.exports = {
    getWeather
}