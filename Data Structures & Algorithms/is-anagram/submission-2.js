class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let i = 0;
        let len = s.length;
        let mapS = {}
        let mapT = {}
        while(i<len){
            let keyS = s[i];
            let keyT = t[i];
            if(keyS in mapS){
                mapS[keyS]++;
            }else {
                mapS[keyS] =1;
            }
            if(keyT in mapT){
                mapT[keyT]++;
            }else {
                mapT[keyT] =1;
            }
            i++
        }
        for(let key in mapS){
            if(mapS[key] !== mapT[key]){
                return false
            }
        }
        return true
    }
}
