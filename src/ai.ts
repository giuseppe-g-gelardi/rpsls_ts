const { Player } = require('./player')

export{}

class AI extends Player {
  constructor(public name: string) {
    super(name)
  }

  gestures(): void {
    let rand: number = Math.floor(Math.random() * 5)
    this.choice = this.playerMoves[rand]

    console.log(`player picked ${this.choice}`)
  }
}

module.exports = {
  AI: AI
}

