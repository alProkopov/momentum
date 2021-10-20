import getRandomNum from "./modules/getRandomNum.js";

const quoteFragment = document.querySelector(".quote");
const authorFragment = document.querySelector(".author");
const changeQuoteButton = document.querySelector(".change-quote");

async function getQuotes() {
  const quotes = "assets/quote.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let randomNum = getRandomNum(0, data.length-1);

  quoteFragment.textContent = `"${data[randomNum].text}"`;
  authorFragment.textContent = `© ${data[randomNum].author}`;
}

changeQuoteButton.addEventListener("click", getQuotes);
getQuotes();
