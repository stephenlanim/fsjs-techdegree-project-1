// ============================================
//   Random Quote Generator
// ============================================

// Get quote box for displaying quote on screen
const quoteBox = document.getElementById("quote-box");

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
  tags: ["education", "wisdom"]
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
  tags: ["wisdom"]
};

const quote6 = {
  quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
  source: "Isaac Asimov",
  // citation: "",
  // year: ,
  tags: ["wisdom", "society"]
};

const quote7 = {
  quote: "The man who moves a mountain begins by carrying away small stones.",
  source: "Confucius",
  // citation: "",
  // year: ,
  tags: ["motivation", "wisdom"]
};

const quote8 = {
  quote: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
  source: "Arthur C. Clarke",
  // citation: "",
  // year: ,
  tags: ["motivation", "innovation"]
};

const quote9 = {
  quote: "You know you&rsquo;re in love when you can&rsquo;t fall asleep because reality is finally better than your dreams.",
  source: "Dr. Seuss",
  // citation: "",
  // year: ,
  tags: ["love"]
};

const quote10 = {
  quote: "We accept the love we think we deserve.",
  source: "Stephen Chbosky",
  citation: "The Perks of Being a Wallflower",
  year: 1999,
  tags: ["love"]
};


// Create the array of quote objects and name it quotes
const quotes = [
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote7,
  quote8,
  quote9,
  quote10
];


// Function to get a random quote from quote array
function getRandomQuote() {
  // Get the total number of quotes
  const quoteQty = quotes.length;
  // Get a random number based on the number of quotes
  const randomPosition = Math.floor(Math.random() * quoteQty);
  // Select a random quote object from the quote array
  const randomQuote = quotes[randomPosition];

  return randomQuote;
}

// Background Colors
const greenish = "#108F36";
const brightBlue = "#2BB7D6";
const darkTeal = "#004463";
const kindaNavy = "#0D2B4A";
const deepRed = "#BE4F54";
const brightOrange = "#D75230";
const Purplish = "#6C559B";
const darkPurple = "#1F084E";
const slateGray = "#708090";
const whatTheBadGuysWear = "#000";

// Array of background colors
const bgColors = [
  greenish,
  brightBlue,
  darkTeal,
  kindaNavy,
  deepRed,
  brightOrange,
  Purplish,
  darkPurple,
  slateGray,
  whatTheBadGuysWear
];


// Function to randomly change background color for each printed quote
function changeBGColor() {
  // Get the total number of background colors
  const bgcQty = bgColors.length;
  // Get a random number based on the number of background colors
  const randomPosition = Math.floor(Math.random() * bgcQty);
  // Select a random background color from the array
  const randomColor = bgColors[randomPosition];

  return randomColor;
}


// Function to insert icon based on quote tag
function insertIcon(selectedQuote) {
  if (selectedQuote.tags.includes("wisdom")) {
    document.getElementsByClassName("source")[0].innerHTML += `<i class="fas fa-brain"></i>`;
  }
  if (selectedQuote.tags.includes("education")) {
    document.getElementsByClassName("source")[0].innerHTML += `<i class="fas fa-graduation-cap"></i>`;
  }
  if (selectedQuote.tags.includes("motivation")) {
    document.getElementsByClassName("source")[0].innerHTML += `<i class="fas fa-fist-raised"></i>`;
  }
  if (selectedQuote.tags.includes("society")) {
    document.getElementsByClassName("source")[0].innerHTML += `<i class="fas fa-globe-americas"></i>`;
  }
  if (selectedQuote.tags.includes("love")) {
    document.getElementsByClassName("source")[0].innerHTML += `<i class="fas fa-heart"></i>`;
  }

} // End of insertIcon()

// Variable for storing changeQuoteByInterval's intervalID
let quoteIntervalID;

// Function to change quote every 10 seconds
function changeQuoteByInterval() {
 quoteIntervalID = setInterval(printQuote, 10000);
}
// Activate above function
changeQuoteByInterval();


// Function to print random quote out to the screen
function printQuote() {
  // Get random quote object
  const selectedQuote = getRandomQuote();

  // If quote citation and year are indicated...
  if (selectedQuote.citation && selectedQuote.year) {
    // Print quote and source with citation and year
    quoteBox.innerHTML = `
      <p class="quote">${selectedQuote.quote}</p>
      <p class="source">${selectedQuote.source}<span class="citation">${selectedQuote.citation}</span><span class="year">${selectedQuote.year}</span></p>`;
  }

  // Otherwise...
  else {
    // Print quote and source without citation or year
    quoteBox.innerHTML = `
      <p class="quote">${selectedQuote.quote}</p>
      <p class="source">${selectedQuote.source}</p>
    `;
  }

  // Insert tag icon
  insertIcon(selectedQuote);

  // Randomly change background color
  const newBGC = changeBGColor()
  document.getElementsByTagName("BODY")[0].style.backgroundColor = newBGC;
  document.getElementById("loadQuote").style.backgroundColor = newBGC;

  // Cancel interval change so as not to interfere with reading new quote
  clearInterval(quoteIntervalID);

  // Reactivate interval change
  changeQuoteByInterval();
} // End of printQuote()

// When user clicks "Show another quote" button...
document.getElementById('loadQuote').addEventListener("click",
  // Print new quote to the screen
  printQuote, false);
