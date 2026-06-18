class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Map()
        for(let i = 0;i<nums.length;i++){
            map.set(nums[i],i)
        }
        let ans = 0
        for(let i = 0;i<nums.length;i++){
            if(!map.has(nums[i] - 1)){
                let count = 1
                let x = nums[i]
                while(map.has(x+1)){
                    count++
                    x++
                }
                ans = Math.max(count,ans)
            }
        }
        return ans
    }
}
