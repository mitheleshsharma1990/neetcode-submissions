class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        //take every string in array and make a key
        for(let i = 0;i<strs.length;i++){
            let keyArr = Array(26).fill(0)

            for(let j = 0;j<strs[i].length;j++){
                let index = strs[i][j].charCodeAt(0) - "a".charCodeAt(0)
                keyArr[index]++
            }

            let key =  keyArr.join("#")

            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(strs[i])
        }
        return Array.from(map.values());
    }
}
