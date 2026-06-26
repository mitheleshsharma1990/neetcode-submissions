class WordDictionary {
    constructor() {
        this.hm = new Map();
        this.isLast = false;
        this.validLengths = new Set();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this;
        let len = word.length;
        for(let char of word){
            current.validLengths.add(len);
            if(!current.hm.has(char)){
                current.hm.set(char,new WordDictionary())
            }
            current = current.hm.get(char)
        }
        current.isLast = true
        current.validLengths.add(len)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this;
        let index = 0;
        let targetLength = word.length;
        function dfs(index,current){
            if(!current.validLengths.has(targetLength)){
                return false
            }
            if(index === word.length){
                return true
            }
            let char = word[index];
            if(char === "."){
                let childNodes = current.hm.values();
                for(let childNode of childNodes){
                    if(dfs(index+1, childNode)){
                        return true
                    }
                }
                return false

            }else if(current.hm.has(char)){
                    current = current.hm.get(char)
                    return dfs(index+1,current)
            }
            return false
        }
        return dfs(0,this)
    }
}
