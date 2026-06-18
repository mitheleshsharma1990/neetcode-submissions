class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
topKFrequent(nums, k) {
  let map = {};
  for(let num of nums){
    if(map[num] !== undefined){
        map[num]++
    }else {
        map[num] = 1;
    }
  }
  nums.sort((a,b)=> map[b]-map[a]);
  let set = new Set();
  for(let num of nums){
    set.add(num)
  }
  let result = [...set]
  let output = []
  for(let i = 0;i<k;i++){
    output.push(result[i])
  }
  return output
  
}
}
