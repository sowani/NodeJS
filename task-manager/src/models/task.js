// Moved task model from mongoose.js file.
// Create a model for tasks

const mongoose = require ('mongoose');

const Task = mongoose.model ('Task', {
	description: {
		type: String,
		trim: true,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = Task;
