const userScore = 0
const computerScore = 0

const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_footer = document.querySelector('.results')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

const randomComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choices[randomChoice]
}

const game = (userChoice) => {
  const computerChoice = randomComputerChoice()
  switch (userChoice + computerChoice) {
    case 'paperrock':
    case 'scissorspaper':
    case 'rockscissors':
      console.log('Player wins!')
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      console.log('Player Loses!')
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      console.log('Its a Tie!')
    default:
  }
}

const main = () => {
  rock_div.addEventListener('click', () => {
    game('rock')
  })

  paper_div.addEventListener('click', () => {
    game('paper')
  })

  scissors_div.addEventListener('click', () => {
    game('scissors')
  })
}
main()
