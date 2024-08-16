class Dragon {
  constructor(option = {}) {
    this.init(options)
  }
  init(options) {
    // 初始投注
    this.head = options.head || 2
    // 初始倍率
    this.headRate = options.headRate || 2
    // 是否胜利
    this.isWin = false
    // 赢利金额
    this.winMoney = 0
  }
  // 赢
  win () {

  }

}


// 本金1000，初始2元，每次翻倍压住，赢则翻倍，最多能连输几把
function calculateMaxLosses(principal, initialBet, multiplier) {
  let currentBet = initialBet;
  let currentPrincipal = principal;
  let consecutiveLosses = 0;

  while (currentPrincipal >= currentBet) {
    // if (Math.random() < 0.5) {
    //   currentPrincipal += currentBet;
    //   currentBet = initialBet;
    //   consecutiveLosses = 0;
    // } else
    // {
      currentPrincipal -= currentBet;
      currentBet *= multiplier;
      consecutiveLosses++;
    // }

  }
  return consecutiveLosses;
}

console.log(calculateMaxLosses(5000, 2, 2));