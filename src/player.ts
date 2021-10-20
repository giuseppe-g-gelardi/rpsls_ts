export{}
class Player {
  public name: string
  score: number
  playerMoves: string[]
  choice: string
  constructor(name: string) {
    this.name = name
    this.score = 0
    this.playerMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    this.choice = ''
  }
}

module.exports = {
  Player: Player
}