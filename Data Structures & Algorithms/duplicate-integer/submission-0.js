class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
        for(let i = 0;i<nums.length;i++){
            if(map.has(nums[i])){
                let value = map.get(nums[i])
                map.set(nums[i],value+1)
                return true
            } else {
                map.set(nums[i],1)
            }
        }
        return false
}
}
