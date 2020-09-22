/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(greeting){
return greeting + '!';
}

function getFirstCharacter(firstLetter){
return firstLetter[0];
}

function getLastCharacter(lastLetter){
return lastLetter[lastLetter.length -1]; 
}

function getOneCharacter(str, num){
return str[num];
}

function getTwoCharacters(str, num1, num2){
return str[num1, num2];
}

function makeCapitalized(str){
return str.toUpperCase();
}

function yellLouder(str){
return str.toUpperCase() + '!!!';
}

function getInitials(str){
return str.split(" ")[0];
}




/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
