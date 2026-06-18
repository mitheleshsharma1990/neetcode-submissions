class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i =0;i<nums.length;i++){
            let diff = target - nums[i] ;
            if(map.has(diff)){
                let index = map.get(diff);
                return [index,i]
            }
            map.set(nums[i],i)
        }
        
    }
}
