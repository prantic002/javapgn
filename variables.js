// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let welcome = '30 Days Of JavaScript'
// Print the string on the browser console using console.log()
console.log(welcome)
// Print the length of the string on the browser console using console.log()
console.log(welcome.length)
// Change all the string characters to capital letters using toLowerCase() method
console.log(welcome.toLowerCase())
// Change all the string characters to capital letters using toUpperCase() method
console.log(welcome.toUpperCase())
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(welcome.substring(0,1))
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(welcome.substring(2,21))
// Check if the string contains a word Script using includes() method
console.log(welcome.includes('Script'))
// Split the string into an array using split() method
console.log(welcome.split())
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(welcome.split(' '))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(company.split(','))
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(welcome.replace('JavaScript','Python'))
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(welcome.charAt(15))
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(welcome.charCodeAt(11)) 
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(welcome.indexOf('a'))
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(welcome.lastIndexOf('a')) //have some problem qs 16 ex 1
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let word = 'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'))
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.lastIndexOf('because'))
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.search(/because/gi))
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(welcome.trim(''))
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(welcome.startsWith('30'))
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(welcome.endsWith('Script'))
// Use match() method to find all the a’s in 30 Days Of JavaScript
let bye = /a/gi
console.log(welcome.match(bye))
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let wel = '30 Days of'
console.log(wel.concat('JavaScript'))
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(welcome.repeat(2))
