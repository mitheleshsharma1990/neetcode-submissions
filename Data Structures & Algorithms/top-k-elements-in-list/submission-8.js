class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
topKFrequent(nums, k) {
  if(nums.length == k) return nums;
  let map = {}
  let len = nums.length;
  //add the frequency in the map for every value
  for(let num of nums){
    map[num] = (map[num] || 0) + 1;
  }

  const sorted = Object.entries(map).sort((a,b)=>{
      return b[1] - a[1]
  })
  
  return sorted.slice(0,k).map(val => val[0])
}
}
