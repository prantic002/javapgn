// Q1
// for(i = 10 ; i >= 0; i--){
//     console.log(i)
// }
// let i = 10
// while(i >= 0){
//     console.log(i)
//    i--
// }  
// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i<=10)
// Q3
// for (let i = 0; i <= n; i++) {
//     console.log(i); // Print the current value of 'i'
//   }
// Q4
// for(i = 0; i <= 7; i++){
//     let line = '';
//     for(j = 1; j <= i; j++){
//         line += '#'
//     }
//     console.log(line)
// }
// Q5
// for(i = 0; i <= 10; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }
// q6
// console.log('i\ti^2\ti^3');
// for(i = 0; i<=10; i++){
//     console.log(`${i}\t${i**2}\t${i**3}`)
// }
// let i = 0;
// console.log('i\ti^2\ti^3');
// do{
//     console.log(`${i}\t${i**2}\t${i**3}`);
//     i++
// }while(i<=10)
// q7
// for(i = 0 ; i <= 100; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// Q8
// for(i = 0 ; i <= 100; i++){
//     if (i){
//         console.log(i)
//     }
// }
// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
  
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false; 
//         break;
//       }
//     }
  
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// Q10
// let sum = 0;
// for(i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
// Q11, Q12
// let sum1 = 0, sum2 = 0;
// for(i = 0; i <=100; i++){
//     if(i % 2 == 0){
//         sum1 += i;
//     }
//     else if(i % 2 != 0){
//             sum2 += i;
//     }
// }
// const rise = [sum1, sum2]
// console.log(`The sum of all evens from 0 to 100 is ${sum1}. And the sum of all odds from 0 to 100 is ${sum2}.`)
// console.log(rise)
// Q13
// let num = [];
// for(i = 0; i < 5; i++){
//     const num2 = Math.floor(Math.random() * 1000) + 1;
//     num.push(num2)
// }
// console.log(num);
// Q14
// let num = [];
// while(num.length < 5){
//     const num2 = Math.floor(Math.random() * 1000) + 1;
//     if(!num.includes(num2)){
//         num.push(num2);
//     }
// }
// console.log(num);
// Q15
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let num = '';
// for(i = 0; i < 6; i++){
//     const num2 = Math.floor(Math.random() * characters.length);
//     num += characters[num2];
// }
// console.log(num);