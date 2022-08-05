let quote = document.querySelector(".quote");
let quoteText = document.querySelector(".quote__text");
let quoteAuthor = document.querySelector(".quote__author");
let btn = document.querySelector(".btn");

const getBenderQuote = () => {
  fetch("https://bender.sierrasoftworks.com/api/v1/quote/bender")
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = data.quote;
      quoteAuthor.innerText = data.who;
    });
  
  setTimeout(() => { btn.classList.add("btn__active") }, 2000);
}


const newBenderQuote = e => {
  if (!e.target.matches(".btn")) return;
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
// }

// const newFuturamaQuote = e => {
//   if (!e.target.matches(".btn")) return;
//   getFuturamaQuote();
//   btn.classList.remove("btn__active");
// }

// window.addEventListener("load", getFuturamaQuote);
// quote.addEventListener("click", newFuturamaQuote);