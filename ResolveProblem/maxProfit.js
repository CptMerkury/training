/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (!prices) return 0;

    let profitCur = 0;
    let profitFar = 0;
    
    for (let i = 1; i < prices.length; i++) {
        profitCur = Math.max(0, profitCur += prices[i] - prices[i-1])
        profitFar = Math.max(profitCur, profitFar)
    }

    return profitFar;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([]));

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = function(prices) {
    if (!prices) return 0;

    let allProfit = 0;
        
    for (let i = 1; i < prices.length; i++) {
        allProfit += Math.max(0,prices[i] - prices[i-1])
    }

    return allProfit;
};

console.log(maxProfit2([7,1,5,3,6,4]));
console.log(maxProfit2([7,6,4,3,1]));
console.log(maxProfit2([2, 4, 1]));
console.log(maxProfit2([]));