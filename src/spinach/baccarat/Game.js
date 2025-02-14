import Table from './table';
import Player from './player';
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

  run () {
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

}