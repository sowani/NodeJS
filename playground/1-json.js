const fs = require ('fs');

//const book = {
//	title: "Title of the book",
//	author: "Author of the book"
//};
//
//const bookJSON = JSON.stringify (book);
//fs.writeFileSync ('test.json', bookJSON);
//
//const readObj = fs.readFileSync ('test.json');
//const parsedJSON = JSON.parse (readObj);
//console.log (parsedJSON.title)
//console.log (parsedJSON.author);

const parsedObj = fs.readFileSync ("test2.json");
const jsonObj = JSON.parse (parsedObj);

jsonObj.name = "New_name";
jsonObj.age = 40;

const writeJSON = JSON.stringify (jsonObj);
fs.writeFileSync ("test3.json", writeJSON);
