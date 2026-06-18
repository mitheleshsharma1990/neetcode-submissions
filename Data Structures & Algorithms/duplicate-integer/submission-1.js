class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        for(let i = 0;i<nums.length;i++){
            const key = nums[i]
            if(key in map){
                map[key]++
                return true
            }else {
                map[key] = 1
            }
        }
        return false
    }

}
