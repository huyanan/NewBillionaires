/**
 * 单双数长龙玩法
 * winMoney 为每条长龙要赚的钱 默认为10
 * odds 为当前要压住的倍率 默认为2
 * betAmount 为当前回合下注金额 默认为
 * 
 * 
 * 涉及到的公式
 * 1. 计算当前下注能返回的金额
 *    winMoney = betAmount * odds
 * 2. 计算赚到的钱
 *    winMoney - betAmount = betAmount * odds - betAmount = betAmount * (odds - 1)
 * 3. 计算下注金额
 *    betAmount = winMoney / (odds - 1)
 * 
 * 
 */

// 随机获取单双数, 通过小数点第一位判断
function getOddEven() {
    return Math.random().toString().split('.')[1][0] % 2 === 0 ? '双' : '单'
}
console.log(getOddEven());
