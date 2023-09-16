// Q1
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let num = '';
// for(i = 0; i < characters.length ; i++){
//     const num2 = Math.floor(Math.random() * characters.length);
//     num += characters[num2];
// }
// console.log(num);
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const length = 15; // Change this to the desired length of your random ID
// let randomID = '';

// Generate a random ID with the specified length
// for (let i = 0; i < length; i++) {
//   const randomIndex = Math.floor(Math.random() * characters.length);
//   randomID += characters[randomIndex];
// }

// console.log(randomID);
// Q2
// const num = '0123456789ABCDEF';
// let hex = 'Ox'; //standard prefix for hexadecimal numbers in JavaScript.
// for(i = 0; i < num.length; i++){
//     const num2 = Math.floor(Math.random() * num.length);
//     hex += num[num2];
// }
// console.log(hex)
// Q3
// let rgb = 'rgb(';//he starting part of the RGB color notation.
// for(i = 0; i < 3; i++){
//     const num = Math.floor(Math.random() * 256);
//     rgb += num;
//     if(i < 2){
//         rgb += ',';
//     }else{
//         rgb += ')';
//     }
// }
// console.log(rgb)
// Q4, Q5
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
//   const newarr = [];
//   for(i = 0; i < countries.length; i++){
//     newarr.push(countries[i].toUpperCase())
//   }
//   console.log(newarr)
const num = [];
for(i = 0; i < countries.length; i++){
    const con = countries[i];
    const conv = con.length;
    num.push(conv);
}
console.log(num);