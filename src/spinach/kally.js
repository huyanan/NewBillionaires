/**
 * 
 * @param capital 本金
 * @param winRate 胜率
 * @param winRatio 胜率比
 * @returns 
 */
function kelly(capital, winRate, winRatio) {
  return capital * (winRate - (1 - winRate) / winRatio);
}
// 1/4凯利
function kelly1_4(capital, winRate, winRatio) {
  return capital * 0.01
}
// test
console.log(kelly1_4(20000, 0.501, 1)); // 40

// 一直下注直到本金归零
function kellyTest(capital, winRate, winRatio, goal) {
  let bet = kelly1_4(capital, winRate, winRatio);
  while (capital > 0 && capital < goal && bet > 20) {
    if (Math.random() < winRate) {
      capital += bet;
    } else {
      capital -= bet;
    }
    console.log(bet,capital);
    bet = kelly1_4(capital, winRate, winRatio);
  }
  return capital;
}
// 测试1w次，统计成功和失败的次数
let success = 0;
let fail = 0;
for (let i = 0; i < 100; i++) {
  if (kellyTest(20000, 0.5, 1, 200000) >= 200000) {
    success++;
  } else {
    fail++;
  }
}
console.log(`成功次数：${success}，失败次数：${fail}`);
// console.log(kellyTest(20000, 0.501, 1, 200000))