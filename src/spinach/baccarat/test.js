const Game = require('./Game')

const game = new Game({
  // playerWinRate: 0.4586,
  // tieRate: 0.0952,
  // bankerWinRate: 0.4462,
  tableNum: 1,
  playerNum: 1,
})

game.start();
setTimeout(() => {
  game.stop();
  game.log();
}, 6000);