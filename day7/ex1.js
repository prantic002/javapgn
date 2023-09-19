// Q1
// function fullName(){
//     let fn = "Progganur", ln = "Chakraborty";
//     console.log(fn, ln);

// }
// fullName()
// Q2
// function fullName(fl, ls){
//     console.log(fl, ls);
// }
// fullName("Progganur", "Chakraborty")
// Q3
// function addnum(two, two1){
//     let sum = two + two1;
//     return sum
// }
// console.log(addnum(4, 9));
// exersise 2 for function given below. we are not using separete file.
// Q1
// const le = (x, a, b, c) =>{
//     let y = (-(a * x)-c)/b;
//     return y;
// }
// console.log(le(4,6,8,10));
// Q2
// const qe = (a,b,c) =>{
//     let x1 = (-b+Math.sqrt(b*b-4*a*c))/2*a;
//     let x2 = (-b-Math.sqrt(b*b-4*a*c))/2*a;
//     return x1,x2;
// }
// console.log(qe(0))
// console.log(qe(1,4,4))
// Q3
// const printarray = (array) => console.log(array);
// let num = [1, 5, 6, 8, 0, 10];
// printarray(num)
// Q4
// let dex = () =>{
//     let now = new Date();
//     let day = now.getDate();
//     let mo = now.getMonth();
//     let year = now.getFullYear();
//     let ho = now.getHours();
//     let min = now.getMinutes();
//     console.log(`${day}/${mo}/${year} ${ho}:${min}`)
// }
// dex()
// Q6
// let rev = (arr) =>{
//     console.log(arr.reverse())
// }
// rev([1,2,3,4,5]
// Q5
// const sv = (x,y) =>{
//     const temp = x;
//     x = y;
//     y = temp;
//     return [x,y];
// }
// console.log(sv(3,4))
// Q7
// const ca = (arr) =>{
//     const sv = []
//     for(i = 0; i < arr.length; i++){
//         const sr = arr[i]
//         const sf = sr.toUpperCase();
//         sv.push(sf)
//     }
//     return sv;
// }
// console.log(ca(['banana','mango']));
// Q8
// const mk = (arr, item) =>{
//     arr.push(item);
//     return arr;
// }
// console.log(mk(['banana','mango'], 'lemon'))
// Q9
// function removeItem(arr, index) {
//     if (index >= 0 && index < arr.length) {
//       arr.splice(index, 1);
//     }
//     return arr;
//   }
//   console.log(removeItem([ 'banana', 'mango', 'lemon'], 1))
// Q10
// function sumOfNumbers(number) {
//     if (number <= 0) {
//       return 0; // Return 0 if the input is not a positive number
//     }
  
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   // Example usage:
//   const result = sumOfNumbers(5); // Adds numbers from 1 to 5: 1 + 2 + 3 + 4 + 5 = 15
//   console.log(result); // Output: 15
// Q11
// function sumOfOdds(number) {
//     if (number <= 0) {
//       return 0; // Return 0 if the input is not a positive number
//     }
  
//     let sum = 0;
//     for (let i = 1; i <= number; i++) {
//       if (i % 2 !== 0) {
//         sum += i; // Add the odd number to the sum
//       }
//     }
//     return sum;
//   }
  
//   // Example usage:
//   const result = sumOfOdds(5); // Adds odd numbers from 1 to 5: 1 + 3 + 5 = 9
//   console.log(result); // Output: 9  
//   Q12
// function sumOfEven(number) {
//     if (number <= 0) {
//       return 0; // Return 0 if the input is not a positive number
//     }
  
//     let sum = 0;
//     for (let i = 2; i <= number; i += 2) {
//       sum += i; // Add the even number to the sum
//     }
//     return sum;
//   }
  
//   // Example usage:
//   const result = sumOfEven(6); // Adds even numbers from 2 to 6: 2 + 4 + 6 = 12
//   console.log(result); // Output: 12
  
// Q14
// const rv = (...args) =>{
//     let sum = 0;
//     for(i =0; i < args.length; i++){
//         sum += args[i];
//     }
//     return sum;
// }
// console.log(rv(1,2,3,4));
// Q15
// function UserIp() {
//     const ipParts = [];
  
//     for (let i = 0; i < 4; i++) {
//       const randomPart = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255
//       ipParts.push(randomPart); // Add the random number to the IP parts array
//     }
  
//     const ipAddress = ipParts.join('.'); // Join the IP parts with periods to form the IP address
//     return ipAddress;
//   }
//   console.log(UserIp())
// Q16
// function MacAddress() {
//     const macParts = [];
  
//     for (let i = 0; i < 6; i++) {
//       const randomPart = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255
//       const hexPart = randomPart.toString(16).padStart(2, '0'); // Convert to hexadecimal format with leading zeros if necessary
//       macParts.push(hexPart); // Add the hex part to the MAC address parts array
//     }
  
