import fs from "fs";

const [command, title, content] = process.argv.slice(2);

const viewNote = (title) => {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    console.log(notes[title]);
  });
};

const removeNote = (title) => {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    delete notes[title];
    const json = JSON.stringify(notes);
    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log(`${title} was deleted`);
    });
  });
};

const listNotes = () => {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    let objKeys = Object.keys(notes);
    objKeys.forEach((key) => {
      console.log(`${key}: ${notes[key]}\n`);
    });
  });
};
///////forJSON File/////
function createNote(title, content) {
  fs.readFile("notes.json", (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    let newNotes = { ...notes, [title]: content };
    const json = JSON.stringify(newNotes);
    fs.writeFile("notes.json", json, (error) => {
      if (error) return console.error(error.message);
      console.log("Note has been created");
    });
  });
}
///////forJSON File/////
///////forTXT File/////
// function createNote(title, content) {
//   const data = title + " " + content;
//   fs.appendFile("notes.txt", data, (error) => {
//     if (error) return console.error(error.message);
//     console.log("Заметка создана");
//   });
// }
///////forTXTFile/////

switch (command) {
  case "list":
    listNotes();
    break;
  case "remove":
    removeNote(title);
    break;
  case "view":
    viewNote(title);
    break;
  case "create":
    createNote(title, content);
    break;
  default:
    console.log("Unknown command");
}
