import { futuramaQuotes } from './quotes.js';

let quote = document.querySelector(".quote");
let quoteText = document.querySelector(".quote__text");
let quoteAuthor = document.querySelector(".quote__author");
let btn = document.querySelector(".btn");


let notAccessed = [];
const randomItemFromArray = (myArray) => {
  if (notAccessed.length === 0) {
    for (let i = 0; i < myArray.length; i++) notAccessed.push(i);
  } else if (notAccessed.length >= myArray.length) {
    notAccessed = [];
    for (let i = 0; i < myArray.length; i++) notAccessed.push(i);
  }
  let randomIndex = Math.floor(Math.random() * notAccessed.length);
  let indexOfItem = notAccessed[randomIndex];
  notAccessed.splice(randomIndex, 1);
  return myArray[indexOfItem];
};


const getBenderQuote = () => {
  // extract Bender quotes from futuramaQuotes array
  const benderQuotes = [];
  for (let i = 0; i < futuramaQuotes.length; i++) {
    if (futuramaQuotes[i].who === 'Bender') {
      benderQuotes.push(futuramaQuotes[i].quote);
    }
  };

  // access DOM to change quote text
  quoteText.innerText = randomItemFromArray(benderQuotes);
  quoteAuthor.innerHTML = "Bender B.&puncsp;Rodríguez";

  // change button to active using btn__active class
  setTimeout(() => {
    btn.classList.add("btn__active");
  }, 1000);
}


const newBenderQuote = event => {
  if (!event.target.matches(".btn")) return;
  getBenderQuote();
  btn.classList.remove("btn__active");
}


window.addEventListener("load", getBenderQuote);
quote.addEventListener("click", newBenderQuote);


// const getBenderQuote = async () => {
//   const response = await fetch("https://bender.sierrasoftworks.com/api/v1/quote/bender");
//   const data = await response.json();
//   quoteText.innerText = data.quote;
//   quoteAuthor.innerText = "Bender";

//   btn.classList.add("btn__active");
// }
