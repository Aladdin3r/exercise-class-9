/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * Initialise array called numbers one with the value of 1
 * Then initialise another array called numbers two with the value of 2.
 * Make a new variable called list and concatenate numbers one with numbers two.
 * Console log out list.
 *  Write a single line comment for what comes up in the console
 */

var numbersOne = [1];
var numbersTwo = [2];
var list = numbersOne.concat(numbersTwo);

console.log(list); // [ 1, 2 ]




/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * Make a new array called shopping list with two arrays inside. In the first array input the values cereal, milk, granola, water.
 * In the second array in shopping list, input bread, juice, cracker, and snack. 
 * console log a sentence to say "I want water and juice"
 *  Write a single line comment showing the sentence.
 */
var shoppingList = [
    ["cereal", "milk", "granola", "water"],
    ["bread", "juice", "cracker", "snack"]
]
console.log("I want " + shoppingList[0][3] + " and " + shoppingList[1][1]); // I want water and juice