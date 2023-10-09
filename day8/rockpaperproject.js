console.log('hi');
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'){
    return userInput;
  }else if(userInput === 'paper'){
    return userInput;
  }else if(userInput === 'scissors'){
    return userInput;
  }else if(userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error. Please input the correct word')
  }
}
const getComputerChoice = () =>{
  randomnumber = Math.floor(Math.random() * 3);
  switch(randomnumber){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}
const determineWinner = (userChoice , computerChoice) => {
  if(userChoice === computerChoice ){
    return 'tie'
  }
  if(userChoice === 'rock'){
    if(computerChoice ==='paper'){
      return 'computer won'
    }else{
      return 'user won';
    }
  }
   if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'computer won'
    }else{
      return 'user won';
    }
  }
   if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'computer won'
    }else{
      return 'user won';
    }
  }
  if (userChoice === 'bomb'){
    return 'user won'
  }
}
const playGame = () => {
  let userChoice  = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
}
playGame()