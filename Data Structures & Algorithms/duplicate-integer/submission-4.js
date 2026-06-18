class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}
        for(let num of nums){
            if(map[num]) {
                map[num]++
                return true
            } else {
                map[num] = 1
            }
        }
        return false
    }

}
