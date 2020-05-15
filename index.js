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
let result8 = quoteSample.match(vowelRegex); // Returns all the vowels

console.log(result8);

// Match a range of letters
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result9 = quoteSample.match(alphabetRegex); 

console.log(result9);

// Match a range of number and letters
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result10 = quoteSample.match(myRegex); 

console.log(result10);

// Negate character when you don't want to match
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; 
let result11 = quoteSample.match(myRegex); 

console.log(result11);

// Match characters that occur multiple times
let difficultSpelling = "Mississipspi";
let myRegex = /s+/g; 
let result12 = difficultSpelling.match(myRegex);

console.log(result12);

// Match characters occur zero or more times using star
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex); // Returns Aaaaaaaaaaaaaaaa

console.log(result13);

// Find Characters with a Lazy Match
let string = "titanic";
let regex = /t[a-z]*?i/; 
string.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex); // Returns <h1>

// Match at the beginning of the string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal); // Returns Cal

// Match at the end of a string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose); // Returns caboose

// Match all letters and numbers (Charactor classes)
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// Match everything but letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// Match all numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;

// Match all non numbers
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;

// 