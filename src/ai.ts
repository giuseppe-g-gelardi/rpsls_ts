const { Player } = require('./player')

export{}

class AI extends Player {
  constructor(name: string) {
    super(name)
  }

  // ai() {
  //   this.ai = new AI('Mr. Roboto')
  // }

  gestures() {
    let rand = Math.floor(Math.random() * 5)
    this.choice = this.playerMoves[rand]

    console.log(`player picked ${this.choice}`)
  }
}

module.exports = {
  AI: AI
}

