const quote = document.getElementById("quote");

const author = document.getElementById("author");

const apiUrl = "https://animechan.vercel.app/api/random";

const quoteBtn = document.getElementById("quoteBtn");

quoteBtn.addEventListener("click", function () {
  getQuote(apiUrl);
})

const tweetBtn = document.getElementById("tweetBtn");

tweetBtn.addEventListener("click", function () {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML+ " ~ by " + author.innerHTML, "Tweet Window", "width=600", "height=300")
})

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.quote;
  author.innerHTML = data.character;
}

getQuote(apiUrl);

