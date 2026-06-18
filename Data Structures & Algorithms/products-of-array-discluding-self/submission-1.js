class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let prefix = 1
        let options = []
        for(let i = 0;i<nums.length;i++){
            options[i] = prefix
            prefix = prefix * nums[i]
        }
        let suffix = 1
        for(let i = nums.length - 1 ;i>= 0;i--){
            options[i] = options[i] * suffix
            suffix = suffix * nums[i]
        }

        return options
        
    }
}
