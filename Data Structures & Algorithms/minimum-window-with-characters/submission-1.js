class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return ""
        let tMap = {}
        for(let tChar of t ){
            tMap[tChar] = (tMap[tChar] || 0) + 1
        }
        let left = 0;
        let right = 0;
        let sMap = {};
        let have = 0
        const need = Object.keys(tMap).length;
        let minLength = Infinity;
        let res = [-1,-1]
        while(right<s.length){
            let sChar = s[right]
            sMap[sChar] = (sMap[sChar] || 0) + 1
            if(tMap[sChar] && sMap[sChar] === tMap[sChar]){
                have++
            }
            while(have === need){
                if(right-left+1 < minLength){
                    minLength = right-left+1;
                    res = [left,right]
                }
                let leftChar  = s[left];
                sMap[leftChar]--
                if(tMap[leftChar] && sMap[leftChar] < tMap[leftChar]){
                    have--
                }
                left++
            }
            right++
        }
        const [start, end] = res;
        return minLength === Infinity
            ? ""
            : s.slice(start, end + 1);

    }
}
