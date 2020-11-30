// example 1

const geocode = (address, callback) => {
	setTimeout( () => {
		const data = {
			latitude: 0,
			longitude: 0
		}
		callback (data);
	}, 2000);
}

geocode ('Pune', (data) => {
	console.log (data);
});

// example 2

const add = (x, y, callback) => {
	setTimeout ( () => {
		callback (x+y);
	}, 2000 );
}

add (1, 4, (sum) => {
	console.log (sum);
});


// example 3

const mult = (x, y, callback) => {
	setTimeout ( () => {
		callback (x*y);
	}, 2000 );
}

mult (2, 3, (mult) => {
	console.log (mult);
});