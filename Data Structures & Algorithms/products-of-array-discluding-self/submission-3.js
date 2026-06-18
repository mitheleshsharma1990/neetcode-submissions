class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let prefix = [];
        let suffix = [];

        for(let i = 0;i< nums.length;i++){
            if(i == 0){
                prefix[i] =  nums[i] 
            }else {
                prefix[i] =  nums[i] * prefix[i-1]
            }
        }
        for(let i = nums.length -1;i>=0;i--){
            if(i == nums.length -1){
                suffix[i] =  nums[i] 
            }else {
                suffix[i] =  nums[i] *  suffix[i+1]
            }
        }
        let product = [];
        for(let i = 0;i< nums.length;i++){
            if(i == 0){
                product.push(suffix[i+1])
            }else if(i == nums.length -1){
                product.push(prefix[i-1])
            }else {
                let productValue = prefix[i-1] * suffix[i+1]
                product.push(productValue)
            }
            
        }
        return product
    }

}
