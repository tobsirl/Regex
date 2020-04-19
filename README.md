# [Regex Scrimba course based on freecodecamp](https://scrimba.com/course/gregularexpressions)

Regular Expressions are used in programming languages to match parts of strings. You create patterns to help do the matching.

## Test method - using test to match the string
```js
// Match the pattern using test
let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Match literal strings (Case sensitive)
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);

// Or operator single pipe | allows for mutiple different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString); //?
```
