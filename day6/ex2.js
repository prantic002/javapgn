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
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   const newarr = [];
//   for(i = 0; i < countries.length; i++){
//     newarr.push(countries[i].toUpperCase())
//   }
//   console.log(newarr)
// const num = [];
// for(i = 0; i < countries.length; i++){
//     const con = countries[i];
//     const conv = con.length;
//     num.push(conv);
// }
// console.log(num);
// Q6, Q7, Q8
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ];
  
//   const countryArray = [];
  
//   for (let i = 0; i < countries.length; i++) {
//     const countryName = countries[i];
//     const countryLength = countryName.length;
//     const countrycode = countryName.slice(0,3).toUpperCase();
//     countryArray.push([countryName,countrycode, countryLength]);
//   }
  
//   console.log(countryArray);
// let newland = [];
// for(i = 0; i < countries.length; i++){
//     const cn = countries[i];
//     if(cn.includes('land')){
//         newland.push(cn);
//     }
// }
// if(newland.length > 0){
//     console.log(newland)
// }else{
//     console.log('All these countries are without land')
// }
// let newcode = [];
// for(i = 0; i < countries.length; i++){
//     const con = countries[i];
//     if(con.endsWith('ia')){
//         newcode.push(con);
//     }
// }
// if(newcode.length > 0){
//     console.log(newcode);
// }else{
//     console.log('These are countries ends without ia')
// }
// Q9, Q10
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
  ];
  
//   let longestCountry = [];
  
//   for (let i = 0; i < countries.length; i++) {
//     const countryName = countries[i];
//     if (countryName.length > longestCountry.length) {
//       longestCountry = countryName;
//     }
//   }
  
//   console.log(longestCountry);
let dx = [];
for(i = 0; i < countries.length; i++){
    const lm = countries[i];
    if(lm.length == 5){
        dx.push(lm);
    }
}
console.log(dx);