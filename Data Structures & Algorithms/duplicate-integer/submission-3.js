class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let num of nums){
            if(map[num]) map[num]++
            else map[num] = 1
        }
        for(let num of nums){
            if(map[num]>1){
                return true
            }
        }
        return false
    }

}
