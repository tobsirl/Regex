// Match the pattern using test
let sentence = 'The dog chased the cat.';
let regex = /the/;

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result1 = myRegex.test(myString); //?

// Match literal strings (Case sensitive)
let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding); //?

// Or operator single pipe | allows for mutiple different possibilities
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString); //?

// Extract Match Method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
console.log(result5);

// Flag i - search is case-insensitive
let myStringi = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myStringi); //?

// Flag g - search looks for all matches
let testStr = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);

console.log(result6);

// Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = 'Bear hug';
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result7 = unRegex.test(exampleStr);

console.log(result7);

// Match Single Character with Multiple Possibilites
let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result8 = quoteSample.match(vowelRegex);

console.log(result8);
