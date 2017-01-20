console.log("JS file is connected to HTML! Woo!")

/* create variables for each card, checked for equality/inequality in Chrome console*/
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* Comment out per directions in Unit 10
if (cardTwo === cardFour) {
  alert('You found a match!');
}
else {
  alert('Sorry, try again.');
} */

/* get an element with the id of "game-board" and set it to a variable; create a for loop that creates an HTML element for each card (each should be a div, and have the class "card"); append each new card to the div with the id "game-board" */
var deck = 4;

var createCards = function() {
  for (var i = 0; i < deck; i++) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    document.getElementById('game-board').appendChild(newCard);
  }
};

createCards();
