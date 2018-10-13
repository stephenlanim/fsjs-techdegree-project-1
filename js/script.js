// FSJS - Random Quote Generator

// Quote Objects
const quote1 = {
  quote: "Education is not preparation for life; education is life itself.",
  source: "John Dewey",
  // citation: "",
  // year: ,
  tags: ["education"]
};

const quote2 = {
  quote: "An investment in knowledge pays the best interest.",
  source: "Benjamin Franklin",
  // citation: "",
  // year: ,
  tags: ["education", "knowledge"]
};

const quote3 = {
  quote: "The significant problems we face can not be solved at the same level of thinking we were at when we created them.",
  source: "Albert Einstein",
  // citation: "",
  // year: ,
  tags: ["wisdom"]
};

const quote4 = {
  quote: "No one can make you feel inferior without your consent.",
  source: "Eleanor Roosevelt",
  citation: "This Is My Story",
  year: 1939,
  tags: ["motivation"]
};

const quote5 = {
  quote: "Knowing yourself is the beginning of all wisdom.",
  source: "Aristotle",
  // citation: "",
  // year: ,
  tags: ["philosophy"]
};

const quote6 = {
  quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
  source: "Isaac Asimov",
  // citation: "",
  // year: ,
  tags: ["wisdom", "sociology"]
};

// Create the array of quote objects and name it quotes
const quote = [
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6
];


// Function to get a random quote from quote array
function getRandomQuote() {
  // Get the total number of quotes
  const quoteQty = quote.length;
  // Get a random number based on the number of quotes
  const randomPosition = Math.floor(Math.random() * quoteQty);
  // Select a random quote object from the quote array
  const randomQuote = quote[randomPosition];

  return randomQuote;
}


// Create the printQuote funtion and name it printQuote
// Function to print random quote out to the screen
function printQuote() {
  // Get random quote object
  const selectedQuote = getRandomQuote();
  // Get quote box for displaying quote on screen
  const quoteBox = document.getElementById("quote-box");

  // If quote citation and year are indicated...

    // Print quote with citation

  // Print quote

  // Print quote source



  // If quote year is indicated...

    // Print year

}

// Background Colors
const bgc1 = "#36b55c";
const bgc2 = "#51ddfc";
const bgc3 = "#e4757a";
const bgc4 = "#fd7856";
const bgc5 = "#927bc1";

// Function to randomly change background color for each printed quote


// Function to change quote every _ seconds

  // After 20 seconds...

  // Activate printQuote()




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
