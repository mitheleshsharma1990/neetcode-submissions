class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // let min = Infinity
        // for(let num of nums){
        //     min = Math.min(num,min)
        // }
        // return min
        //[3,4,5,6,1,2]
        let left = 0
        let right = nums.length -1 // 5
        let min = Infinity
        while(left < right){
            let mid = parseInt((left+right)/2); // mid = 3,1
            if(nums[mid] > nums[right]) {
                left = mid +1 // right = 2
            }else {
                right = mid // left = 1
            }
            
        }
        return nums[left]
    }
}
