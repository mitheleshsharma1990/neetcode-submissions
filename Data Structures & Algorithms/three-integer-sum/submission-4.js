class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // [-4,-1,-1,0,1,2]
    threeSum(nums) {
        let result = [];
        nums.sort((a,b)=> a-b)
        let len = nums.length;
        for(let i = 0;i<len;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
           let left = i+1;
           let right = len - 1;
           while(left < right){
            let q = nums[i] + nums[left] + nums[right];
            if(q>0){
                right--
            }else if(q< 0){
                left++
            }else if (q === 0) {
                result.push([nums[i] , nums[left] , nums[right]]);
                // Skip duplicate values for the second element
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicate values for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
           }
        }
        return result

    }
}
