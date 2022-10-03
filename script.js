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
  const choices = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choices[randomChoice]
}

console.log(randomComputerChoice())

const game = (userChoice) => {
  console.log(`${userChoice}`)
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
