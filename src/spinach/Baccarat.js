//百家乐游戏

// 玩法1：和牌 8倍，2块开始，只要不亏就继续下注，如果亏了就加2
function BaccaratDraw(totalMonty, betMoney, odds) {
  let totalBetMoney = 0; // 累计下注金额
  let lose = false;
  let betCount = 0;
  // 赢钱返还额预期
  let earn = 0;
  let nextObj = null;
  while (!lose) {
    betCount++;
    if (totalMonty<=0) {
      lose = true;
    } else {
      nextObj = getNextBetMoney(betMoney, totalBetMoney, odds);
      betMoney = nextObj.betMoney
      totalBetMoney = nextObj.totalBetMoney + betMoney
      earn = betMoney * odds;
      totalMonty -= betMoney;
    }
    console.log(`第${betCount}次下注，下注金额${betMoney}，累计下注金额${totalBetMoney}，剩余金额${totalMonty}，赢钱返还额预期${earn}`);
  }
}

// 传入当前投注额，累计投注额，倍率，返回下次投注额，使得返还额必须大于累计投注额
function getNextBetMoney (betMoney, totalBetMoney, odds) {
  // const originBetMoney = betMoney;
  const originTotalBetMoney = totalBetMoney;
  // 每次投注额+2，直到返还额大于总投注额
  let curtBetMoney = betMoney;
  let curtTotalBetMoney = totalBetMoney;
  // console.log(`判断${curtBetMoney},${curtTotalBetMoney}`)
  while (curtBetMoney*odds<=curtTotalBetMoney+curtBetMoney) {
    curtBetMoney += 2;
    curtTotalBetMoney = curtBetMoney + originTotalBetMoney
    // console.log(`当前投注额${curtBetMoney},总投注额${curtTotalBetMoney}`);
  }

  return {betMoney: curtBetMoney, totalBetMoney: curtTotalBetMoney}
}

BaccaratDraw(2775, 2, 8);