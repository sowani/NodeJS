// weatherstack.com API access key: b2ac34f15f47e836e5286f3638a10e4d
// weatherstack.com API endpoint base URL: http://api.weatherstack.com/
// api.weatherstack.com/current?access_key=b2ac34f15f47e836e5286f3638a10e4d&query=18.516726,73.856255
//
// mapbox.com API access token: pk.eyJ1Ijoic293YW5pIiwiYSI6ImNraGo5OXU2ZzFkN3Mycm53MjhocmoweGEifQ.HoJiw0SeNXw3TLn3XwFmEA
// mapbox.com: api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_key=pk.eyJ1Ijoic293YW5pIiwiYSI6ImNraGo5OXU2ZzFkN3Mycm53MjhocmoweGEifQ.HoJiw0SeNXw3TLn3XwFmEA

const request = require ('postman-request');
const url = "http://api.weatherstack.com/current?access_key=b2ac34f15f47e836e5286f3638a10e4d&query=18.516726,73.856255";

request ( { url: url, json: true }, (error, response) => {
	if (error) {
		console.log ("Unable to connect to weather service.")
	} else if (response.body.error) {
		console.log ("Invalid input for weather service..");
	} else {
		// Following 2 lines are required if "json: true" property is not set.
		//const data = JSON.parse (response.body);
		//console.log (data.current);

		//console.log (response.body.current);
		console.log (`${response.body.current.weather_descriptions[0]}.`)
		console.log (`It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain.`);
		console.log (`It feels like ${response.body.current.feelslike} degrees out.`)		
	}
} );

const url1 = "http://api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_token=pk.eyJ1Ijoic293YW5pIiwiYSI6ImNraGo5OXU2ZzFkN3Mycm53MjhocmoweGEifQ.HoJiw0SeNXw3TLn3XwFmEA&limit=1";
request ( {url: url1, json: true}, (error, response) => {
	if (error) {
		console.log ("Unable to connect to geolocation service.");
	} else if (response.body.error) {
		console.log ("Invalid input for geo-location service.");
	} else {
		console.log (`Pune: Lat = ${response.body.features[0].center[1]}, Long= ${response.body.features[0].center[0]}.`);
	}
} );
