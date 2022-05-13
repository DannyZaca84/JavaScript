// Challenge: Create a new object type challenge
// - Create a new object type "Book" using a class or an object constructor function.
// - Add at least 5 book objects

import Book from "./Book.js";

const theAlchemist = new Book(
  "The Alchemist",
  "450",
  "Yellow",
  "Paulo Cohelo",
  true,
  false,
  false,
  true
);
console.log(theAlchemist);

const theLastVictim = new Book(
  "The Last Victim - Great book.",
  650,
  "White",
  "Jason Moss",
  true,
  false,
  false,
  true
);
console.log(theLastVictim);

// tell the browser that
const content = "<h1>" + theLastVictim.name + "</h1>";

document.body.innerHTML = content;

console.log("The book object: ", theAlchemist);
console.log("The number of pages value: ", theAlchemist.pages);
console.log("Type of cover value:", theAlchemist.coverStyle());
