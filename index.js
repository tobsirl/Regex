// Match the pattern using test
let sentence = 'The dog chased the cat.';
let regex = /the/;

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result1 = myRegex.test(myString); //?

// Match literal strings (Case sensitive)
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding); //?

// Or operator single pipe | allows for mutiple different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString); //?

// Extract Match Method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result5 = extractStr.match(codingRegex); 
console.log(result5);

// Flag i - search is case-insensitive
let myStringi = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result4 = fccRegex.test(myStringi); //?

// Flag g - search looks for all matches
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result6 = twinkleStar.match(starRegex); 

console.log(result6);