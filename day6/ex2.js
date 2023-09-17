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
  
//   let longestCountry = [];
  
//   for (let i = 0; i < countries.length; i++) {
//     const countryName = countries[i];
//     if (countryName.length > longestCountry.length) {
//       longestCountry = countryName;
//     }
//   }
  
//   console.log(longestCountry);
// let dx = [];
// for(i = 0; i < countries.length; i++){
//     const lm = countries[i];
//     if(lm.length == 5){
//         dx.push(lm);
//     }
// }
// console.log(dx);
// Q11, Q12
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
//   let lw = [];
//   for(i = 0; i < webTechs.length; i++){
//     let mv = webTechs[i];
//     if(mv.length > lw.length){
//         lw = mv;
//     } 
//   }
//   console.log(lw);
// let arr = [];
// for(i = 0; i < webTechs.length; i++){
//     let web = webTechs[i];
//     let mb = web.length;
//     arr.push([web, mb]);
// }
// console.log(arr);
// Q13
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// let acronym = '';
// for (let i = 0; i < mernStack.length; i++) {
//   const word = mernStack[i];
//   acronym += word[0];
// }

// console.log(acronym);
// Q14
// const ls = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
// for(const rv of ls){
//     console.log(rv);
// }
// Q15
// const fr = ['banana', 'orange', 'mango', 'lemon'];
// let fd = []
// for(i = fr.length - 1; i >= 0; i--){
//     fd.push(fr[i])
// }
// console.log(fd)
// Q16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  for(i = 0; i < fullStack.length; i++){
        let cov = fullStack[i];
        for(j = 0; j < cov.length; j++){
            console.log(cov[j].toUpperCase())
        }
    }