const fs = require ('fs');
const chalk = require ('chalk');

const getNotes = function () {
	const diskNotes = fs.readFileSync ('notes.json')
	const notesBuffer = diskNotes.toString();
	return JSON.parse (notesBuffer);
}

const addNote1 = function (title, body) {
	const notes = loadNotes();

	const duplicateNotes = notes.filter (function (note) {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push ({
			title: title,
			body: body
		});
		saveNotes (notes);
		console.log ("New note added.");
	} else {
		console.log ("Note title taken");
	}
}

const addNote = (title, body) => {
	const notes = loadNotes();

	const duplicateNotes = notes.filter (note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push ({
			title: title,
			body: body
		});
		saveNotes (notes);
		console.log ("New note added.");
	} else {
		console.log ("Note title taken");
	}
}

const removeNote = function (title) {
	const notes = loadNotes();

	const theNotes = notes.filter (function (note) {
		return note.title !== title;
	});
	
	if (notes.length > theNotes.length) {
		console.log (chalk.green ("deleting note with title " + title));
	} else {
		console.log (chalk.red.bold ("Note does not exist."));
	}
	saveNotes (theNotes);
}

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify (notes);
	fs.writeFileSync ('notes.json', dataJSON);
}

const loadNotes = function() {
	try {
		const dataBuffer = fs.readFileSync ('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse (dataJSON);
	} catch (e) {
		return [];
	}
}

const listNotes = function () {
	const notes = loadNotes();
	console.log (chalk.yellow.bold ("Your notes:"));
	
	notes.forEach (function (note) {
		console.log (note.title, note.body);
	})
}

const readNote = function (title) {
	const notes = loadNotes();
	const note = notes.find (note => note.title === title);
	
	if (note) {
		console.log (chalk.blue.bold (note.title) + ': ' + note.body);
	} else {
		console.log (chalk.red.bold ("No matching note found!"));
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNotes: removeNote,
	listNotes: listNotes,
	readNote: readNote
};
