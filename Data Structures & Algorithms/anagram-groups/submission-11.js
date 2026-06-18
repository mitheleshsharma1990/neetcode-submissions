class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    //     const map = {};
    //     for(let i = 0;i< strs.length;i++){
    //         let str = strs[i]
    //         const sortedStr = [...str].sort().join("");
    //         if(map[sortedStr]){
    //             map[sortedStr].push(i)
    //         }else {
    //             map[sortedStr] = [i]
    //         }
    //     }
    //     let result = []
    //     Object.values(map).forEach(item=>{
    //         let res = []
    //         item.forEach(str=>{
    //             res.push(strs[str])
    //         })
    //         result.push(res)
    //     })
    //    return result
    let map = {}
    let result = []
    for(let j=0;j< strs.length;j++){
        let str = strs[j]
        let arrKey = Array(26).fill(0);
        for(let i = 0;i<str.length;i++){
            let index = str[i].charCodeAt(0) - "a".charCodeAt(0);
            if(arrKey[index]){
                arrKey[index]++
            }else {
                arrKey[index] = 1
            }
        }
        let mapKey = arrKey.join("&")
        if(map[mapKey] != undefined) {
            map[mapKey].push(str)
        }else {
           map[mapKey] = [str]
           
        }
    }
    return Object.values(map)
    }
}
