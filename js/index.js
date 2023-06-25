const quote = document.querySelector("[data-quote]");
const author = document.querySelector("[data-author]");
const tweet = document.querySelector("[data-tweet]");
const newQuote = document.querySelector("[data-new-quote]");
const apiURL = "https://api.quotable.io/random";
/**
 * It fetches the data from the API, checks if the response is ok, if it is, it will display the quote
 * and author, if not, it will display an error message.
 */
const generateQuote = async () => {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    } else {
      quote.innerHTML = "CANT GENERATE QUOTE";
      author.innerHTML = "CANT GENERATE QUOTE";
      throw new Error("Couldn't GenerateQuote from " + response.status);
    }
  } catch (error) {
    console.error(error);
  }
};

generateQuote();

tweet.addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML} - ${author.innerHTML}`,
    "Tweet Window",
    "width: 200px; height: 200px"
  );
});

newQuote.addEventListener("click", generateQuote);
