/**
 * 百家乐游戏
 * 帮我写一个百家乐模拟游戏，游戏规则如下：
 * 庄家胜利概率 45.86% 如果压庄赢1:1.95
 * 和牌概率 9.52% 如果压和牌1:8
 * 闲家胜利概率 44.62% 如果压闲赢1:2
 * 玩家初始下注金额20，随机压庄或闲，不压和，输了翻倍压，最高一把压5w，赢了还从20开始压，本金10w，一直玩，直到本金归零或者达到100w为止，记录下每次下注的金额，以及每次输赢的金额，最后输出结果
 * 赢到1
 */
function simulateBaccarat() {
  let playerFunds = 100000;  // 初始本金
  const targetFunds = 1000000;  // 目标金额
  let betAmount = 20;  // 初始下注金额
  const baseBet = 20;  // 基础下注金额
  const maxBet = 50000;  // 最大下注金额
  let rounds = 0;  // 游戏轮数
  let betHistory = [];  // 记录下注金额和输赢情况

  // 庄家、和牌、闲家的胜率
  const bankerWinRate = 0.4586;
  const tieRate = 0.0952;
  const playerWinRate = 0.4462;

  while (playerFunds > 0 && playerFunds < targetFunds) {
      rounds++;

      // 随机决定玩家压庄家或闲家
      const isBetOnBanker = Math.random() < 0.5;

      // 保存下注前的信息
      betHistory.push({
          round: rounds,
          bet: betAmount,
          betOn: isBetOnBanker ? 'Banker' : 'Player',
          fundsBefore: playerFunds
      });

      // 随机生成一个 0 到 1 之间的数，决定胜负
      const outcome = Math.random();

      if (outcome < bankerWinRate) {
          // 庄家赢
          if (isBetOnBanker) {
              playerFunds += betAmount * 1.95;
              betHistory[betHistory.length - 1].result = 'Win';
          } else {
              playerFunds -= betAmount;
              betHistory[betHistory.length - 1].result = 'Lose';
          }
      } else if (outcome < bankerWinRate + tieRate) {
          // 和牌
          betHistory[betHistory.length - 1].result = 'Tie (No bet on Tie)';
      } else {
          // 闲家赢
          if (!isBetOnBanker) {
              playerFunds += betAmount * 2;
              betHistory[betHistory.length - 1].result = 'Win';
          } else {
              playerFunds -= betAmount;
              betHistory[betHistory.length - 1].result = 'Lose';
          }
      }

      // 更新下注后的资金
      betHistory[betHistory.length - 1].fundsAfter = playerFunds;

      if (playerFunds <= 0) {
          break;  // 本金归零，结束游戏
      }

      // 如果赢了，下注金额重置为基础金额
      if (betHistory[betHistory.length - 1].result === 'Win') {
          betAmount = baseBet;
      } else if (betHistory[betHistory.length - 1].result === 'Lose') {
          // 输了翻倍下注，最大下注金额为5万
          betAmount = Math.min(betAmount * 2, maxBet);
      }
  }

  // 输出结果
  console.log(`游戏结束，共进行了 ${rounds} 轮`);
  console.log(`最终资金: ${playerFunds}`);
  console.log('下注记录:');
  console.table(betHistory);
}

// 运行游戏
simulateBaccarat();
