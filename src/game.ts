const prompt = require('prompt-sync')()
const { Human  } = require('./human')
const { AI } = require('./ai')

export{}
class Game {
  player1: typeof Human
  player2: typeof AI
  constructor() {
    console.log('hello player1, what is your name?')
    let player1Name = prompt()
    this.player1 = new Human(player1Name)
    this.player2 = new AI('computer')
  }

  // method that controls the flow of the game
  runGame() {
    this.gameMessage()
    this.multiplayer()
    this.outcome()
    this.restart()
  }

  // displays opening game message
  gameMessage() {
    console.clear()
    console.log(`${this.player1.name} has entered the fray...`)
    console.log('Welcome to rock, paper, scissors, lizard, spock!')
    console.log('best of 3 wins!')
    console.log(`
    \nTHE RULES!\n
    \nScissors cut Paper
    \nPaper covers Rock
    \nRock crushes Lizard
    \nLizard poisons Spock
    \nSpock smashes Scissors
    \nScissors decapitates Lizard
    `)
  }

  gestureCompare() {
    while (this.player1.score < 3 && this.player2.score < 3) {
      this.player1.gestures()
      this.player2.gestures()

      this.gestureDecision()

      
    }
  }

  gestureDecision() {

    if (this.player1.choice === this.player2.choice) {
      console.log('tie! play again!')
    } else if 
      (((this.player1.choice === 'rock') && (this.player2.choice === 'scissors' || this.player2.choice === 'lizard')) ||
      ((this.player1.choice === 'scissors') && (this.player2.choice === 'paper' || this.player2.choice === 'lizard')) ||
      ((this.player1.choice === 'paper') && (this.player2.choice === 'rock' || this.player2.choice === 'spock')) ||
      ((this.player1.choice === 'lizard') && (this.player2.choice === 'spock' || this.player2.choice === 'paper')) ||
      ((this.player1.choice === 'spock') && (this.player2.choice === 'scissors' || this.player2.choice === 'rock'))) {
        this.player1.score += 1
        console.clear()
        console.log(`${this.player1.choice} beats ${this.player2.choice}!. Player 1 wins!`)
        console.log(`score is Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
        this.gestureCompare()
    } else {
        this.player2.score += 1
        console.clear()
        console.log(`${this.player2.choice} beats ${this.player1.choice}!. Player 2 wins!`)
        console.log(`score is Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
    }
  }

  outcome() {
    if (this.player1.score === 3 || this.player2.score === 3) {
      if (this.player1.score > this.player2.score) {
        console.clear()
        console.log('player 1 wins')
      } else {
        console.clear()
        console.log('player 2 wins')
      }
    }
  }

  multiplayer() {
    console.log('would you like to play multiplayer? yes or no: ')
    let userInput = prompt()

    if (userInput === 'yes') {
      console.log('hello player 2 what is your name?')
      let player2name = prompt()
      this.player2 = new Human(player2name as string)
      this.gestureCompare()
    } else if (userInput === 'no') {
      this.gestureCompare()
    } else {
      console.log(`invalid input, pleaes type 'yes' or 'no'`)
      this.multiplayer()
    }
  }

  restart() {
    console.log('would you like to play again? yes or no: ')
    let playAgain = prompt()

    if (playAgain === 'yes') {
      this.player1.score = 0 
      this.player2.score = 0
      this.runGame()
    } else if (playAgain === 'no') {
      console.log('thanks for playing!')
    } else {
      console.log(`invalid input, pleaes type 'yes' or 'no'`)
      this.restart()
    }
  }
}

module.exports = {
  Game: Game
}