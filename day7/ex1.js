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
const rv = () =>{
    let sum = 0;
    for(i =0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(rv([1,2,3]));