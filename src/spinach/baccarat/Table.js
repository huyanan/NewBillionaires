class Table {
  constructor(options) {
    this.options = options;
    this.players = [];
    this.records = [];
    this.status = 'init' // init playing 
    this.bount = null
  }
  addPlayer(player) {
    this.players.push(player);
  }
  removePlayer(player) {
    this.players = this.players.filter((p) => p !== player);
  }
  start () {
    this.status = 'playing'
  }
  bet (player, bet) {
    this.bount.bets.push(bet)
  }

  // 结算上一局
  settle () {
    if (this.bount) {
      if (this.bount.status === 'deald') {
        // 计算结果
        this.bount.isTie = this.bount.banker.point === this.bount.player.point
        this.bount.isBankerWin = this.bount.banker.point > this.bount.player.point
        this.bount.isPlayerWin = this.bount.banker.point < this.bount.player.point
        // 派发奖金
        this.bount.bets.forEach((bet) => {
          // TODO: 计算奖金
          // if
          // TODO: 更新玩家余额
          // TODO: 记录投注记录
          // this.records.push(this.bount)
        })
      }
    }
  }

  // 发牌，等待玩家下注
  nextBount () {
    this.bount = {
      status: 'init', // init deald settled
      // 庄家牌
      banker: {
        cards: [],
        point: 0,
      },
      // 闲家牌
      player: {
        cards: [],
        point: 0,
      },
      isTie: false,
      isBankerWin: false,
      isPlayerWin: false,
      bets: [
        // { player: null, money: 0, odds: 1.95, win: false,  },
      ]
    }
  }


  run () {
    // 如果有上一局，则先开牌计算上一局结果，并且派发奖金
    this.settle();
    // 发牌，然后等待玩家下注
    this.nextBount();
  }
}