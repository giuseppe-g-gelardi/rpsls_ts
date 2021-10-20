const prompt = require('prompt-sync')()
const { Player } = require('./player')

export{}

class Human extends Player {
  constructor(public name: string) {
    super(name)
  }

  gestures(): void {
    console.log('please choose: rock, paper, scissors, lizard or spock')
    let playerChoice: string = prompt()
    
    this.choice = this.playerMoves.find((move: string | null) => move === playerChoice)

    if (this.choice === undefined) {
      console.log('invalid choice, please try again')
      this.gestures()
    } else {
      console.log(this.choice)
    }
  }
}

module.exports ={
  Human: Human
}