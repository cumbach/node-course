const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (!location) return;

geocode(process.argv[2], (error, { latitude, longitude, location}) => {
  if (error) {
    return console.log(error);
  }

  forecast({ lat: latitude, long: longitude }, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log(location);
    console.log(forecastData);
  })
})
