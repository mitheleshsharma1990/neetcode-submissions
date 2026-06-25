class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let cols = board[0].length;
        let path = new Set();
        function dfs(r,c,i){
            if(i === word.length) return true

            if(r< 0 || r >= rows || c < 0 || c >= cols ||
            path.has(`${r}-${c}`) || board[r][c] != word[i]){
                return false
            }
            path.add(`${r}-${c}`);
            const res = dfs(r,c+1,i+1) ||
                        dfs(r,c-1,i+1) ||
                        dfs(r+1,c,i+1) ||
                        dfs(r-1,c,i+1);
            path.delete(`${r}-${c}`);
            return res;
        }
        for(let r = 0;r<rows;r++){
            for(let c = 0;c<cols;c++){
                if(dfs(r,c,0)) return true
            }
        }
        return false
    }

}
