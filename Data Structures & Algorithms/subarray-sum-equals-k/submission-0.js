class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefix = []
        for(let i = 0;i<nums.length;i++){
            if(i == 0){
                prefix[i] = nums[i]
            }else {
                 prefix[i] = nums[i] + prefix[i-1]
            }
        }
        let map = new Map();
        let count = 0
        for(let i = 0;i<prefix.length;i++){
            if(prefix[i] == k) count++;
            let value = prefix[i] - k;
            if(map.get(value)){
                count = count + map.get(value);
            }
            let localCount = map.get(prefix[i]) || 0
            map.set(prefix[i],localCount + 1)
            
        }
        return count
    }
}
