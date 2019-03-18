const axios = require('axios');

const getLocationLatLng = async(dir) => {

    const encodedULR = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedULR}`,
        headers: { 'X-RapidAPI-Key': '55da7bbf82mshf767e765f9d906bp1cb6c0jsnd046eea13bbe' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    /* 
        .then((resp) => {
            console.log(resp.data.Results[0]);
        }).catch((err) => {
            console.log('ERRORRRR', err);
        }); */

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLocationLatLng
}