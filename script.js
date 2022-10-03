const randomChoice = (arr) => {
  const randomChoice = Math.floor(Math.random() * arr.length)
  const item = arr[randomChoice]
  return item
}

const choices = ['Rock', 'Paper', 'Scissors']

const computerChoice = randomChoice(choices)

console.log(computerChoice)

let playerChoice = 0
let tie = 0

document.querySelector('#rock').addEventListener('click', function () {
  if (playerChoice === 'Rock') return computerChoice
})
console.log(playerChoice)
