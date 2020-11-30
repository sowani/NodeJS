const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require ('./utils/forecast');
const geocode = require ('./utils/geocode');

const app = express();
// Following line added for heroku.
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Atul Sowani'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Atul Sowani'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Atul Sowani'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        });
    }

	const address = req.query.address;

	// Convert address to lat, long
	// uses destructuring by accepting lat, long and loc instead of data.
	geocode (address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return res.send ("Error", error);
		}

		// using lat,long data, get forecast.
		forecast (latitude, longitude, (error, data1) => {
			if (error) {
				return res.send ("Error", error);
			}

			// send back location and forecast data to webserver.
			res.send ({
				location,  // note the style: both label and data has same name.
				forecast: data1,
				address: address
			});
		});
	})
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }

    console.log(req.query.search)
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Atul Sowani',
        errorMessage: 'Page not found.'
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.');
});
