const Table = require('./Table');
const Player = require('./Player');

/**
 * 百家乐游戏
 * Game类负责管理所有桌子，玩家，以及游戏逻辑
 * Game根据参数初始化桌子，玩家，并开始游戏
 * 默认2s为一个周期，1s发牌+下注，1s结算上一局+发牌+下注
 * 桌子类提供玩家上桌下桌、发牌，接受用户下注，结算上一局，记录投注记录等功能
 * 玩家类要根据策略选桌子，下注，接受发牌结果，接受结算结果，记录投注记录等功能
 */

class Game {
  constructor(options) {
    // 玩家胜利概率
    this.playerWinRate = options.playerWinRate || 0.4462;
    // 和牌概率
    this.tieRate = options.tieRate || 0.0952;
    // 庄家胜利概率
    this.bankerWinRate = options.bankerWinRate || 0.4586;
    // 庄赢赔率
    this.bankerOdds = options.bankerOdds || 1.95;
    // 和牌赔率
    this.tieOdds = options.tieOdds || 8;
    // 闲赢赔率
    this.playerOdds = options.playerOdds || 2;
    // 桌子数量
    this.tableNum = options.tableNum || 1;
    // 玩家数量
    this.playerNum = options.playerNum || 1;
    // 桌子数量
    this.tables = [];
    // 玩家数量
    this.players = [];

    this.init();
  }

  init() {
    for (let i = 0; i < this.tableNum; i++) {
      this.tables.push(new Table({
        bankerWinRate: this.bankerWinRate,
        tieRate: this.tieRate,
        playerWinRate: this.playerWinRate,
      }));
    }
    for (let i = 0; i < this.playerNum; i++) {
      this.players.push(new Player({
        game: this
      }));
    }
  }

  start () {
    this.isRuning = true;
    this.run();
  }
  stop () {
    this.isRuning = false;
  }

  run () {
    if (!this.isRuning) {
      return;
    }
    for (let i = 0; i < this.tables.length; i++) {
      this.tables[i].run();
    }
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].run();
    }
    setTimeout(() => {
      this.run()
    }, 1000)
  }

  log () {
    console.log('tables:', this.tables);
    this.tables.forEach((table) => table.log());
    // console.log('players:', this.players);
  }

}

module.exports = Game;