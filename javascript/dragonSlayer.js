/*
filename: dragonSlayer.js
author:   ben silbernagel
created:  9-8-2016
project:  dragon war game
class:    codecademy
*/

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if(youHit = 1) {
        console.log("Hey, you hit the beast!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4) {
          console.log("You slew the beast in one swing!");
        } else {
          var youHit = Math.floor(Math.random() * 2); 
        };
    } else {
        console.log("You were eaten!");
    };
    slaying = false;
};
