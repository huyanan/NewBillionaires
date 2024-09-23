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
function getBalanceOddEven() {
    return Math.random().toString().split('.')[1][0] % 2 === 0 ? '双' : '单'
}
// csgo 单双 双赔率2 单赔率1.7
function csgoOddEvent () {
    return Math.random() <= 0.54 ? '双' : '单'
}
// csgo 单双 双赔率2 单赔率1.7
// function csgoOddEvent2 () {
//     return Math.random() <= 0.687 ? '双' : '单'
// }
console.log('篮球 lol dota' , getBalanceOddEven());
console.log('csgo 倍率计算', csgoOddEvent())
// console.log('csgo 抽样计算', csgoOddEvent2())     


// 0,1,2,3,4,5,6,7,8,9
// 2+1.7=3.7 
// console.log(1.971+1.742);
// console.log(2 / 3.7);
// console.log(1.7 / 3.7);
// console.log(Math.random())

// console.log(11 + 5)
// console.log(11/16)
// console.log(5/16)
