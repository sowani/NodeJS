const path = require ("path");
const express = require ("express");
const hbs = require ("hbs");

const app = express();
app.set ('view engine', 'hbs');
app.use (express.static (path.join (__dirname, "../public")) );

const partialsPath = path.join (__dirname, "../partials");
hbs.registerPartials (partialsPath);

// app.com
// app.com/help
// app.com/about
// app.com/weather

app.get('', (req, res) => {
	res.send ("<h1>Hello express!</h1>");
})

app.get ('/help', (req, res) => {
	res.send ({
		name: "Atul",
		location: "Pune",
		name: "Atul Sowani"
	});
})

app.get ('/about', (req, res) => {
	res.send ("<h1>About page</h1>");
})

app.get ('/weather', (req, res) => {
	/*
	res.send ({
		location: "Pune",
		forecast: "Weather forecast"
	});
	*/
	// Use handlebars instead.
	res.render ("weather", {
		title: "Weather",
		name: "Atul Sowani"
	});
})

app.get ('*', (req, res) => {
	res.send ("404: Page is unavailable.");
})

app.listen(3000, () => {
	console.log ("Server is up on port 3000.")
});
