let quote = document.querySelector(".quote");
let quoteText = document.querySelector(".quote__text");
let quoteAuthor = document.querySelector(".quote__author");
let btn = document.querySelector(".btn");

const getBenderQuote = async () => {
  // declare variables
  const response = await fetch("https://bender.sierrasoftworks.com/api/v1/quote/bender");
  const data = await response.json();
  // inject quote and name
  quoteText.innerText = data.quote;
  quoteAuthor.innerText = "Bender";
  // change button to active using btn__active class
  btn.classList.add("btn__active");
}


const newBenderQuote = event => {
  if (!event.target.matches(".btn")) return;
  getBenderQuote();
  btn.classList.remove("btn__active");
}


window.addEventListener("load", getBenderQuote);
quote.addEventListener("click", newBenderQuote); 




// const getFuturamaQuote = () => {
//   fetch("https://bender.sierrasoftworks.com/api/v1/quote")
//     .then(response => response.json())
//     .then(data => {
//       quoteText.innerText = data.quote;
//       quoteAuthor.innerText = data.who;
//     });

//   setTimeout(() => { btn.classList.add("btn__active") }, 2000);
// }

// const newFuturamaQuote = e => {
//   if (!e.target.matches(".btn")) return;
//   getFuturamaQuote();
//   btn.classList.remove("btn__active");
// }

// window.addEventListener("load", getFuturamaQuote);
// quote.addEventListener("click", newFuturamaQuote);