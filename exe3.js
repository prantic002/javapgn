// Q1
// let b1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let count = b1.match(/love/gi)
// console.log(count)
// Q2
// let b2 = 'You cannot end a sentence with because because because is a conjunction'
// let mar = b2.match(/because/gi)
// console.log(mar)
// // Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Q3
let sen = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let pat = sen.match(/\d+/gi) // extracted the number
console.log(pat) // tested worked or not
const f1 = pat[0] // broke the array into single array
const f2 = pat[1]
const f3 = pat[2]
let s1 = parseInt(f1), s2 = parseInt(f2), s3 = parseInt(f3) // changed string into number
 let salary = s1 + s2 + s3 // addition
console.log(salary) // asnwer past