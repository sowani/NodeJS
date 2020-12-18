// Brought from mongoose.js file.

const mongoose = require ('mongoose');
const validator = require ('validator');

const User = mongoose.model ('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error ("Email not valid.");
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error ('Age cannot be negative.');
			}
		}
	},
	password: {
		type: String,
		minLength: 7,
		trim: true,
		validate (value) {
			if (value.toLowerCase().includes("password")) {
				throw new Error ("Password cannot contain 'password'.");
			}
		}
	}
});

module.exports = User;
