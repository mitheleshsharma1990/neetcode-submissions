class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedArr = nums.sort((a,b)=> a-b);
        let n = sortedArr.length
        let result = []
        for(let i = 0;i< n - 2;i++){
            if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;
            let s = i+1
            let e = n-1
            while(s<e){
                let sum = sortedArr[i]+ sortedArr[s] + sortedArr[e]
                if(sum <0){
                    s++
                }else if (sum>0) {
                    e--
                }else{
                    result.push([sortedArr[i], sortedArr[s] , sortedArr[e]])
                    while (s < e && sortedArr[s] === sortedArr[s + 1]) s++;
                    while (s < e && sortedArr[e] === sortedArr[e - 1]) e--;
                    s++
                    e--
                }
            } 
        }
        return result
    }
}
