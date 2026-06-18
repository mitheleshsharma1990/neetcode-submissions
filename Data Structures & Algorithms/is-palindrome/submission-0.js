class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.replace(/[^a-zA-Z0-9]/g, '')
        let start = 0
        let end = newS.length - 1
        while( start <= end){

            if(newS[start].toLowerCase() != newS[end].toLowerCase()){
                return false
            }
            start++
            end--
        }
        return true
    }
}
