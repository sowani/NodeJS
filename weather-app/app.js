// weatherstack.com API access key: b2ac34f15f47e836e5286f3638a10e4d
// weatherstack.com API endpoint base URL: http://api.weatherstack.com/
// api.weatherstack.com/current?access_key=b2ac34f15f47e836e5286f3638a10e4d&query=18.516726,73.856255
//
// mapbox.com API access token: pk.eyJ1Ijoic293YW5pIiwiYSI6ImNraGo5OXU2ZzFkN3Mycm53MjhocmoweGEifQ.HoJiw0SeNXw3TLn3XwFmEA
// mapbox.com: api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_key=pk.eyJ1Ijoic293YW5pIiwiYSI6ImNraGo5OXU2ZzFkN3Mycm53MjhocmoweGEifQ.HoJiw0SeNXw3TLn3XwFmEA

const geocode = require ('./utils/geocode.js');
const forecast = require ('./utils/forecast');

const location = process.argv[2];
if (!location) {
	return console.log ("Empty location provided.");
}

geocode (location, (error, data) => {
	if (error) {
		return console.log ("Error", error);
	}

	forecast (data.latitude, data.longitude, (error, data1) => {
		if (error) {
			return console.log ("Error", error);
		}

		console.log ("Location", data);
		console.log ("Data", data1);
	});
})









