

var randomQ = ranQuote(0, 9);
function ranQuote(lowest, size) {
  return Math.floor(Math.random() * size) + lowest; 
}

var quoteElem = document.getElementById("quote");

quoteElem.innerHTML = generateQuote(randomQ);

function generateQuote(n) {
   var quotes = [
"Every first draft is perfect because all the first draft has to do is exist.",
"My great fear is not that I'll run out of ideas. It's that I'll run out of time.",
"In every society, the artists will be the ones who set themselves up as contrary to whatever the society expects.",
"Take naps. Often new ideas come together when you are half asleep, but you have to train yourself to remember them.",
"Art doesn't exist if you just do what you're told. It only exists as an exercise of individual taste and freedom.",
"People are quite frequently eccentric.",
"A theory of creativity is actually just a metaphor. A pool of ideas, a well of memories, a voice.",
"English majors understand human nature better than economists do.",
"Ignorance is a self-generating state of mind; one of its characteristics is that it doesn't recognize itself as ignorance."
   ];
   
   return quotes[n];
}