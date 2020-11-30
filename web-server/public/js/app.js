console.log('Client side javascript file is loaded!')

//fetch ('http://puzzle.mead.io/puzzle').then((response) => {
//	response.json().then((data) => {
//		console.log (data);
//	});
//});

const weatherForm = document.querySelector ('form');
const search = document.querySelector ('input');
const messageOne = document.querySelector ('#message-1');
const messageTwo = document.querySelector ('#message-2');

messageOne.textContent = '';
messageTwo.textContent = '';

weatherForm.addEventListener ('submit', (e) => {
	e.preventDefault();

	const location = search.value;

	// Following change is done for heroku.
	//const url = 'http://localhost:3000/weather?address=' + location;
	const url = '/weather?address=' + location;

	messageOne.textContent = "Loading ...";
	fetch (url).then ((response) => {
		response.json().then ((data) => {
			if (data.error) {
				//console.log (data.error);
				messageOne.textContent = data.error;
				messageTwo.textContent = '';
			} else {
				messageOne.textContent = '';
				messageTwo.textContent = 'Location: ' + data.location + ', ' +
					data.forecast.weatherDesc + ', Temperature: ' +
					data.forecast.temperature + ', Rain: ' +
					data.forecast.precip;
			}
		});
	});

	//console.log (location);
	//console.log ('testing!');
})