//     const macAddress = macParts.join(':'); // Join the MAC address parts with colons to form the MAC address
//     return macAddress;
//   }
//   console.log(MacAddress())
// Q17
// function randomHexaNumberGenerator() {
//     const randomHex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random number and convert it to hexadecimal
//     return randomHex;
//   }
//   console.log(randomHexaNumberGenerator())
// Q18
// function userIdGenerator() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let userId = '';
  
//     for (let i = 0; i < 7; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       userId += characters.charAt(randomIndex);
//     }
//    return userId;
//   }
// console.log(userIdGenerator())
// exersise 3 of function below
// Q1
// function userIdGeneratedByUser() {
//     // Prompt the user for the number of characters and number of IDs
//     const charCount = parseInt(prompt("Enter the number of characters for each user ID:"));
//     const idCount = parseInt(prompt("Enter the number of user IDs to generate:"));
//    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const generatedUserIds = [];
  
//     for (let j = 0; j < idCount; j++) {
//       let userId = '';
  
//       for (let i = 0; i < charCount; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         userId += characters.charAt(randomIndex);
//       }
  
//       generatedUserIds.push(userId);
//     }
  
//     // Display the generated user IDs
//     alert(`Generated User IDs: \n${generatedUserIds.join('\n')}`);
//   }
  
//   // Call the function to generate user IDs based on user input
//   userIdGeneratedByUser();
//     // Validate input
//     if (isNaN(charCount) || isNaN(idCount) || charCount <= 0 || idCount <= 0) {
//       alert("Invalid input. Please enter positive numbers for both character count and ID count.");
//       return;
//     }

// Q2
// function rgbColorGenerator() {
//     const randomRed = Math.floor(Math.random() * 256); // Generate a random value for red (0-255)
//     const randomGreen = Math.floor(Math.random() * 256); // Generate a random value for green (0-255)
//     const randomBlue = Math.floor(Math.random() * 256); // Generate a random value for blue (0-255)
  
//     const rgbColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
//     return rgbColor;
//   }
  
//   // Example usage:
//   const randomColor = rgbColorGenerator();
//   console.log(randomColor); // Output: Random RGB color like "rgb(123, 45, 67)"
  
// Q3
// function arrayOfHexaColors(numColors) {
//     const hexColors = [];
  
//     for (let i = 0; i < numColors; i++) {
//       const randomHex = Math.floor(Math.random() * 16777215).toString(16); // Generate a random hexadecimal color
//       hexColors.push(`#${randomHex}`); // Add the color to the array with a "#" prefix
//     }
  
//     return hexColors;
//   }
//   console.log(arrayOfHexaColors(8))
// Q4
// function arrayOfRgbColors(numColors) {
//     const rgbColors = [];
  
//     for (let i = 0; i < numColors; i++) {
//       const randomRed = Math.floor(Math.random() * 256); // Generate a random value for red (0-255)
//       const randomGreen = Math.floor(Math.random() * 256); // Generate a random value for green (0-255)
//       const randomBlue = Math.floor(Math.random() * 256); // Generate a random value for blue (0-255)
  
//       const rgbColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
//       rgbColors.push(rgbColor);
//     }
  
//     return rgbColors;
//   }
//   Q5
// function convertHexaToRgb(hexColor) {
//     // Remove "#" symbol if it's present in the input
//     hexColor = hexColor.replace(/^#/, '');
  
//     // Parse the hexadecimal color code into red, green, and blue components
//     const red = parseInt(hexColor.slice(0, 2), 16);
//     const green = parseInt(hexColor.slice(2, 4), 16);
//     const blue = parseInt(hexColor.slice(4, 6), 16);
  
//     // Construct the RGB color code
//     const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
//     return rgbColor;
//   }
//   Q6
// function convertRgbToHexa(rgbColor) {
//     // Use regular expressions to extract the red, green, and blue components
//     const rgbRegex = /^rgb\((\d+), (\d+), (\d+)\)$/i;
//     const match = rgbColor.match(rgbRegex);
  
//     if (!match) {
//       return null; // Invalid RGB color format
//     }
  
//     // Extract the red, green, and blue components from the matched groups
//     const red = parseInt(match[1]);
//     const green = parseInt(match[2]);
//     const blue = parseInt(match[3]);
  
//     // Convert the components to hexadecimal and format them
//     const redHex = red.toString(16).padStart(2, '0');
//     const greenHex = green.toString(16).padStart(2, '0');
//     const blueHex = blue.toString(16).padStart(2, '0');
  
//     // Construct the hexadecimal color code
//     const hexColor = `#${redHex}${greenHex}${blueHex}`;
  
//     return hexColor;
//   }
//   Q7
// function generateColors(numColors, format = 'hex') {
//     const colors = [];
  
