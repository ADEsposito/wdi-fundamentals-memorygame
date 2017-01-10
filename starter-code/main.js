console.log("JS file is connected to HTML! Woo!")

/* create variables for each card, checked for equality/inequality in Chrome console*/
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* create if...else statement testing for equality between cardTwo and cardFour, and alert notifying user if equality is found/not found */
if (cardTwo === cardFour) {
  alert('You found a match!');
}
else {
  alert('Sorry, try again.');
}
