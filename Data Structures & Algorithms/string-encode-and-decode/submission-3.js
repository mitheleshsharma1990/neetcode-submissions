class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return ""
        if(strs.lenght === 1 && strs[0] == "") return ""
        let sizes = [];
 
        for(let str of strs){
            sizes.push(str.length)
        }   
        return  sizes.join(",") + "$#$" + [...strs].join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // "mangoApple" 5
    decode(str) {
        if(str === "") return []
        const [sizes,stri] = str.split("$#$");
        const sizesArr = sizes.split(",");
        let strin = stri;
        let i = 0;
        let j = 0;
        let output = []
        while(j < sizesArr.length){
            let len = Number(sizesArr[j]);
            let tempstrin = strin.slice(i,i + len)
            output.push(tempstrin)
            i += len
            j++
        }
        return output
    }
}
