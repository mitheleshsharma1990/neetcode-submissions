class PrefixTree {
    constructor() {
        this.hm = new Map();
        this.freq = 0;
        this.isLast = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this;
        for(let char of word){
            if(current.hm.has(char)){
                current.freq++
            }else {
                current.hm.set(char, new PrefixTree())
                current.freq++
            }
            current = current.hm.get(char);
        }
        current.isLast = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this;
        for(let char of word){
            if(current.hm.has(char)){
                current = current.hm.get(char)
            }else {
                return false
            }
        }
        if(current.isLast){
                    return true
                }else {
                    return false
                }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this;
        for(let char of prefix){
            if(current.hm.has(char)){
                current = current.hm.get(char)
            }else {
                return false
            }
        }
        return true
    }
}
