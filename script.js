let userScore = 0
let computerScore = 0

const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const results_p = document.querySelector('.results > p')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')
const restartButton = document.getElementById('restart')

const randomComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choices[randomChoice]
}

const win = (userChoice, computerChoice) => {
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  results_p.innerHTML = `${userChoice} (user) beats ${computerChoice} (comp). You win!`
}

const lose = (userChoice, computerChoice) => {
  computerScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  results_p.innerHTML = `${userChoice} (user) loses to ${computerChoice} (comp). You lose!`
}

const tie = (userChoice, computerChoice) => {
  results_p.innerHTML = `${userChoice} (user) equals ${computerChoice} (comp). Its a tie!`
}

const game = (userChoice) => {
  const computerChoice = randomComputerChoice()
  switch (userChoice + computerChoice) {
    case 'paperrock':
    case 'scissorspaper':
    case 'rockscissors':
      win(userChoice, computerChoice)
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice)
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      tie(userChoice, computerChoice)
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

const clearGame = () => {
  userScore = 0
  computerScore = 0
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  results_p.innerHTML = `Good luck!`
}

restartButton.addEventListener('click', () => {
  clearGame()
})
