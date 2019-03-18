const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Diracción de la ciudad',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {

        const { lat, lng } = await location.getLocationLatLng(direccion);
        const temp = await weather.getWeather(lat, lng);

        return `La temperatura de ${argv.direccion} es de ${temp}`;

    } catch (error) {

        return `No se puede determinar la temperatura de ${argv.direccion}`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);