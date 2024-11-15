
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  return userInput;
  } else{
    console.log('Invaild Entry')
  }
}
function getcomputerChoice() {
  let randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber){
    case(0):
    return 'rock'
    case(1):
    return 'paper'
    case(2):
    return 'scissors'
    default:
    return 'error'
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') { 
  return "You won with the secret cheat code!";
  }
  if(userChoice === computerChoice) {
    return 'The game is a tie!'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return "Computer Won!"
    } else {
      return "You Won!"
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') { 
      return "The computer won!"; 
      } else { 
        return "You won!"; 
        } 
      }
  if(userChoice === 'scissors') {
    if(computerChoice === 'paper'){
      return 'Computer Won!'
    } else {
      return 'You Won!'
    }
  }
}
function playGame() {
  const userChoice = getUserChoice('paper')
  const computerChoice = getcomputerChoice()
  console.log(`You Choice ${userChoice}`)
  console.log(`Computer Choice ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
