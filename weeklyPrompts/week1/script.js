// greet people, receiving string
function greetPeople(person) {
  return "Hello " + person;
}

console.log(greetPeople("Minju"));

//type of the argument
function whichType(thing) {
  return typeof thing;
}

console.log(whichType("Minju"));

const beulah = 21;
console.log(whichType(beulah));

//bonus check the type of array

const minju = [25, "korean", "unemployed", 1996];
console.log(whichType(minju));

// check the lenght of string

function checkLength(word) {
  return word.length;
}

console.log(checkLength("Minju Kim"));

const mouse = "Mouse loves cheese.";
console.log(checkLength(mouse));

// let's see if we can check the length of array
console.log(checkLength(minju));
//if we can check the length of number or boolean or undefined
const baby = false;
//const glasses
console.log(checkLength(beulah)); //number
console.log(checkLength(baby)); //boolean
//console.log(checkLength(glasses));//undefined cause the error in console
