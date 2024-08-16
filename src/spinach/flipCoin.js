// 模拟抛硬币
function flipCoin() {
  // 每次根据当前时间设置随机数种子
  // Math.seedrandom(Date.now());
  return Math.random() < 0.5 ? '正面' : '反面';
}
// 每局抛N次硬币
function playGame(N) {
  let headsCount = 0;
  let tailsCount = 0;
  for (let i = 0; i < N; i++) {
    const result = flipCoin();
    if (result === '正面') {
      headsCount++;
    } else {
      tailsCount++;
    }
  }
  // console.log(`正面: ${headsCount}, 反面: ${tailsCount}`);
  return headsCount > 0 ? '赢' : '输';
}
// 玩1000局游戏，统计全输的次数
function play1000Games() {
  
  let loseCount = 0;
  for (let i = 0; i < 10000; i++) {
    const result = playGame(11);
    if (result === '输') {
      loseCount++;
    }
  }
  return loseCount;
}

// console.log(play1000Games());




console.log(flipCoin())

// kdf 赢 1.4








export default {
  play1000Games,
  playGame,
  flipCoin
}
























