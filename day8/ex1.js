// Q1,2,3,4,5
// let dog = {
//     name : "Tomy",
//     legs : 4,
//     color : "black and white",
//     age : 15,
//     bark : function(){
//         return "woof woof";
//     }
// };
// dog.breed = "american husky";
// let value = Object.values(dog);
// dog.getDogInfo = function(){
//     return "the dog is 15 years old and he is american husky. also a male";
// }
// console.log(value)
// exersie 2 
// Q1
// let users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
//   let mostSkilledPerson = null;
//   let maxSkills = 0;
  
//   for (const username in users) {
//     if (users.hasOwnProperty(username)) {
//       const user = users[username];
//       const numSkills = user.skills.length;
  
//       if (numSkills > maxSkills) {
//         maxSkills = numSkills;
//         mostSkilledPerson = username;
//       }
//     }
//   }
  
//   console.log(`${mostSkilledPerson} has the most skills with ${maxSkills} skills.`);
// Q2
// let loggedInCount = 0;
// let highPointsCount = 0;

// for (const username in users) {
//   if (users.hasOwnProperty(username)) {
//     const user = users[username];

//     if (user.isLoggedIn) {
//       loggedInCount++;
//     }

//     if (user.points >= 50) {
//       highPointsCount++;
//     }
//   }
// }
// console.log(`Logged-in users: ${loggedInCount}`);
// console.log(`Users with >= 50 points: ${highPointsCount}`);
// Q3
// let mernDevelopers = [];

// for (const username in users) {
//   if (users.hasOwnProperty(username)) {
//     let user = users[username];
    
//     // Check if the user has skills in MongoDB, Express, React, and Node.js
//     const hasMernSkills =
//       user.skills.includes('MongoDB') ||
//       user.skills.includes('Express') ||
//       user.skills.includes('React') ||
//       user.skills.includes('Node.js');

//     if (hasMernSkills) {
//       mernDevelopers.push(username);
//     }
//   }
// }

// console.log('MERN stack developers:', mernDevelopers);
// Q4,5,6
// let copyusers = Object.assign({}, users);
// copyusers.fullname = "Progganur";
// const key = Object.keys(users)
// const value = Object.values(users)
// console.log(key, value)
// Q7
// let couuntries = {
//     cn : "Bangladesh",
//     capital : "Dhaka",
//     Population : "23 milion",
//     language : "Bangla"
// }
