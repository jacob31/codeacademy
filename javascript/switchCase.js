/*
filename: switchCase.js
author:   ben silbernagel
created:  9-8-2016
project:  troll game
class:    codecademy
*/

var user = prompt("The troll found you...  What should you do?  fight or\
 pay?").toLowerCase();

switch(user) {
  case 'fight':
      var strong = prompt("Are you strong? yes or no?").toLowerCase();
      var smart = prompt("Are you smart? yes or no?").toLowerCase();
      break;
      if(strong || smart) {
        console.log("Great you just needed to be one or the other.  You \
beat the troll back away from your family.");
      } else {
        console.log("The troll will not let you pass and makes you and \
your family turn around.  You'll have to find a different \
route.");
      }
        break;
  case 'pay':
      var payWith = prompt("Is the money in troll coin? \
yes or no?").toLowerCase();
      var amount = prompt("Do you have more than $10? \
yes or no?").toLowerCase();
      if(payWith && amount) {
        console.log("Great you are able to pay and your family continues \
on their way.");
      } else {
        console.log("The troll will not let you pass and makes you and \
your family turn around.  You'll have to find a different \
route."); 
      }
      break;
  case 'run':
      var fast = prompt("Are you fast? yes or no?").toLowerCase();
      var headStart = prompt("Did you get a head start? \
yes or no?").toLowerCase();
      break;
  default:
      console.log("I didn't understand something here.  Why not try to enter\
      'fight' or 'pay' when you start the program over.");
}