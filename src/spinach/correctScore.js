// import flipCoin from "./flipCoin";
function flipCoin() {
  // 每次根据当前时间设置随机数种子
  // Math.seedrandom(Date.now());
  return Math.random() < 0.5 ? '正面' : '反面';
}
// 5局3胜，3局两胜，7局4胜 ，打N场比赛，随机M个比分，
function correctScore(N, M) {
  let arr = [];
  let randomScore = null;
  let winCount = Math.floor(N/2+1)
  for (let i = 0; i < M; i++) {
    randomScore = Math.floor(Math.random() * winCount);

    // 首先随机某个队获胜
    let win = flipCoin();
    if (win === '正面') {
      arr.push(`${winCount}:${randomScore}`);
    } else {
      arr.push(`${randomScore}:${winCount}`);
    }
  }
  return arr;
}


console.log(correctScore(5, 4));