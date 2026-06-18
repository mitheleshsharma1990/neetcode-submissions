class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(let i = 0;i<nums.length;i++){
            if(map.has(nums[i])){
                let value = map.get(nums[i])
                map.set(nums[i],value+1)
            }else {
                map.set(nums[i],1)
            }
        }
        let bucket = Array(nums.length + 1).fill().map(()=>[])
        for(let [num,freq] of map.entries()){
            bucket[freq].push(num)
        }
        let results = []
        for(let i = bucket.length - 1;i>=0;i--){
            for(let j = 0;j<bucket[i].length;j++){
                results.push(bucket[i][j])
                if (results.length == k) return results
            }
        }
    }
}
