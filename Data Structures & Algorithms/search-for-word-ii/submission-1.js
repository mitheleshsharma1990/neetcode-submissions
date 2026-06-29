class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trieRoot = new Trie()
        const rows = board.length;
        const cols = board[0].length
        for(let word of words){
            trieRoot.addWord(word)
        }
        let current = trieRoot;
        const visited = new Set();
        const result = new Set()
        function dfs(r,c,current,word){
            if(
            r < 0 || 
            r >= rows || 
            c < 0 || 
            c >= cols ||
            !current.hm.has(board[r][c]) ||
            visited.has(`${r}-${c}`)
            ) {
                return false
            }
            let char = board[r][c]
            current = current.hm.get(char)
            visited.add(`${r}-${c}`);
            word += char
            if(current.isLast){
                result.add(word)
            }
            dfs(r+1,c,current,word)
            dfs(r-1,c,current,word)
            dfs(r,c+1,current,word)
            dfs(r,c-1,current,word)
            visited.delete(`${r}-${c}`);
        }

        for(let r =0;r<rows ; r++){
            for(let c =0;c<cols;c++){
                if(dfs(r,c,current,"")) return true
            }
        }

        return Array.from(result)
        
    }

 
}

class Trie {
    constructor(){
        this.hm= new Map();
        this.isLast = false;
        this.freq = 0
    }

    addWord(word){
        let current = this;
        for(let char of word){
            if(!current.hm.has(char)){
                current.hm.set(char, new Trie())
            }
            current.freq++;
            current  = current.hm.get(char);
        }
        current.isLast = true
    }
    searchWord(word){
        for(let char of word){
            if(current.hm.has(char)){
                current  = current.hm.get(char);
            } else {
                return false
            }
        }
        return current.isLast
    }
}
