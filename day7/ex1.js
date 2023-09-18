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
  
//     return userId;
//   }
// console.log(userIdGenerator())