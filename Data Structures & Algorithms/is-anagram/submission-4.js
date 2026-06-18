class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(!s || !t) return false
     if(s.length !== t.length) return false
     let sMap = {}
     for(let schar of s){
        if(sMap[schar]) sMap[schar]++
        else sMap[schar] = 1
     }
     let tMap = {}
     for(let tchar of t){
        if(tMap[tchar]) tMap[tchar]++
        else tMap[tchar] = 1
     }
     for(let schar of s){
        if(sMap[schar] != tMap[schar]) return false
     } 
     return true

    }

}
