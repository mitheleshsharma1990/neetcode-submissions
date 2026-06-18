class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = {}
        for(let num of nums){
            map[num] = (map[num] || 0) + 1
        }
        let ansCount = 0;
        for(let num of nums){
            let count = 0;
            if(map[num -1]){
                count++
                let current = num -1
                while(map[current - 1]){
                    count++
                    current = current -1
                }
            }
            ansCount = Math.max(count+1,ansCount)
            
        }
        return ansCount
    }
}
