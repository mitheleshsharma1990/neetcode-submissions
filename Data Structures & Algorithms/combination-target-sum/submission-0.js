class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        let index = 0;
        let current = [];
        let total = 0;
        function decisionTree(index,current,total){
            if(total == target){
                result.push([...current]);
                return
            }
            if(total>target || index >= nums.length){
                return
            }
            current.push(nums[index])
            decisionTree(index,current,total+nums[index]);
            current.pop(nums[index])
            decisionTree(index+1,current,total);
        }
        decisionTree(index,current,total);
        return result
    }
    
}
