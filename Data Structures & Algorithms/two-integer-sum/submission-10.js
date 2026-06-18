class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i = 0;i<nums.length;i++){
            let q = target- nums[i]
            if(map[q] != undefined){
                if(q === nums[i]){
                    if(map[q] != i) return [map[q],i]
                }else {
                    return [map[q],i]
                }
            }else {
                map[nums[i]] = i
            }
        }
    }
}
