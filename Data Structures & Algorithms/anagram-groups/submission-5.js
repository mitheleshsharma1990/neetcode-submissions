class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(let i = 0;i< strs.length;i++){
            let str = strs[i]
            const sortedStr = [...str].sort().join("");
            if(map[sortedStr]){
                map[sortedStr].push(i)
            }else {
                map[sortedStr] = [i]
            }
        }
        let result = []
        Object.values(map).forEach(item=>{
            let res = []
            item.forEach(str=>{
                res.push(strs[str])
            })
            result.push(res)
        })
       return result
    }
}
