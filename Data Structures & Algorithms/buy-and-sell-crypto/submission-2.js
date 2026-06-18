class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = left+1
        let length = prices.length;
        let max = 0;
        while(right < length){
            if(prices[left] > prices[right]){
                left = right
                right++
            }else {
                let profit = prices[right] - prices[left]
                max = Math.max(max,profit)
                right++
            }
        }
        return max
    }
}
// profit = sell - buy