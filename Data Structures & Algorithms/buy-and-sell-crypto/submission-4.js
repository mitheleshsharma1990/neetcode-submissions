class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left+1;
        let max = 0;
        let len = prices.length;
        while(right< len){
            if(prices[left]> prices[right]){
                left = right;
                right++
            }else {
                let profit = prices[right] - prices[left]
                max = Math.max(max,profit);
                right++
            }
        }
        return max
    }
}
// profit = sell - buy