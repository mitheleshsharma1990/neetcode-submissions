class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()
        for(let i = 0;i<s.length;i++){
            if(map.has(s[i])){
                let value = map.get(s[i])
                map.set(s[i],value+1)
            } else {
                map.set(s[i],1)
            }
        }
        for(let i = 0;i<t.length;i++){
            if(map.has(t[i])){
               let value = map.get(t[i])
               if(value == 1){
                    map.delete(t[i])
               }else {
                    map.set(t[i],value -1)
               }
            }else {
                return false
            }
        }
        if(map.size == 0){
            return true
        }
        return false
    }
}
