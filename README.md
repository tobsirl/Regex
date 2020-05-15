# [Regex Scrimba course based on freecodecamp](https://scrimba.com/course/gregularexpressions)

Regular Expressions are used in programming languages to match parts of strings. You create patterns to help do the matching.

## Test method - using test to match the string

```js
// Match the pattern using test
let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Match literal strings (Case sensitive)
let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);

// Or operator single pipe | allows for mutiple different possibilities
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
```

---

## Match method - extract the word from a string

```js
// Extract Match Method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
```

```js
// Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = 'Bear hug';
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
```

```js
// Match Single Character with Multiple Possibilites
let bgRegex = /b[aiu]g/;

let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex); // Returns all the vowels
```

```js
// Match a range of letters
let quoteSample = 'The quick brown fox jumps over the lazy dog.';
let alphabetRegex = /[a-z]/gi;
let result9 = quoteSample.match(alphabetRegex);
```

```js
// Match a range of number and letters
let quoteSample = 'Blueberry 3.141592653s are delicious.';
let myRegex = /[2-6h-s]/gi;
let result10 = quoteSample.match(myRegex);
```

```js
// Negate character when you don't want to match
let quoteSample = '3 blind mice.';
let myRegex = /[^0-9aeiou]/gi;
let result11 = quoteSample.match(myRegex);
```

```js
// Match characters that occur multiple times
let difficultSpelling = 'Mississipspi';
let myRegex = /s+/g;
let result12 = difficultSpelling.match(myRegex);
```

```js
// Match characters occur zero or more times using star
let soccerWord = 'gooooooooal!';
let gPhrase = 'gut feeling';
let oPhrase = 'over the moon';
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
```

```js
// Find Characters with a Lazy Match
let string = 'titanic';
let regex = /t[a-z]*?i/;
string.match(regex);

let text = '<h1>Winter is coming</h1>';
let myRegex = /<.*?>/;
let result = text.match(myRegex); // Returns <h1>
```

```js
// Match at the beginning of the string
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal); // Returns Cal
```

---

## Flags i, g, m, s, u, y

`Flag i - With this flag the search is case-insensitive`

```js
let myStringi = 'freeCodeCamp';
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myStringi);
```

`Flag g - search looks for all matches`

```js
let testStr = 'Repeat, Repeat, Repeat';
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

let twinkleStar = 'Twinkle, twinkle, little star';
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);
```
