
function AntsMove(balance=20000, stopPro=1000, stopLoss=1000, ) {
  
}
/**
  斐波那契投注法、佛特蒙投注法
  斐波那契数列：数列从0和1开始，后续数字为前两个数字之和，即0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  输了往后走，赢了退两步
 */

/**
  100 300 700 1500 3100 共计 5700
 */


// 策略
class Strategy {
  constructor (options) {
    this.balance = options.balance || 20000
    this.stopPro = options.stopPro || 1000
    this.stopLoss = options.stopLoss || 1000
    // 配注策略
    this.betStrategy = [100, 300, 500, ]
  }
  getNextAction (balance, stopPro, stopLoss) {
    
  }
}