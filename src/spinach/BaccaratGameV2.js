/**
 * 百家乐游戏
 * 帮我写一个百家乐模拟游戏，游戏规则如下：
 * 庄家胜利概率 45.86% 如果压庄赢1:1.95
 * 和牌概率 9.52% 如果压和牌1:8
 * 闲家胜利概率 44.62% 如果压闲赢1:2
 * 斩龙策略：斩4刀追1刀，如果是长闲，前四刀以20为起注压庄，如果没中则翻倍继续压庄，如果四刀没斩断，则第5刀翻倍跟闲，如果第5刀断了则视为一次回撤，5刀任意一刀中了则换台重新以起注20开始
 * 遇到回撤后：换一个台子，重新开始斩4追1，第一刀起注改为640，还是没中则翻倍继续压庄，如果四刀没斩断，则第5刀翻倍跟闲，如果第5刀断了则视为一次回撤， 5刀任意一刀中了则重新以起注20开始
 */

class BaccaratGameV2 {
  constructor() {
    this.bankerWinRate = 0.4586; // 庄家胜利概率
    this.tieWinRate = 0.0952; // 和牌概率
    this.playerWinRate = 0.4462; // 闲家胜利概率
    this.bankerWinOdds = 1.95; // 庄家胜利赔率
    this.tieWinOdds = 8; // 和牌赔率
    this.playerWinOdds = 2; // 闲家胜利赔率
    this.limitMinBetAmount = 20; // 起注金额
  }
  create
}

// 百家乐台子
class BaccaratTable {
  constructor() {
    this.currentIndex = 0; // 当前局数
    this.total = 0; // 总局数
    this.result = []; // 游戏结果
  }
  start () {

  }
}

// 策略
class Strategy {
  constructor() {

  }
}

// 投注记录
class BetRecord {
  constructor() {
    // 投注钱余额
    this.balance = 0;
    // 投注后余额
    this.afterBalance = 0;
    this.betAmount = 0; // 投注金额
    this.winAmount = 0; // 赢的金额
    // 游戏结果
    this.result = 0; // 0:和牌 1:庄家赢 2:闲家赢
  }
}

// 策略1：斩龙策略
class KillDragon extends Strategy {
  constructor() {
    super();
    this.turn = [];
  }
  next () {
    // 初始状态
  }
}

// 玩家
class Player {
  constructor(options) {
    // 本金
    this.balance = options.balance;
    // 采用策略
    this.strategy = options.strategy;
  }
  // 开始玩
  start () {
    // 找个桌子
    this.table = this.strategy.getTable();

    this.table.on('beting', this.onBeting.bind(this));
    this.table.on('baccaratResult', this.onBaccaratResult.bind(this));

  }

  onBeting (data) {
    console.log('玩家投注', data);
    let 
  }

  onBaccaratResult (data) {
    console.log('玩家收到百家乐结果', data);
  }


}