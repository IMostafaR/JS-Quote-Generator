var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author");
var quoteContainer = document.getElementById("quoteContainer");

var quotesReference = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    quote: "In the middle of difficulty lies opportunity",
    author: "― Albert Einstein",
  },
  {
    quote: "People, generally, suck.",
    author: "― Christopher Moore",
  },
  {
    quote:
      "A question that sometimes drives me hazy: am I or are the others crazy?",
    author: "― Albert Einstein",
  },
  {
    quote:
      "Your emotions are the slaves to your thoughts, and you are the slave to your emotions.",
    author: "― Elizabeth Gilbert",
  },
  {
    quote: "Those who have a 'why' to live, can bear with almost any 'how'.",
    author: "― Viktor E. Frankl",
  },
  {
    quote: "Maybe this world is another planet's hell.",
    author: "― Aldous Huxley",
  },
  {
    quote: "Do not take life too seriously. You will not get out alive.",
    author: "― Elbert Hubbard",
  },
  {
    quote: "The best revenge is massive success.",
    author: "― Frank Sinatra",
  },
  {
    quote:
      "The difference between genius and stupidity is: genius has its limits.",
    author: "― Alexandre Dumas-fils",
  },
];

function displayItem() {
  quoteContainer.classList.replace("invisible", "visible");
}

function refreshQuote() {
  displayItem();
  var randomIteration =
    quotesReference[Math.floor(Math.random() * quotesReference.length)]; //https://stackoverflow.com/questions/37167264/javascript-output-random-object-from-array-of-objects

  quoteElement.innerHTML = `<i class="fa-solid fa-quote-left me-3 display-3 text-warning"></i
  >${randomIteration.quote}<i class="fa-solid fa-quote-right ms-3 display-3 text-warning"></i>`;
  authorElement.innerHTML = randomIteration.author;
}
