const request = require ('postman-request');

const forecast = (lat, long, callback) => {
	const url = "http://api.weatherstack.com/current?access_key=b2ac34f15f47e836e5286f3638a10e4d&query=" + lat + "," + long;
	
	request ( { url: url, json: true }, (error, response) => {
		if (error) {
			callback ("Unable to connect to weather service.", undefined);
		} else if (response.body.error) {
			callback ("Invalid input for weather service.", undefined);
		} else {
			callback (undefined, {
				weatherDesc: response.body.current.weather_descriptions[0],
				temperature: response.body.current.temperature,
				precip: response.body.current.precip,
				feelslike: response.body.current.feelslike
			});
		}
	} );
}

module.exports = forecast
