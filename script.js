const randomComputerChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  const item = arr[randomIndex]
  return item
}

const choices = ['Rock', 'Paper', 'Scissors']

const result = randomComputerChoice(choices)

console.log(result)

let playerChoice = 0
let computerChoice = 0
let tie = 0

// document.querySelector('#rock').addEventListener('click', function () {})
