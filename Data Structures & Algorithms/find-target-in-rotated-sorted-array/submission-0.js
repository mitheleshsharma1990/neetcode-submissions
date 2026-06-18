class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivot = -1
        let left = 0;
        let right = nums.length -1;
        while(left < right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] > nums[right]){
                //part 1
                left = mid +1
            }else {
                // part 2
                right = mid
            }
        }
        pivot = left;
        left = 0;
        right = nums.length - 1

        if(target >= nums[pivot] && target <= nums[right]){
            left = pivot
        }else {
            right = pivot -1
        }
        let result = -1
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === target){
                result = mid
                return result
            }else if(nums[mid] > target){
                right = mid -1
            }else{
                left = mid +1
            }
        }
        return result
    }
}