//     for (let i = 0; i < numColors; i++) {
//       let color;
  
//       if (format === 'hex') {
//         // Generate a random hexadecimal color
//         color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//       } else if (format === 'rgb') {
//         // Generate a random RGB color
//         const randomRed = Math.floor(Math.random() * 256);
//         const randomGreen = Math.floor(Math.random() * 256);
//         const randomBlue = Math.floor(Math.random() * 256);
//         color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
//       } else {
//         return null; // Invalid format
//       }
  
//       colors.push(color);
//     }
  
//     return colors;
//   }
//   Q8
// function shuffleArray(array) {
//     // Create a copy of the original array to avoid mutation
//     const shuffledArray = [...array];
  
//     // Fisher-Yates shuffle algorithm
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
//     }
  
//     return shuffledArray;
//   }

// Q9
// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1; // The factorial of 0 and 1 is 1
//     } else if (number < 0) {
//       return "Undefined"; // Factorial is not defined for negative numbers
//     } else {
//       let result = 1;
//       for (let i = 2; i <= number; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
// Q10
// function isEmpty(value) {
//     // Check if the value is null or undefined
//     if (value === null || value === undefined) {
//       return true;
//     }
  
//     // Check if the value is an empty string
//     if (typeof value === "string" && value.trim() === "") {
//       return true;
//     }
  
//     // Check if the value is an empty array
//     if (Array.isArray(value) && value.length === 0) {
//       return true;
//     }
  
//     // Check if the value is an empty object
//     if (typeof value === "object" && Object.keys(value).length === 0) {
//       return true;
//     }
  
//     return false; // The value is not empty
//   }
// Q11
// function sum() {
//     let total = 0;
  
//     for (let i = 0; i < arguments.length; i++) {
//       total += arguments[i];
//     }
  
//     return total;
//   }
//   Q12
// function sumOfArrayItems(arr) {
//     let total = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] !== 'number') {
//         return 'Invalid input: Array contains non-number values.';
//       }
//       total += arr[i];
//     }
  
//     return total;
//   }
// Q13
// function average(arr) {
//     let sum = 0;
//     let count = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] !== 'number') {
//         return 'Invalid input: Array contains non-number values.';
//       }
//       sum += arr[i];
//       count++;
//     }
  
//     if (count === 0) {
//       return 'Invalid input: Array is empty.';
//     }
  
//     return sum / count;
//   }
// Q14
// function modifyArray(arr) {
//     if (arr.length < 5) {
//       return 'item not found';
//     }
  
//     // Modify the fifth item (at index 4)
//     arr[4] = arr[4].toUpperCase();
  
//     return arr;
//   }
//   console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
// Q15
// const isprime = (num) =>{
//     for (let i = 2; i <= num; i++) {
//          let Prime = true;
//          if(Prime){
//             return num
//          }
// }
// }
// console.log(isprime(7))
// Q16
// function areAllItemsUnique(arr) {
//     // Create an empty object to store seen items
//     const seenItems = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const item = arr[i];
  
//       // If the item has been seen before, it's not unique
//       if (seenItems[item]) {
//         return false;
//       }
  
//       // Mark the item as seen
//       seenItems[item] = true;
//     }
  
//     // All items are unique
//     return true;
//   }
// Q17
// function areAllItemsSameType(arr) {
//     if (arr.length === 0) {
//       return true; // An empty array is considered to have items of the same type (undefined).
//     }
  
//     const firstItemType = typeof arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (typeof arr[i] !== firstItemType) {
//         return false;
//       }
//     }
  
//     return true;
//   }
// Q18
// function isValidVariable(variableName) {
//     // Check if the variable name is a string
//     if (typeof variableName !== 'string') {
//       return false;
//     }
  
//     // Check if the variable name starts with a letter, underscore, or dollar sign
//     if (!/^[a-zA-Z_$]/.test(variableName.charAt(0))) {
//       return false;
//     }
  
//     // Check if the variable name contains only valid characters (letters, numbers, underscores, or dollar signs)
//     if (!/^[a-zA-Z0-9_$]+$/.test(variableName)) {
//       return false;
//     }
  
//     return true;
//   }
// Q19
// function generateUniqueRandomNumbers() {
//     const uniqueNumbers = new Set();
  
//     while (uniqueNumbers.size < 7) {
//       const randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
//       uniqueNumbers.add(randomNumber); // Add the number to the Set (ensures uniqueness)
//     }
  
//     return Array.from(uniqueNumbers); // Convert the Set back to an array
//   }
// Q20
// function reverseCountries(countries) {
//     // Copy the original array
//     const copiedArray = [...countries];
  
//     // Reverse the copied array
//     const reversedArray = copiedArray.reverse();
  
//     return reversedArray;
//   }