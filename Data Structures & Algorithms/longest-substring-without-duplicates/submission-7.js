class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s == " ") return 1
        let left = 0;
        let right = 0;
        let map = {}
        let max = 0
        while(right < s.length){
           if(map[s[right]]){
                while(map[s[right]]){
                    delete map[s[left]]
                    left++
                }
           }else {
             map[s[right]] = 1
             let len = Object.keys(map).length;
             max = Math.max(max,len)
             right++
           }
        }
        return max
    }
}
