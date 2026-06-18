class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
       let left = 0;
       let right = 0;
        let map = {}
        let maxFreq = 0
        let maxLen = 0
       while(right<s.length){
            map[s[right]] = (map[s[right]] || 0) + 1;
            maxFreq = Math.max(map[s[right]],maxFreq);
            while(right-left+1 - maxFreq > k){
                let leftChar = s[left];
                map[leftChar]--
                left++
            }
            maxLen = Math.max(maxLen, right-left+1)
            right++
       } 

       return maxLen
       
        
    }
}
