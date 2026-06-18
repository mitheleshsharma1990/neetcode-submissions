class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];
        let len = nums.length;
        for(let i = 0;i<len;i++){
            if(i == 0){
                prefix[i] = nums[i]
            }else {
                prefix[i] = nums[i] * prefix[i-1]
            }
        }
        for(let i = len-1 ;i>=0;i--){
            if(i == len-1){
                suffix[i] = nums[i]
            }else {
                suffix[i] = nums[i] * suffix[i+1]
            }
        }
        let output = []
        for(let i = 0;i<len;i++){
            if(i === 0){
                output[i] = suffix[i+1]
            } else if(i === len -1){
                output[i] = prefix[i-1]
            } else {
                output[i] = suffix[i+1] * prefix[i-1]
            }
        }

        return output

    }

}
