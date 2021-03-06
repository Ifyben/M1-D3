/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
const string = "STRING: a string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging."
console.log(string);    

const boolean = "BOOLEAN: it is a logical entity and can be either true or false"
console.log(boolean); 

const undefined = "UNDEFINED: undefined represents a value that doesn't exist yet(the variable has never been assigned any value). Each time you declare a variable, its content is undefined."
console.log(undefined); 

const nul = "NULL: null represents an empty value(the variable contains nothing)."
console.log(nul); 

const number = "NUMBER: it can be any number between -(2^53 - 1) and +(2^53 - 1). Special values exist such as +Infinity and -Infinity(to handle operations like 50/0 or -2/0). Other languages have different data types for integers, floating points, different precisions but JavaScript doesn't(it only provides an additional BigInt)."
console.log(number); 


/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/
const variable = "VARIABLE: variables are containers for partially processed data. They have unique names, are totally reusable and have limited scope(they only exist in between their declaration and the completion of the related block of code."

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
let result = 12 + 20

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Create a variable named x containing the number 12.
*/
let x = 12

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/
let name = "John Doe"

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/
let ex2result = 12 - x

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */

let name1 = "john"
let name2 = "John" 
console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
x = 6
switch (x) {
    case 1: console.log("one"); break;
    case 2: console.log("two"); break;
    case 3: console.log("three"); break;
    case 4: console.log("four"); break;
    case 5: console.log("five"); break;
    case 6: console.log("six"); break;
    case 7: console.log("seven"); break;
    case 8: console.log("eight"); break;
    case 9: console.log("nine"); break;
    default: console.log("This works for only numbers between 1 and 9 (included")
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the result of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */
let tenaryExample = x > 10 ? true : false

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
