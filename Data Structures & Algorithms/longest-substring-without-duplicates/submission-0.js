class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left= 0;
        let right = 0;
        let map = {};
        let maxLen = 0;  
        while(right < s.length){ 
            let char = s[right]
            while(map[char]){
                let leftChar = s[left]
                map[leftChar] = map[leftChar] -1
                if(map[leftChar] === 0){
                    delete map[leftChar]
                }
                left++ 
            }
            map[char] = 1
            maxLen = Math.max(maxLen,right-left+1)
            right++
        }
        return maxLen
    }
}
