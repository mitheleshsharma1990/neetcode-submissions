class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = {};

        for(let str of strs){
            let arr = new Array(26).fill(0);
            for(let s of str){
                let index = s.charCodeAt(0) - "a".charCodeAt(0)
                arr[index] = arr[index] + 1;
            }

            const key = arr.join(",");
            if(!output[key]){
                output[key] = []
            }
            output[key].push(str)
        }
        return Object.values(output)
    }
}
