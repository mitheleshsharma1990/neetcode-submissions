class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-zA-Z0-9]/g, ""); 
        let left = 0;
        let right = cleaned.length -1;
        while(left <= right){
            if(cleaned[left].toLowerCase() === cleaned[right].toLowerCase()){
                left++
                right--
            }else {
                return false
            }
        }
        return true
    }
}
