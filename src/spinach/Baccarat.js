//百家乐游戏

// 玩法1：和牌 8倍，2块开始，只要不亏就继续下注，如果亏了就加2
function BaccaratDraw(totalMonty, betMoney, odds) {
  let totalBetMoney = 0; // 累计下注金额
  let lose = false;
  let betCount = 0;
  let curtBetMoney = betMoney;
  // 赢钱返还额预期
  let earn = 0;
  while (!lose) {
    betCount++;
    betMoney = curtBetMoney;
    if (totalBetMoney > totalMonty) {
      lose = true;
    } else {
      earn = betMoney * odds;
      console.log(`   当前下注额${betMoney},返还额${earn},累计下注额${earn}`);
      while(earn <= totalBetMoney){
        betMoney+=2;
        earn = betMoney * odds;
        curtBetMoney = betMoney;
        console.log(`赢钱返还额预${earn}期小于累计下注金额${totalBetMoney}，加注到${curtBetMoney}`)
      }
      earn = curtBetMoney * odds;
      totalMonty -= curtBetMoney;
      totalBetMoney += curtBetMoney;
    }
    console.log(`第${betCount}次下注，下注金额${betMoney}，累计下注金额${totalBetMoney}，剩余金额${totalMonty}，赢钱返还额预期${earn}`);
  }
}

BaccaratDraw(2775, 2, 8);