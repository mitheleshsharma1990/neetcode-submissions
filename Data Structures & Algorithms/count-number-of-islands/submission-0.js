class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;
        for(let r = 0;r<rows;r++){
            for(let c = 0;c<cols;c++){
                if(grid[r][c] === "1"){
                    count++
                    dfs(grid,r,c)
                }
            }
        }
        function dfs(grid,r,c){
            if(r<0 ||
                c < 0||
                r>=rows ||
                c>= cols ||
                grid[r][c] === "0"){
                    return
            }
            grid[r][c] = "0";
            dfs(grid,r-1,c)
            dfs(grid,r+1,c)
            dfs(grid,r,c+1)
            dfs(grid,r,c-1)
        }
        return count
    }
    
}
